
import React from 'react';

/**
 * @component
 * @name Contrast3
 * @description Automatically generated SVG icon component for Contrast3.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Contrast3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Contrast3: React.FC<Contrast3Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18.364 5.636A8.97 8.97 0 0 0 11.998 3v18a8.97 8.97 0 0 0 6.366-2.636 8.999 8.999 0 0 0 0-12.728M5.636 18.364A9 9 0 0 1 9 3.512v16.976a9 9 0 0 1-3.364-2.124"/></svg>
);

export default Contrast3;
  