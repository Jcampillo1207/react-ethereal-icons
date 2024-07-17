
import React from 'react';

/**
 * @component
 * @name AlarmClockOff
 * @description Automatically generated SVG icon component for AlarmClockOff.
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

interface AlarmClockOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AlarmClockOff: React.FC<AlarmClockOffProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m2 5 1.5-1.5 2.843 2.843M22 5l-3-3M8.045 18.955A8 8 0 0 1 4 12c0-2.21.895-4.21 2.343-5.657m1.702 12.612A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 5.657-2.343m-9.612 1.298L5 22M6.343 6.343l11.314 11.314m0 0L22 22m-2.581-7c.375-.926.581-1.94.581-3A8 8 0 0 0 9 4.582"/></svg>
);

export default AlarmClockOff;
  