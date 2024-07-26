
import React from 'react';

/**
 * @component
 * @name GolfCart
 * @description Automatically generated SVG icon component for GolfCart.
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

interface GolfCartProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const GolfCart: React.FC<GolfCartProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M3.998 18.982c-.925 0-1.998.236-1.998-.995V15.84c0-1.72 0-2.58.499-3.144.78-.88 2.289-.674 3.337-.674.809 0 1.805-.112 2.49.411.454.347.67.92 1.102 2.066.165.438.283 1.044.688 1.324.257.177.592.177 1.262.177h2.112c1.323 0 1.771-1.026 2.498-1.99h1.554c2.19 0 4.218 1.277 4.425 3.632.041.471.155 1.34-.54 1.34h-1.443m-3.997 0H8.495"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 12V3M19 14 16 3M2 3h16M16 14l-2-3m-1 1 2-2M6.5 12c0-2.03-.12-4-2.5-4"/></svg>
);

export default GolfCart;
  