
import React from 'react';

/**
 * @component
 * @name ThumbsDown
 * @description Automatically generated SVG icon component for ThumbsDown.
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

interface ThumbsDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const ThumbsDown: React.FC<ThumbsDownProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 14H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2m0 12h2l3.5 7.5a1 1 0 0 0 1.601.26l.884-.884a3 3 0 0 0 .82-2.71L14 14h4.158a3 3 0 0 0 2.91-3.728l-1.121-4.485A5 5 0 0 0 15.097 2H6m0 12V2"/></svg>
);

export default ThumbsDown;
  