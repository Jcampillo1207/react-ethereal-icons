
import React from 'react';

/**
 * @component
 * @name Badge4Dollarsign
 * @description Componente de ícono SVG generado automáticamente para Badge4Dollarsign.
 * @preview https://your-preview-url.com/badge4dollarsign
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface Badge4DollarsignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge4Dollarsign: React.FC<Badge4DollarsignProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M15 8.667h-4.5c-.398 0-.78.175-1.06.488-.282.312-.44.736-.44 1.178s.158.866.44 1.179c.28.312.662.488 1.06.488h3c.398 0 .78.176 1.06.488.282.313.44.737.44 1.179s-.158.866-.44 1.178a1.43 1.43 0 0 1-1.06.488H9M12 17V7M3 8v8l3.5 3.5L12 21l5.5-1.5L21 16V8l-3.5-3.5L12 3 6.5 4.5z"/></svg>
);

export default Badge4Dollarsign;
  