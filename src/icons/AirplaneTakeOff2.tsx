
import React from 'react';

/**
 * @component
 * @name AirplaneTakeOff2
 * @description Automatically generated SVG icon component for AirplaneTakeOff2.
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

interface AirplaneTakeOff2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AirplaneTakeOff2: React.FC<AirplaneTakeOff2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M4.305 5.191 2 5.831l1.765 4.316c.349.854 1.299 1.32 2.214 1.088l5.905-1.503L11.667 13l1.883-.523c1.457-.552 2.051-1.01 2.483-2.238l.372-1.991 4.52-1.484c.977-.461 1.473-1.756.685-2.482-1.727-1.591-4.119-1.468-5.924-.876L7.114 7.161 6.44 6.03a1.896 1.896 0 0 0-2.135-.839M18 21H2"/></svg>
);

export default AirplaneTakeOff2;
  