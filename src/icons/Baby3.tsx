
import React from 'react';

/**
 * @component
 * @name Baby3
 * @description Componente de ícono SVG generado automáticamente para Baby3.
 * @preview https://your-preview-url.com/baby3
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface Baby3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Baby3: React.FC<Baby3Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 8.121a2.88 2.88 0 0 1-4.142 0 3.05 3.05 0 0 1 0-4.242A2.89 2.89 0 0 1 11.928 3M9 12h.01M15 12h.01m3.354 6.364A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"/></svg>
);

export default Baby3;
  