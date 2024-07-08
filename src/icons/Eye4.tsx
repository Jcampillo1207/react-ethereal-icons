
import React from 'react';

/**
 * @component
 * @name Eye4
 * @description Automatically generated SVG icon component for Eye4.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Eye4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye4: React.FC<Eye4Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M3 9s2.7-4 9-4c1.11 0 2.108.124 3 .329M21 9s-.939-1.39-3-2.532M3 14s2.7-6 9-6 9 6 9 6-2.7 6-9 6-9-6-9-6m11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>
);

export default Eye4;
  