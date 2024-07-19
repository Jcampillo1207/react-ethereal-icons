
import React from 'react';

/**
 * @component
 * @name User4
 * @description Automatically generated SVG icon component for User4.
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

interface User4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User4: React.FC<User4Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M2.005 22s-.357-6.435 4.947-8.98M21.995 22s.357-6.435-4.947-8.98m-10.096 0a6.67 6.67 0 0 1 .336-9.067 6.66 6.66 0 0 1 9.424 0 6.67 6.67 0 0 1 .336 9.066m-10.096 0q.161.186.336.362a6.66 6.66 0 0 0 9.76-.362"/></svg>
);

export default User4;
  