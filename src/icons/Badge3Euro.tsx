
import React from 'react';

/**
 * @component
 * @name Badge3Euro
 * @description Automatically generated SVG icon component for Badge3Euro.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Badge3EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Euro: React.FC<Badge3EuroProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M16.444 15.143c-1.779 1.735-4.664 1.735-6.443 0A4.38 4.38 0 0 1 8.667 12m0 0c0-1.137.444-2.275 1.334-3.143 1.78-1.735 4.664-1.735 6.443 0M8.667 12H6.444m2.223 0h4.444M22 12l-2.778-7.222L12 2 4.778 4.778 2 12l2.778 7.222L12 22l7.222-2.778z"/></svg>
);

export default Badge3Euro;
  