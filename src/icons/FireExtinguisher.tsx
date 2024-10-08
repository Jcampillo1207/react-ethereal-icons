
import React from 'react';

/**
 * @component
 * @name FireExtinguisher
 * @description Automatically generated SVG icon component for FireExtinguisher.
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

interface FireExtinguisherProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FireExtinguisher: React.FC<FireExtinguisherProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M15 6.5V3m0 0a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m4 0h3m-7 0v3.5M11 3a6 6 0 0 0-6 6v11m4-2h8M5 13h4m8-3a4 4 0 1 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z"/></svg>
);

export default FireExtinguisher;
  