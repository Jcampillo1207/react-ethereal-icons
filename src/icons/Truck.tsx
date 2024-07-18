
import React from 'react';

/**
 * @component
 * @name Truck
 * @description Automatically generated SVG icon component for Truck.
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

interface TruckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Truck: React.FC<TruckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 17H9m5 0V8m0 9h1m-6 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2m0 0H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1m0 0h1.93a2 2 0 0 1 1.664.89l1.025 1.539a2 2 0 0 0 1.032.788l.982.327A2 2 0 0 1 22 13.441V15a2 2 0 0 1-2 2h-1m0 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2"/></svg>
);

export default Truck;
  