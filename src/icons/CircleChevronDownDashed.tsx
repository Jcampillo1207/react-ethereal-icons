
import React from 'react';

/**
 * @component
 * @name CircleChevronDownDashed
 * @description Automatically generated SVG icon component for CircleChevronDownDashed.
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

interface CircleChevronDownDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CircleChevronDownDashed: React.FC<CircleChevronDownDashedProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-dasharray="4 4" stroke-linecap="round" stroke-linejoin="round" stroke- d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142 10.237-3.905 14.142 0"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m7.993 11.028 4.014 3.986L15.993 11"/></svg>
);

export default CircleChevronDownDashed;
  