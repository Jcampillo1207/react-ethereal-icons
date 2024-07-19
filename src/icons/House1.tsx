
import React from 'react';

/**
 * @component
 * @name House1
 * @description Automatically generated SVG icon component for House1.
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

interface House1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const House1: React.FC<House1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 10h6.13a.94.94 0 0 0 .65-.27l2.57-2.46a.92.92 0 0 1 1.3 0l2.57 2.46a.94.94 0 0 0 .65.27H22M3 21V10l1.961-4.576C5.823 3.414 6.451 3 8.638 3h6.724c2.188 0 2.815.414 3.677 2.424L21 10v11M2 21h20m-9.992-9h-.009M9.5 21v-4.5A1.5 1.5 0 0 1 11 15h2a1.5 1.5 0 0 1 1.5 1.5V21"/></svg>
);

export default House1;
  