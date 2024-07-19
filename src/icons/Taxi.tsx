
import React from 'react';

/**
 * @component
 * @name Taxi
 * @description Automatically generated SVG icon component for Taxi.
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

interface TaxiProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Taxi: React.FC<TaxiProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9 18s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2m4 0h6M5 18H4a2 2 0 0 1-2-2v-2.528a2 2 0 0 1 .211-.894l1.236-2.472A2 2 0 0 1 5.237 9h6.935a2 2 0 0 1 1.414.586l1.96 1.96a2 2 0 0 0 1.086.56l3.697.616A2 2 0 0 1 22 14.694V16a2 2 0 0 1-2 2h-1m0 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2M6 5h5"/></svg>
);

export default Taxi;
  