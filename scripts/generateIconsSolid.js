const fs = require("fs-extra");
const path = require("path");
const { transform } = require("@svgr/core");
const { optimize } = require("svgo");

const variant = "solid";
const svgDir = path.join(__dirname, `../svg/${variant}`);
const iconsDir = path.join(__dirname, `../src/${variant}/icons`);
const indexFile = path.join(__dirname, `../src/${variant}/index.ts`);

const generateIconComponent = async (filePath, iconName) => {
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
      prettier: false,
      svgo: false, // No usar SVGO de SVGR, ya optimizamos manualmente
    },
    { componentName: iconName }
  );

  // Mantener el viewBox y permitir la personalización de color
  const cleanedJsxCode = jsxCode
    .replace(/width=".*?"/g, "")
    .replace(/height=".*?"/g, "")
    .replace(/<svg /, `<svg viewBox="0 0 24 24" `)
    .replace(
      /<(path|circle|rect|polygon|line|polyline|ellipse)([^>]*) fill="([^"]*)"/g,
      (match, p1, p2, p3) => `<${p1}${p2} fill={color || 'currentColor'}`
    );

  // Añadir props TypeScript para el componente
  const tsxCode = `
import React from 'react';

interface ${iconName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const ${iconName}: React.FC<${iconName}Props> = ({ size = 24, color, className, ...props }) => (
  ${cleanedJsxCode.replace(
    "<svg ",
    "<svg className={className} width={size} height={size} {...props} "
  )}
);

export default ${iconName};
  `;

  // Escribir el componente en el archivo correspondiente
  const componentPath = path.join(iconsDir, `${iconName}.tsx`);
  await fs.outputFile(componentPath, tsxCode);
};

const generateUniversalIconComponent = async (iconNames) => {
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
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color, className, ...props }) => {
  const icons = { ${iconNames.join(", ")} };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color={color} className={className} {...props} />;
};

export default IconUniversal;
`;

  const componentPath = path.join(iconsDir, "IconUniversal.tsx");
  await fs.outputFile(componentPath, componentCode);
};

const generateIndexFile = async (iconNames) => {
  const exports = iconNames
    .map(
      (iconName) =>
        `export { default as ${iconName} } from './icons/${iconName}';`
    )
    .join("\n");
  const indexContent = `${exports}\nexport { default as IconUniversal } from './icons/IconUniversal';\n`;
  await fs.outputFile(indexFile, indexContent);
};

const toPascalCase = (str) => {
  return str.replace(/(^\w|-\w)/g, (s) => s.replace("-", "").toUpperCase());
};

const generateIcons = async () => {
  await fs.emptyDir(iconsDir);
  const files = await fs.readdir(svgDir);

  const iconNames = [];

  for (const file of files) {
    if (path.extname(file) === ".svg") {
      const iconName = toPascalCase(path.basename(file, ".svg"));
      iconNames.push(iconName);
      await generateIconComponent(path.join(svgDir, file), iconName);
    }
  }

  await generateUniversalIconComponent(iconNames);
  await generateIndexFile(iconNames);
};

generateIcons()
  .then(() => console.log("Solid icons generated successfully"))
  .catch((err) => console.error("Error generating solid icons:", err));
