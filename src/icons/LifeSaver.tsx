
import React from 'react';

/**
 * @component
 * @name LifeSaver
 * @description Automatically generated SVG icon component for LifeSaver.
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

interface LifeSaverProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const LifeSaver: React.FC<LifeSaverProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M19.071 19.071c3.905-3.905 3.905-10.237 0-14.142m0 14.142c-3.905 3.905-10.237 3.905-14.142 0m14.142 0L15 15m4.071-10.071c-3.905-3.905-10.237-3.905-14.142 0m14.142 0L15 9M4.929 19.071c-3.905-3.905-3.905-10.237 0-14.142m0 14.142L9 15M4.929 4.929 9 9m6 6a4.243 4.243 0 0 0 0-6m0 6a4.243 4.243 0 0 1-6 0m6-6a4.243 4.243 0 0 0-6 0m0 6a4.243 4.243 0 0 1 0-6"/></svg>
);

export default LifeSaver;
  