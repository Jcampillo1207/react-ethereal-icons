
import React from 'react';

/**
 * @component
 * @name Baby4
 * @description Automatically generated SVG icon component for Baby4.
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

interface Baby4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Baby4: React.FC<Baby4Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14.222 7.69a3.2 3.2 0 0 1-4.602 0 3.39 3.39 0 0 1 0-4.714A3.2 3.2 0 0 1 11.92 2M8.668 12h.01m6.656 0h.011m-5.566 3.333s0 2.223 2.222 2.223 2.222-2.223 2.222-2.223m4.85 3.738c3.904-3.905 3.904-10.237 0-14.142-3.906-3.905-10.238-3.905-14.143 0s-3.905 10.237 0 14.142 10.237 3.905 14.142 0"/></svg>
);

export default Baby4;
  