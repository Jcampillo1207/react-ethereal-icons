
import React from 'react';

/**
 * @component
 * @name PistonCup
 * @description Automatically generated SVG icon component for PistonCup.
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

interface PistonCupProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const PistonCup: React.FC<PistonCupProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M7 5V2h10v3M7 5H2c0 1 2 4 5 4m0-4v4m0 0v1a2 2 0 0 0 2 2h1m4 0h1a2 2 0 0 0 2-2V9m-3 3v5m0-5h-4m4 5h-4m4 0h2c3 0 3 3 3 5H5c0-1 0-5 3-5h2m0-5v5m7-12h5c0 2-2 4-5 4m0-4v4"/></svg>
);

export default PistonCup;
  