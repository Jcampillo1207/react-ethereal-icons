const fs = require("fs-extra");
const path = require("path");
const { transform } = require("@svgr/core");
const { optimize } = require("svgo");

const svgDir = path.join(__dirname, "../svg");
const iconsDir = path.join(__dirname, "../src/icons");
const indexFile = path.join(__dirname, "../src/index.ts");

const generateIconComponent = async (filePath, iconName, isStroke = true) => {
  let svgCode = await fs.readFile(filePath, "utf-8");

  // Optimizar el SVG
  const optimizedSvg = optimize(svgCode, { path: filePath });
  svgCode = optimizedSvg.data;

  // Transformar el SVG optimizado en un componente React
  const jsxCode = await transform(
    svgCode,
    {
      icon: true,
      typescript: true,
      expandProps: "end",
      prettier: true,
      svgo: false, // No usar SVGO de SVGR, ya optimizamos manualmente
    },
    { componentName: iconName }
  );

  let cleanedJsxCode;

  if (isStroke) {
    // Reemplazar atributos existentes para íconos con stroke
    cleanedJsxCode = jsxCode
      .replace(/width=".*?"/g, "")
      .replace(/height=".*?"/g, "")
      .replace(/<svg /, `<svg viewBox="0 0 24 24" `)
      .replace(/stroke="[^"]*"/g, 'stroke={color ? color : "currentColor"}')
      .replace(
        /(<(path|circle|rect|polygon|line|polyline|ellipse)[^>]*?)fill="[^"]*"/g,
        '$1 stroke={color ? color : "currentColor"}'
      ) // Reemplazar fill existente solo de elementos internos con stroke
      .replace(/stroke-width="[^"]*"/g, "") // Eliminar stroke-width existente
      .replace(/<path/g, "<path strokeWidth={strokeWidth}") // Agregar strokeWidth personalizado
      .replace(/<circle/g, "<circle strokeWidth={strokeWidth}")
      .replace(/<rect/g, "<rect strokeWidth={strokeWidth}")
      .replace(/<polygon/g, "<polygon strokeWidth={strokeWidth}")
      .replace(/<line/g, "<line strokeWidth={strokeWidth}")
      .replace(/<polyline/g, "<polyline strokeWidth={strokeWidth}")
      .replace(/<ellipse/g, "<ellipse strokeWidth={strokeWidth}");
  } else {
    // Reemplazar atributos existentes para íconos con fill y dos colores
    let fillCounter = 0;
    cleanedJsxCode = jsxCode
      .replace(/width=".*?"/g, "")
      .replace(/height=".*?"/g, "")
      .replace(/<svg /, `<svg viewBox="0 0 24 24" `)
      .replace(/fill="[^"]*"/g, (match) => {
        fillCounter++;
        return fillCounter % 2 === 1
          ? 'fill={color1 ? color1 : "' + match.slice(6, -1) + '"}'
          : 'fill={color2 ? color2 : "' + match.slice(6, -1) + '"}';
      });
  }

  // Añadir props TypeScript para el componente
  const tsxCode = `
import React from 'react';

interface ${iconName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const ${iconName}: React.FC<${iconName}Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  ${cleanedJsxCode.replace(
    "<svg ",
    "<svg className={className} color={color} width={size} height={size} {...props} "
  )}
);

export default ${iconName};
  `;

  // Escribir el componente en el archivo correspondiente
  const componentPath = path.join(iconsDir, `${iconName}.tsx`);
  await fs.outputFile(componentPath, tsxCode);
};

const generateIcons = async () => {
  await fs.emptyDir(iconsDir);

  const processDirectory = async (dir, isStroke) => {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await processDirectory(
          filePath,
          filePath.includes("intello") ? false : isStroke
        );
      } else if (path.extname(file) === ".svg") {
        const iconName = toPascalCase(path.basename(file, ".svg"));
        await generateIconComponent(filePath, iconName, isStroke);
      }
    }
  };

  await processDirectory(svgDir, true);

  await generateUniversalIconComponent();
  await generateIndexFile();
};

const generateUniversalIconComponent = async () => {
  const files = await fs.readdir(iconsDir);
  const iconNames = files.map((file) =>
    toPascalCase(path.basename(file, ".tsx"))
  );

  const iconImports = iconNames
    .map((iconName) => `import ${iconName} from './${iconName}';`)
    .join("\n");
  const iconType = iconNames.map((iconName) => `'${iconName}'`).join(" | ");

  const componentCode = `
import React from 'react';
${iconImports}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: ${iconType};
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Ethereal: React.FC<IconProps> = ({ name, size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => {
  const icons = { ${iconNames.join(", ")} };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color={color} strokeWidth={strokeWidth} color1={color1} color2={color2} className={className} {...props} />;
};

export default Ethereal;
`;

  const componentPath = path.join(iconsDir, "Ethereal.tsx");
  await fs.outputFile(componentPath, componentCode);
};

const generateIndexFile = async () => {
  const files = await fs.readdir(iconsDir);
  const iconNames = files.map((file) =>
    toPascalCase(path.basename(file, ".tsx"))
  );

  const exports = iconNames
    .map(
      (iconName) =>
        `export { default as ${iconName} } from './icons/${iconName}';`
    )
    .join("\n");
  const indexContent = `${exports}`;
  await fs.outputFile(indexFile, indexContent);
};

const toPascalCase = (str) => {
  return str.replace(/(^\w|-\w)/g, (s) => s.replace("-", "").toUpperCase());
};

generateIcons()
  .then(() => console.log("Icons generated successfully"))
  .catch((err) => console.error("Error generating icons:", err));
