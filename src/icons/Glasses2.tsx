
import React from 'react';

/**
 * @component
 * @name Glasses2
 * @description Automatically generated SVG icon component for Glasses2.
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

interface Glasses2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Glasses2: React.FC<Glasses2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M10 15a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0h4m0 0a4 4 0 0 1 8 0m-8 0a4 4 0 0 0 8 0M2 15l1.874-8.431a2 2 0 0 1 .538-.98L6 4m16 11-1.874-8.431a2 2 0 0 0-.538-.98L18 4"/></svg>
);

export default Glasses2;
  