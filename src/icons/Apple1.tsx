
import React from 'react';

/**
 * @component
 * @name Apple1
 * @description Automatically generated SVG icon component for Apple1.
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

interface Apple1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Apple1: React.FC<Apple1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><g clip-path="url(#a)"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 7S8 5 6 5s-4 2-4 5 2 12 5 12 2.5-1 5-1 2 1 5 1 5-9 5-12-2-5-4-5-6 2-6 2m0 0c.044-2.682-.17-3.975-2-5"/></g><defs><clipPath id="a"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default Apple1;
  