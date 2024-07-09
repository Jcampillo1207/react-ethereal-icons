
import React from 'react';

/**
 * @component
 * @name Glasses5
 * @description Automatically generated SVG icon component for Glasses5.
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

interface Glasses5Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Glasses5: React.FC<Glasses5Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 13h6a2 2 0 0 1 2 2v1m-8-3 .414.414A2 2 0 0 1 3 14.828V17a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1m-8-3V7.236a2 2 0 0 1 1.106-1.789L4 5m18 8h-6a2 2 0 0 0-2 2v1m8-3-.414.414A2 2 0 0 0 21 14.828V17a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-1m8-3V7.236a2 2 0 0 0-1.106-1.789L20 5M10 16h4"/></svg>
);

export default Glasses5;
  