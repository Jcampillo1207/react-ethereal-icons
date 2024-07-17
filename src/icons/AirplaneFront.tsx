
import React from 'react';

/**
 * @component
 * @name AirplaneFront
 * @description Automatically generated SVG icon component for AirplaneFront.
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

interface AirplaneFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AirplaneFront: React.FC<AirplaneFrontProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 15h.009M12 10.429c-2.481 0-3.38 2.23-3.889 4.489M12 10.428c2.481 0 3.38 2.232 3.889 4.49M12 10.428V5m-3.889 9.918c-.645 2.864 1.63 4.163 3.889 4.078 2.259.085 4.535-1.214 3.889-4.078m-7.778 0L4 15.646m11.889-.728 4.111.728M2 16l2-.354m0 0V18m18-2-2-.354m0 0V18"/></svg>
);

export default AirplaneFront;
  