
import React from 'react';

/**
 * @component
 * @name House4
 * @description Automatically generated SVG icon component for House4.
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

interface House4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const House4: React.FC<House4Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 21h2m0 0v-8m0 8h5.108M4 13h16M4 13s-2 0-2-2c0-.574.825-1.478 2-2.475M20 13v8m0-8s2 0 2-2-10-8-10-8-2.5 1.5-5 3.25M20 21h2m-2 0h-5m-5.892 0v-4H15v4m-5.892 0H15M4 8.525V4h3v2.25M4 8.525c.871-.74 1.936-1.53 3-2.275M12.009 9H12"/></svg>
);

export default House4;
  