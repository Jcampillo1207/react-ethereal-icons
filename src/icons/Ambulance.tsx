
import React from 'react';

/**
 * @component
 * @name Ambulance
 * @description Automatically generated SVG icon component for Ambulance.
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

interface AmbulanceProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Ambulance: React.FC<AmbulanceProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 18H9m5 0V8m0 10h1m-6 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2m0 0H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M8 8v2m0 2v-2m0 0H6m2 0h2m4-2h1.764a2 2 0 0 1 1.789 1.106l1.076 2.153a2 2 0 0 0 1.157 1.003l.846.282A2 2 0 0 1 22 14.441V16a2 2 0 0 1-2 2h-1m0 0s0-2-2-2-2 2-2 2m4 0s0 2-2 2-2-2-2-2"/></svg>
);

export default Ambulance;
  