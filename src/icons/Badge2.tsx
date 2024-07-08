
import React from 'react';

/**
 * @component
 * @name Badge2
 * @description Automatically generated SVG icon component for Badge2.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Badge2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2: React.FC<Badge2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M16.05 4.45 12 3 7.95 4.45 3.9 3.9l.55 4.05L3 12l1.45 4.05-.55 4.05 4.05-.55L12 21l4.05-1.45 4.05.55-.55-4.05L21 12l-1.45-4.05.55-4.05z"/></svg>
);

export default Badge2;
  