
import React from 'react';

/**
 * @component
 * @name Intello
 * @description Automatically generated SVG icon component for Intello.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface IntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Intello: React.FC<IntelloProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#fff"} d="M5.335 23h1.572c.603 0 1.13-.473 1.288-1.153L11.88 6.002C12.465 3.482 10.846 1 8.617 1H5.335C4.598 1 4 1.7 4 2.564v18.872c0 .863.598 1.563 1.335 1.563z"/><path fill={color1 ? color1 : "#4690FF"} d="M16 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg>
);

export default Intello;
  