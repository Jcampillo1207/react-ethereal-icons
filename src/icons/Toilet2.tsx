
import React from 'react';

/**
 * @component
 * @name Toilet2
 * @description Automatically generated SVG icon component for Toilet2.
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

interface Toilet2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Toilet2: React.FC<Toilet2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M8 11h9.135c1.465 0 2.198 0 2.64.735.442.736.182 1.204-.34 2.142A6.1 6.1 0 0 1 14.09 17a6.12 6.12 0 0 1-4.028-1.5M8 11V4c0-.943 0-1.414-.293-1.707S6.943 2 6 2s-1.414 0-1.707.293S4 3.057 4 4v7c0 .943 0 1.414.293 1.707S5.057 13 6 13s1.414 0 1.707-.293S8 11.943 8 11M7 7h3m6 10c-1 1 0 4 2 5H4c1-1 2.7-4.2 1.5-9"/></svg>
);

export default Toilet2;
  