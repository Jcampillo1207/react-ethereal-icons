
import React from 'react';

/**
 * @component
 * @name DoorOpen
 * @description Automatically generated SVG icon component for DoorOpen.
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

interface DoorOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const DoorOpen: React.FC<DoorOpenProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M13 4h3a2 2 0 0 1 2 2v14M2 20h3m0 0 6.758 1.689a1 1 0 0 0 1.242-.97V4.562a2.004 2.004 0 0 0-1.585-1.956 2 2 0 0 0-.9.016l-4 1A2 2 0 0 0 5 5.562zm8 0h9m-12-8v.01"/></svg>
);

export default DoorOpen;
  