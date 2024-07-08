
import React from 'react';

/**
 * @component
 * @name Eye4Closed
 * @description Automatically generated SVG icon component for Eye4Closed.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo - https://github.com/josecampillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Eye4ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye4Closed: React.FC<Eye4ClosedProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 7.5c7 0 10 6.75 10 6.75s-.357.803-1.111 1.854M2 8.625s1.146-1.718 3.673-3.031M22 8.625s-1.043-1.564-3.333-2.848m-3.334-1.282c-.99-.23-2.1-.37-3.333-.37-.791 0-1.532.058-2.222.16M3.11 3l2.562 2.594m5.359 5.426a3.37 3.37 0 0 0-2.365 3.23c0 1.864 1.492 3.375 3.333 3.375 1.504 0 2.776-1.009 3.19-2.395m-4.158-4.21 4.159 4.21m-4.16-4.21L8.256 8.209m6.935 7.021 3.353 3.395M20.889 21l-2.346-2.375M5.673 5.594l2.582 2.615m10.288 10.416C16.959 19.92 14.799 21 12 21c-7 0-10-6.75-10-6.75s1.915-4.309 6.255-6.041"/></svg>
);

export default Eye4Closed;
  