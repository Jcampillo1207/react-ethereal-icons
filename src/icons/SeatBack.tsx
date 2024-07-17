
import React from 'react';

/**
 * @component
 * @name SeatBack
 * @description Automatically generated SVG icon component for SeatBack.
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

interface SeatBackProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const SeatBack: React.FC<SeatBackProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 10V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5M6 10c-3 0-3 2-3 2v4s0 2 3 2m0-8v8m12-8c3 0 3 2 3 2v4s0 2-3 2m0-8v8M6 18h4m8 0h-4m-4 0v4m0-4h4m-4 4h4m-4 0H7m7-4v4m0 0h3"/></svg>
);

export default SeatBack;
  