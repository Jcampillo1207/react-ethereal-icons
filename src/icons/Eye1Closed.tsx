
import React from 'react';

/**
 * @component
 * @name Eye1Closed
 * @description Automatically generated SVG icon component for Eye1Closed.
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

interface Eye1ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye1Closed: React.FC<Eye1ClosedProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m3.111 3 3.655 3.7m2.877 2.914A3.39 3.39 0 0 0 8.667 12c0 1.864 1.492 3.375 3.333 3.375.92 0 1.754-.378 2.357-.989M9.643 9.615l4.714 4.772M9.643 9.615 6.766 6.7m7.591 7.687 2.877 2.913M20.89 21l-3.655-3.7M6.766 6.7C3.474 8.684 2 12 2 12s3 6.75 10 6.75a10 10 0 0 0 5.234-1.45m3.254-2.914C21.518 13.087 22 12 22 12s-3-6.75-10-6.75q-.573 0-1.111.058"/></svg>
);

export default Eye1Closed;
  