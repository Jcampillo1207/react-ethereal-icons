
import React from 'react';

/**
 * @component
 * @name Warehouse2
 * @description Automatically generated SVG icon component for Warehouse2.
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

interface Warehouse2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Warehouse2: React.FC<Warehouse2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 22H4a2 2 0 0 1-2-2V9.132a2 2 0 0 1 .971-1.715L12 2l9.029 5.417A2 2 0 0 1 22 9.132V20a2 2 0 0 1-2 2h-2M6 22h12M6 22v-4m12 4v-4M6 14v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 14h12M6 14v4m12-4v4M6 18h12"/></svg>
);

export default Warehouse2;
  