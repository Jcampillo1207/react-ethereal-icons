
import React from 'react';

/**
 * @component
 * @name Car
 * @description Automatically generated SVG icon component for Car.
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

interface CarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Car: React.FC<CarProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9 16s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2m4 0h6M5 16H4a2 2 0 0 1-2-2v-3.528a2 2 0 0 1 .211-.894l1.236-2.472A2 2 0 0 1 5.237 6h6.935a2 2 0 0 1 1.414.586l2.08 2.08a2 2 0 0 0 .782.483l4.185 1.395A2 2 0 0 1 22 12.441V14a2 2 0 0 1-2 2h-1m0 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2"/></svg>
);

export default Car;
  