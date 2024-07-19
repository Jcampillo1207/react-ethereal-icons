
import React from 'react';

/**
 * @component
 * @name Grab
 * @description Automatically generated SVG icon component for Grab.
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

interface GrabProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Grab: React.FC<GrabProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 7.5V6s0-2-2-2-2 2-2 2v1.5m4 0s0-2 2-2 2 2 2 2v2s0-2 2-2 2 2 2 2v2.394a8.605 8.605 0 0 1-8.606 8.606h-.639a11 11 0 0 1-8.013-3.464L2.63 14.79s-1.416-1.346 0-2.692 2.832 0 2.832 0l.539.513M14 7.5v1m-4-1v2m0-2s0-2-2-2-2 2-2 2v5.11m0 0 1.23 1.17"/></svg>
);

export default Grab;
  