
import React from 'react';

/**
 * @component
 * @name DiamondDot
 * @description Automatically generated SVG icon component for DiamondDot.
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

interface DiamondDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const DiamondDot: React.FC<DiamondDotProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><g clip-path="url(#a)"><rect strokeWidth={strokeWidth}   x="3" y="3" stroke={color ? color : "currentColor"} stroke- opacity=".5" rx="2"/><rect strokeWidth={strokeWidth}   x="2" y="2" stroke={color ? color : "currentColor"} stroke- opacity=".5" rx="10"/><rect strokeWidth={strokeWidth}   x="7" y="7" stroke={color ? color : "currentColor"} stroke- opacity=".5" rx="5"/><rect strokeWidth={strokeWidth}   x="2" y="4" stroke={color ? color : "currentColor"} stroke- opacity=".5" rx="2"/><rect strokeWidth={strokeWidth}   x="4" y="22" stroke={color ? color : "currentColor"} stroke- opacity=".5" rx="2" transform="rotate(-90 4 22)"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke- d="M24 0 0 24M0 0l24 24" opacity=".5"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 12 12 2l10 10-10 10z"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></g><defs><clipPath id="a"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default DiamondDot;
  