
import React from 'react';

/**
 * @component
 * @name Airplane2
 * @description Automatically generated SVG icon component for Airplane2.
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

interface Airplane2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Airplane2: React.FC<Airplane2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m13.978 3.24-.711-.713a1.787 1.787 0 0 0-2.534 0l-.71.713a3.6 3.6 0 0 0-.98 3.248l.29 1.46-6.089 3.888A2.7 2.7 0 0 0 2 14.112v1.196l8-1.338v2.676l-2.667 2.677V22L12 19.992 16.667 22v-2.677L14 16.646V13.97l8 1.338v-1.196a2.7 2.7 0 0 0-1.244-2.276l-6.09-3.889.291-1.459a3.6 3.6 0 0 0-.98-3.248"/></svg>
);

export default Airplane2;
  