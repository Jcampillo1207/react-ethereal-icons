
import React from 'react';

/**
 * @component
 * @name Hand
 * @description Automatically generated SVG icon component for Hand.
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

interface HandProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Hand: React.FC<HandProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 5.5V4s0-2-2-2-2 2-2 2v1.5m4 0V9m0-3.5s0-2 2-2 2 2 2 2v2m0 0V11m0-3.5s0-2 2-2 2 2 2 2v5.894A8.605 8.605 0 0 1 13.394 22h-.639a11 11 0 0 1-8.013-3.464L2.63 16.29s-1.416-1.346 0-2.692 2.832 0 2.832 0l.539.513M10 5.5V11m0-5.5s0-2-2-2-2 2-2 2v8.61m0 0 1.23 1.17"/></svg>
);

export default Hand;
  