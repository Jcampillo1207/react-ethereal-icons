
import React from 'react';

/**
 * @component
 * @name Car2
 * @description Automatically generated SVG icon component for Car2.
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

interface Car2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Car2: React.FC<Car2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9 16s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2m4 0h6M5 16H4a2 2 0 0 1-2-2v-2.172a2 2 0 0 1 .586-1.414l.828-.828A2 2 0 0 1 4.828 9H8m11 7h1a2 2 0 0 0 2-2v-1.559a2 2 0 0 0-1.367-1.897L16.448 9.15a2 2 0 0 1-.782-.483L13 6m6 10s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2"/></svg>
);

export default Car2;
  