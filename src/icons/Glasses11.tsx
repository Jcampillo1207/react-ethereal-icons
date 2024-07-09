
import React from 'react';

/**
 * @component
 * @name Glasses11
 * @description Automatically generated SVG icon component for Glasses11.
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

interface Glasses11Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Glasses11: React.FC<Glasses11Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 14.1C8.667 12 4.667 12 2 12m10 2.1S9.333 19 6 19c-4 0-4-7-4-7m10 2.1C15.333 12 19.333 12 22 12m-10 2.1s2.667 4.9 6 4.9c4 0 4-7 4-7M2 12V7.828a2 2 0 0 1 .586-1.414L4 5m18 7V7.828a2 2 0 0 0-.586-1.414L20 5"/></svg>
);

export default Glasses11;
  