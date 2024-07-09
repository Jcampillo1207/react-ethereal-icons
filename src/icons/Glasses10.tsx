
import React from 'react';

/**
 * @component
 * @name Glasses10
 * @description Automatically generated SVG icon component for Glasses10.
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

interface Glasses10Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Glasses10: React.FC<Glasses10Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m12 13-1.804 3.608A4.326 4.326 0 0 1 2 14.675V12m10 1 1.804 3.608A4.326 4.326 0 0 0 22 14.675V12m-10 1 .187-.056A25.4 25.4 0 0 1 22 12v0m-10 1-.187-.056A25.4 25.4 0 0 0 2 12v0m0 0V7.828a2 2 0 0 1 .586-1.414L4 5m18 7V7.828a2 2 0 0 0-.586-1.414L20 5"/></svg>
);

export default Glasses10;
  