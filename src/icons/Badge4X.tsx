
import React from 'react';

/**
 * @component
 * @name Badge4X
 * @description Componente de ícono SVG generado automáticamente para Badge4X.
 * @preview https://your-preview-url.com/badge4x
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface Badge4XProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge4X: React.FC<Badge4XProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9 9.172 11.828 12m0 0 2.829 2.828M11.828 12l2.829-2.828M11.828 12 9 14.828M3 8v8l3.5 3.5L12 21l5.5-1.5L21 16V8l-3.5-3.5L12 3 6.5 4.5z"/></svg>
);

export default Badge4X;
  