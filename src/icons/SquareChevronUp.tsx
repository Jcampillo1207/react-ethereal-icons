
import React from 'react';

/**
 * @component
 * @name SquareChevronUp
 * @description Automatically generated SVG icon component for SquareChevronUp.
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

interface SquareChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const SquareChevronUp: React.FC<SquareChevronUpProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m16 13-4-4-4 4m11.778 9H4.222A2.22 2.22 0 0 1 2 19.778V4.222C2 2.995 2.995 2 4.222 2h15.556C21.005 2 22 2.995 22 4.222v15.556A2.22 2.22 0 0 1 19.778 22"/></svg>
);

export default SquareChevronUp;
  