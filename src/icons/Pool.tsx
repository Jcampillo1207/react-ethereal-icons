
import React from 'react';

/**
 * @component
 * @name Pool
 * @description Automatically generated SVG icon component for Pool.
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

interface PoolProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Pool: React.FC<PoolProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M22 22h-1c-1.451 0-2.722-.859-3-2-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2M19 2l-.265.088c-1.32.44-1.98.66-2.357 1.184S16 4.492 16 5.883V16M11 2l-.265.088c-1.32.44-1.98.66-2.357 1.184S8 4.492 8 5.883V16M8 6h8m-8 4h8m-8 4h8"/></svg>
);

export default Pool;
  