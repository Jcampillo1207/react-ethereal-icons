
import React from 'react';

/**
 * @component
 * @name ThumbsUp
 * @description Automatically generated SVG icon component for ThumbsUp.
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

interface ThumbsUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const ThumbsUp: React.FC<ThumbsUpProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 10.053H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2m0-12h2l3.5-7.5a1 1 0 0 1 1.601-.26l.884.884a3 3 0 0 1 .82 2.71L14 10.052h4.158a3 3 0 0 1 2.91 3.728l-1.121 4.485a5 5 0 0 1-4.85 3.787H6m0-12v12"/></svg>
);

export default ThumbsUp;
  