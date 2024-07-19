
import React from 'react';

/**
 * @component
 * @name HomeX
 * @description Automatically generated SVG icon component for HomeX.
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

interface HomeXProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const HomeX: React.FC<HomeXProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m20.75 9 .334.267a2 2 0 0 1 .723 1.89L20.28 20.33A2 2 0 0 1 18.306 22H5.694a2 2 0 0 1-1.973-1.671l-1.528-9.171a2 2 0 0 1 .723-1.891l7.911-6.329a1.88 1.88 0 0 1 2.346 0m2.413 1.648L17 6m0 0 1.414 1.414M17 6l1.414-1.414M17 6l-1.414 1.414"/></svg>
);

export default HomeX;
  