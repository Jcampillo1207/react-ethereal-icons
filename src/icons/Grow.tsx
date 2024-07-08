
import React from 'react';

/**
 * @component
 * @name Grow
 * @description Automatically generated SVG icon component for Grow.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface GrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Grow: React.FC<GrowProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#FF5151"} d="M3.75 9.8c0-.506.41-.917.917-.917h7.516c.507 0 .917.41.917.917v12.283c0 .507-.41.917-.917.917H4.667a.917.917 0 0 1-.917-.917z"/><path fill={color1 ? color1 : "#FF72CF"} d="M8.333 1.917c0-.507.41-.917.917-.917h7.517c.506 0 .916.41.916.917v20.166c0 .507-.41.917-.916.917H9.25a.917.917 0 0 1-.917-.917z" opacity=".5"/></svg>
);

export default Grow;
  