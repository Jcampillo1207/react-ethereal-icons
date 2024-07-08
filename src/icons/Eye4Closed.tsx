
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
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 8c6.3 0 9 6 9 6s-.321.713-1 1.648M3 9s1.031-1.527 3.305-2.695M21 9s-.939-1.39-3-2.532m-3-1.14A13.4 13.4 0 0 0 12 5c-.712 0-1.379.051-2 .142M4 4l2.305 2.305m4.824 4.824a3.001 3.001 0 1 0 3.742 3.742M11.13 11.13l3.742 3.742M11.13 11.13l-2.5-2.5m6.243 6.243 3.017 3.017M20 20l-2.111-2.111M6.305 6.305 8.63 8.63m9.259 9.259C16.463 19.04 14.519 20 12 20c-6.3 0-9-6-9-6s1.724-3.83 5.63-5.37"/></svg>
);

export default Eye4Closed;
  