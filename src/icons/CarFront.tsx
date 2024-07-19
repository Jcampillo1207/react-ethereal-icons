
import React from 'react';

/**
 * @component
 * @name CarFront
 * @description Automatically generated SVG icon component for CarFront.
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

interface CarFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CarFront: React.FC<CarFrontProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m19 10-1.497-3.743A2 2 0 0 0 15.646 5H8.354a2 2 0 0 0-1.857 1.257L5 10m14 0 2-2m-2 2H5m14 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 10 3 8m2 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2m0 0v1a1 1 0 1 0 2 0v-1m-2 0h2m0 0h10m2 0v1a1 1 0 1 1-2 0v-1m2 0h-2m0-4h.01M7 14h.01"/></svg>
);

export default CarFront;
  