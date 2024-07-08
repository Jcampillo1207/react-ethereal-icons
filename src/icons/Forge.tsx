
import React from 'react';

/**
 * @component
 * @name Forge
 * @description Componente de ícono SVG generado automáticamente para Forge.
 * @preview https://your-preview-url.com/forge
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface ForgeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Forge: React.FC<ForgeProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#F46C00"} d="M4.372 1c-.633 0-1.146.513-1.146 1.147v13.302c0 .634.513 1.147 1.146 1.147h5.505c.633 0 1.147.514 1.147 1.147v1.835c0 .633.513 1.147 1.147 1.147h5.504c.633 0 1.147-.514 1.147-1.147V6.275c0-.633-.514-1.147-1.147-1.147h-5.504a1.147 1.147 0 0 1-1.147-1.146V2.147C11.024 1.513 10.51 1 9.877 1z"/><path fill={color1 ? color1 : "#FFA700"} d="M6.147 3C5.513 3 5 3.513 5 4.147v13.52c0 .633.513 1.147 1.147 1.147h5.206c.634 0 1.147.513 1.147 1.147v1.892c0 .634.513 1.147 1.147 1.147h5.206c.634 0 1.147-.513 1.147-1.147V8.333c0-.634-.513-1.147-1.147-1.147h-5.206A1.147 1.147 0 0 1 12.5 6.039V4.147C12.5 3.513 11.987 3 11.353 3z" opacity=".5"/></svg>
);

export default Forge;
  