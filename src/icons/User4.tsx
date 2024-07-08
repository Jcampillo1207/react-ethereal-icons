
import React from 'react';

/**
 * @component
 * @name User4
 * @description Componente de ícono SVG generado automáticamente para User4.
 * @preview https://your-preview-url.com/user4
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface User4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User4: React.FC<User4Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M3 21s-.322-5.791 4.455-8.083M21 21s.322-5.791-4.455-8.083m-9.09 0a6 6 0 1 1 9.09 0m-9.09 0q.144.167.302.326a6 6 0 0 0 8.788-.326"/></svg>
);

export default User4;
  