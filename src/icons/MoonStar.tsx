
import React from 'react';

/**
 * @component
 * @name MoonStar
 * @description Automatically generated SVG icon component for MoonStar.
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

interface MoonStarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MoonStar: React.FC<MoonStarProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18 4h2m0 0h2m-2 0V2m0 2v2m-.929 13.071c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142A9.97 9.97 0 0 1 12 2a7.071 7.071 0 1 0 10 10c0 2.56-.976 5.118-2.929 7.071"/></svg>
);

export default MoonStar;
  