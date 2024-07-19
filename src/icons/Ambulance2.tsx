
import React from 'react';

/**
 * @component
 * @name Ambulance2
 * @description Automatically generated SVG icon component for Ambulance2.
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

interface Ambulance2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Ambulance2: React.FC<Ambulance2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 18.5H9m5 0v-9m0 9h1m-6 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2m0 0H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5m0 0h4a4 4 0 0 1 4 4v3a2 2 0 0 1-2 2h-1m0 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2M8 8v2m0 0v2m0-2H6m2 0h2"/></svg>
);

export default Ambulance2;
  