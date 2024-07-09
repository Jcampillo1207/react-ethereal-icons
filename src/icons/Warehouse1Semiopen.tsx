
import React from 'react';

/**
 * @component
 * @name Warehouse1Semiopen
 * @description Automatically generated SVG icon component for Warehouse1Semiopen.
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

interface Warehouse1SemiopenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Warehouse1Semiopen: React.FC<Warehouse1SemiopenProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 16.5V21h-4v-4.5m4 0h-4m4 0h4m-8 0H6M11 7h2m-7 9.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.132a2 2 0 0 1 .971-1.715L12 2l9.029 5.417A2 2 0 0 1 22 9.132V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.5m-12 0V11h12v5.5"/></svg>
);

export default Warehouse1Semiopen;
  