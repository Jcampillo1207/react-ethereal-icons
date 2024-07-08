
import React from 'react';

/**
 * @component
 * @name Eye4
 * @description Automatically generated SVG icon component for Eye4.
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

interface Eye4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye4: React.FC<Eye4Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 8.533S5 4 12 4c1.233 0 2.343.14 3.333.373M22 8.533s-1.043-1.575-3.333-2.869M2 14.2s3-6.8 10-6.8 10 6.8 10 6.8S19 21 12 21 2 14.2 2 14.2m12.222 0c0 1.252-.995 2.267-2.222 2.267S9.778 15.452 9.778 14.2s.995-2.267 2.222-2.267 2.222 1.015 2.222 2.267"/></svg>
);

export default Eye4;
  