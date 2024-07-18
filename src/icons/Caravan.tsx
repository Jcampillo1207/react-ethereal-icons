
import React from 'react';

/**
 * @component
 * @name Caravan
 * @description Automatically generated SVG icon component for Caravan.
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

interface CaravanProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Caravan: React.FC<CaravanProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 18H4a2 2 0 0 1-2-2v-4m4 6s0-2 2-2 2 2 2 2m-4 0s0 2 2 2 2-2 2-2m8 0V8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v0m16 10h-4m4 0h4v-2m-12 2v-8a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v8m-4 0h4M2 8h4v4H2m0-4v4"/></svg>
);

export default Caravan;
  