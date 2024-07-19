
import React from 'react';

/**
 * @component
 * @name Glasses9
 * @description Automatically generated SVG icon component for Glasses9.
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

interface Glasses9Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Glasses9: React.FC<Glasses9Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 14v.735a4 4 0 1 0 8 0M2 14a2 2 0 0 1 2.248-1.984l4 .5A2 2 0 0 1 10 14.5v.235M2 14V7.828a2 2 0 0 1 .586-1.414L4 5m6 9.735s0-1 2-1 2 1 2 1M22 14v.735a4 4 0 1 1-8 0M22 14a2 2 0 0 0-2.248-1.984l-4 .5A2 2 0 0 0 14 14.5v.235M22 14V7.828a2 2 0 0 0-.586-1.414L20 5"/></svg>
);

export default Glasses9;
  