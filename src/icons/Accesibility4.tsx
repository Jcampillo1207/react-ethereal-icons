
import React from 'react';

/**
 * @component
 * @name Accesibility4
 * @description Automatically generated SVG icon component for Accesibility4.
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

interface Accesibility4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility4: React.FC<Accesibility4Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M20.889 22v-6.706H9.778l7.778-7.823-4.445-3.353L8.667 7.47m2.817 12.892a5.53 5.53 0 0 1-7.857 0 5.61 5.61 0 0 1 0-7.903 5.52 5.52 0 0 1 3.929-1.637M22 4.118c0 .617-.497 1.117-1.111 1.117s-1.111-.5-1.111-1.117c0-.618.497-1.118 1.11-1.118S22 3.5 22 4.118"/></svg>
);

export default Accesibility4;
  