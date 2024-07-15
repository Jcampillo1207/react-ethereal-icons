
import React from 'react';

/**
 * @component
 * @name Airplane1
 * @description Automatically generated SVG icon component for Airplane1.
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

interface Airplane1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Airplane1: React.FC<Airplane1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M22 5.86V5a2 2 0 0 0-2-2h-.86a4 4 0 0 0-3.328 1.781L15 6 7.608 4.357a3 3 0 0 0-2.772.807L4 6l7 5-3 3-3-1-2 2 5 2 2 5 2-2-1-3 3-3 5 7 .835-.835a3 3 0 0 0 .808-2.773L19 10l1.219-.813A4 4 0 0 0 22 5.86"/></svg>
);

export default Airplane1;
  