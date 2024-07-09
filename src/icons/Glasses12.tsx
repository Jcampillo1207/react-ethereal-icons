
import React from 'react';

/**
 * @component
 * @name Glasses12
 * @description Automatically generated SVG icon component for Glasses12.
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

interface Glasses12Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Glasses12: React.FC<Glasses12Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 14h6.5a1.5 1.5 0 0 1 1.5 1.5M2 14v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.5M2 14V8.828a2 2 0 0 1 .586-1.414L4 6m18 8h-6.5a1.5 1.5 0 0 0-1.5 1.5m8-1.5v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.5m8-1.5V8.828a2 2 0 0 0-.586-1.414L20 6m-10 9.5s0-2 2-2 2 2 2 2"/></svg>
);

export default Glasses12;
  