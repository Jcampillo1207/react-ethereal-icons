
import React from 'react';

/**
 * @component
 * @name Contrast3
 * @description Automatically generated SVG icon component for Contrast3.
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

interface Contrast3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Contrast3: React.FC<Contrast3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M19.071 4.929A9.97 9.97 0 0 0 11.998 2v20a9.97 9.97 0 0 0 7.073-2.929 9.998 9.998 0 0 0 0-14.142M4.929 19.071c-3.905-3.905-3.905-10.237 0-14.142a9.96 9.96 0 0 1 3.738-2.36v18.862a10 10 0 0 1-3.738-2.36"/></svg>
);

export default Contrast3;
  