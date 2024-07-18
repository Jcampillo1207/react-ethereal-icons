
import React from 'react';

/**
 * @component
 * @name Caravan3
 * @description Automatically generated SVG icon component for Caravan3.
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

interface Caravan3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Caravan3: React.FC<Caravan3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18 18h4v-2m-4 2h-2m2 0V8v0a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2v0m8 0s0-2 2-2 2 2 2 2m-4 0s0 2 2 2 2-2 2-2m-4 0H8m4 0v-8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8m-4 0s0-2 2-2 2 2 2 2m-4 0s0 2 2 2 2-2 2-2"/></svg>
);

export default Caravan3;
  