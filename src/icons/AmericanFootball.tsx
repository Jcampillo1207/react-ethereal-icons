
import React from 'react';

/**
 * @component
 * @name AmericanFootball
 * @description Automatically generated SVG icon component for AmericanFootball.
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

interface AmericanFootballProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AmericanFootball: React.FC<AmericanFootballProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="m4.5 19.5 16-16m-11 8 3 3m0-6 3 3m6.3-5.948a4.215 4.215 0 0 0-3.365-3.365c-4.197-.699-8.607.574-11.636 3.599-3.03 3.024-4.309 7.43-3.615 11.626a4.22 4.22 0 0 0 3.366 3.365c4.171.797 8.65-.574 11.642-3.598 3.057-3.006 4.337-7.43 3.608-11.627Z"/></svg>
);

export default AmericanFootball;
  