
import React from 'react';

/**
 * @component
 * @name HalfMoonStars
 * @description Automatically generated SVG icon component for HalfMoonStars.
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

interface HalfMoonStarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const HalfMoonStars: React.FC<HalfMoonStarsProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18 4h2m0 0h2m-2 0V2m0 2v2m-6 4h2m0 0h2m-2 0V8m0 2v2m3.071 7.071c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142c1.18-1.18 3.082-2.504 4.571-2.97-1.648 1.647-2.958 4.497-2.958 6.828a8.787 8.787 0 0 0 8.786 8.787c2.33 0 5.066-1.426 6.714-3.074-.467 1.49-1.79 3.391-2.97 4.571"/></svg>
);

export default HalfMoonStars;
  