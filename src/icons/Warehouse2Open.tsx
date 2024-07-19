
import React from 'react';

/**
 * @component
 * @name Warehouse2Open
 * @description Automatically generated SVG icon component for Warehouse2Open.
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

interface Warehouse2OpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Warehouse2Open: React.FC<Warehouse2OpenProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M22 9.132V21a1 1 0 0 1-1 1h-3V12a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10H3a1 1 0 0 1-1-1V9.132a2 2 0 0 1 .971-1.715L12 2l9.029 5.417A2 2 0 0 1 22 9.132"/></svg>
);

export default Warehouse2Open;
  