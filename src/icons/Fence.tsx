
import React from 'react';

/**
 * @component
 * @name Fence
 * @description Automatically generated SVG icon component for Fence.
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

interface FenceProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Fence: React.FC<FenceProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 8h4M6 18h4m4-10h4m-4 10h4M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5zm8 0-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5zm8 0-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5z"/></svg>
);

export default Fence;
  