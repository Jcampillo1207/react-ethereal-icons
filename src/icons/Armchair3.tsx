
import React from 'react';

/**
 * @component
 * @name Armchair3
 * @description Automatically generated SVG icon component for Armchair3.
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

interface Armchair3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Armchair3: React.FC<Armchair3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M5 19a2 2 0 0 1-2-2v-5a2 2 0 0 1 4 0m-2 7h14M5 19v2m14-2a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0m2 7v2m-2-9v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V12m10 0V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v7"/></svg>
);

export default Armchair3;
  