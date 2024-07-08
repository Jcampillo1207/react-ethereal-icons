
import React from 'react';

/**
 * @component
 * @name Accesibility1
 * @description Automatically generated SVG icon component for Accesibility1.
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

interface Accesibility1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility1: React.FC<Accesibility1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14.953 18.667c-.277.619-.677 1.2-1.198 1.706-2.232 2.17-5.85 2.17-8.081 0a5.447 5.447 0 0 1 0-7.857 5.7 5.7 0 0 1 1.755-1.165M20 22v-6.667h-8v-3.889m0-3.888v3.888m0 0h4.571m-3.428-8.333c0 .614-.512 1.111-1.143 1.111s-1.143-.497-1.143-1.11C10.857 2.496 11.37 2 12 2s1.143.497 1.143 1.111"/></svg>
);

export default Accesibility1;
  