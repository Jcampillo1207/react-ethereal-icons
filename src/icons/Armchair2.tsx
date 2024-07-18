
import React from 'react';

/**
 * @component
 * @name Armchair2
 * @description Automatically generated SVG icon component for Armchair2.
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

interface Armchair2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Armchair2: React.FC<Armchair2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M19 10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5m14 0a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2m0-9a2 2 0 0 0-2 2v3M5 10a2 2 0 0 1 2 2v3m-2-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2m0 0v2m0-2h2m12 0v2m0-2h-2M7 19h10M7 19v-4m10 4v-4m0 0H7"/></svg>
);

export default Armchair2;
  