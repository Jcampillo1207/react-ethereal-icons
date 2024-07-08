
import React from 'react';

/**
 * @component
 * @name Badge3Euro
 * @description Automatically generated SVG icon component for Badge3Euro.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Badge3EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Euro: React.FC<Badge3EuroProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M16 14.828c-1.601 1.563-4.198 1.563-5.799 0A3.94 3.94 0 0 1 9 12m0 0c0-1.024.4-2.047 1.201-2.828 1.601-1.563 4.198-1.563 5.799 0M9 12H7m2 0h4m8 0-2.5-6.5L12 3 5.5 5.5 3 12l2.5 6.5L12 21l6.5-2.5z"/></svg>
);

export default Badge3Euro;
  