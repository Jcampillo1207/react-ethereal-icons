
import React from 'react';

/**
 * @component
 * @name FerrisWheel
 * @description Automatically generated SVG icon component for FerrisWheel.
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

interface FerrisWheelProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FerrisWheel: React.FC<FerrisWheelProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0-3 8m3-8 3 8M12 2v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M8 22h8m2-3.3a9 9 0 1 0-12 0"/></svg>
);

export default FerrisWheel;
  