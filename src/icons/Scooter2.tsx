
import React from 'react';

/**
 * @component
 * @name Scooter2
 * @description Automatically generated SVG icon component for Scooter2.
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

interface Scooter2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Scooter2: React.FC<Scooter2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 4h.7a2 2 0 0 1 1.828 1.188L20 13c-3 0-6 4-6 6H6.121m0 0a2.121 2.121 0 1 1-4.243 0 2.121 2.121 0 0 1 4.243 0M20 21.121a2.121 2.121 0 1 0 0-4.242 2.121 2.121 0 0 0 0 4.242"/></svg>
);

export default Scooter2;
  