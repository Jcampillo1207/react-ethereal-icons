
import React from 'react';

/**
 * @component
 * @name Warehouse2Semiopen
 * @description Automatically generated SVG icon component for Warehouse2Semiopen.
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

interface Warehouse2SemiopenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Warehouse2Semiopen: React.FC<Warehouse2SemiopenProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 14v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 14h12M6 14v4m12-4v4M6 18v4H3a1 1 0 0 1-1-1V9.132a2 2 0 0 1 .971-1.715L12 2l9.029 5.417A2 2 0 0 1 22 9.132V21a1 1 0 0 1-1 1h-3v-4M6 18h12"/></svg>
);

export default Warehouse2Semiopen;
  