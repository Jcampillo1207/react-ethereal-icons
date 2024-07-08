
import React from 'react';

/**
 * @component
 * @name Boost
 * @description Componente de ícono SVG generado automáticamente para Boost.
 * @preview https://your-preview-url.com/boost
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface BoostProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Boost: React.FC<BoostProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#FF51D9"} d="M14.646 10.251c1.35.78 1.35 2.728 0 3.508L4.057 19.872c-1.35.78-3.037-.195-3.037-1.754V5.892c0-1.56 1.687-2.533 3.037-1.754z"/><path fill={color1 ? color1 : "#CA35FF"} d="M17.952 10.244c1.35.78 1.35 2.728 0 3.507L7.364 19.865c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z" opacity=".5"/><path fill={color2 ? color2 : "#A635FF"} d="M21.959 10.244c1.35.78 1.35 2.728 0 3.507l-10.588 6.114c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z" opacity=".5"/></svg>
);

export default Boost;
  