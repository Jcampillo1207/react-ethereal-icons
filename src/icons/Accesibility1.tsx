
import React from 'react';

/**
 * @component
 * @name Accesibility1
 * @description Componente de ícono SVG generado automáticamente para Accesibility1.
 * @preview https://your-preview-url.com/accesibility1
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface Accesibility1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility1: React.FC<Accesibility1Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14.584 18A5 5 0 1 1 8 11.416M19 21v-6h-7v-3.5M12 8v3.5m0 0h4M13 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
);

export default Accesibility1;
  