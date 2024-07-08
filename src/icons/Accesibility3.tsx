
import React from 'react';

/**
 * @component
 * @name Accesibility3
 * @description Automatically generated SVG icon component for Accesibility3.
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

interface Accesibility3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility3: React.FC<Accesibility3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M13.758 18.667a5.5 5.5 0 0 1-1.177 1.706 5.653 5.653 0 0 1-7.937 0 5.516 5.516 0 0 1 0-7.857 5.6 5.6 0 0 1 1.724-1.165M21 22v-6.667h-7.857V7.556l-3.368 1.11v6.667m4.49-12.222c0 .614-.503 1.111-1.123 1.111s-1.122-.497-1.122-1.11c0-.615.503-1.112 1.123-1.112s1.122.497 1.122 1.111"/></svg>
);

export default Accesibility3;
  