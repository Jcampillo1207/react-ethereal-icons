
import React from 'react';

/**
 * @component
 * @name Scooter
 * @description Automatically generated SVG icon component for Scooter.
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

interface ScooterProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Scooter: React.FC<ScooterProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 16s0-5-5-5-5 5-5 5h2m8 0h-2m2 0h6.199M12 16c2 0 4-3 4-6M5 8h4m-5 8s0 3 3 3 3-3 3-3m-6 0h6m8.199 0c.374-.6 1.041-1 1.801-1m-1.801 1A2.121 2.121 0 1 0 20 15m-4-5V7a2 2 0 0 0-2-2h-1m3 5c2 0 4 3 4 5"/></svg>
);

export default Scooter;
  