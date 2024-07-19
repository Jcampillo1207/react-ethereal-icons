
import React from 'react';

/**
 * @component
 * @name House3
 * @description Automatically generated SVG icon component for House3.
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

interface House3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const House3: React.FC<House3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 21h2m0 0v-5m0 5h5m-5-5c-2 0-2-2-2-2s0-2 2-2 2 2 2 2 0 2-2 2m17 5h1m-1 0V9m0 12h-4m4-12 1 1m-1-1-6-6-6 6m8 12v-5h-4v5m4 0h-4m0 0H9m0 0V9m0 0-1 1m6 2h2m-.991-4H15"/></svg>
);

export default House3;
  