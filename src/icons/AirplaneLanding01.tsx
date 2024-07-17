
import React from 'react';

/**
 * @component
 * @name AirplaneLanding01
 * @description Automatically generated SVG icon component for AirplaneLanding01.
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

interface AirplaneLanding01Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AirplaneLanding01: React.FC<AirplaneLanding01Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6.001 19.998h16"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M3.697 4.042c-.618.168-.69.876-.87 1.476-.15.564-.468 1.812-.685 2.665-.161.755-.183 1.055-.087 1.535.226.9 1.006 1.254 2.686 1.722.845.216 1.44.397 2.34.637.154.05.635.17 1.02.275.36.126.66.09.593.366-.047.11-.59.72-1.095 1.26-.338.42-.566.522-.566.84 0 0-.012.48.66.54.108.06 1.548.42 2.088.576.72.18 1.26-.036 1.704-.336l2.196-1.44c.48-.216.6-.125 1.14.019l4.8 1.3c.84.3 1.56-.42 1.349-1.26-.269-1.5-.749-2.4-1.529-3.36a6.58 6.58 0 0 0-3.9-2.28c-.504-.088-2.398-.238-4.2-.371-1.848-.137-3.6-.257-3.66-.348-1.32-.3-.912-2.238-1.476-3.084-.224-.336-.624-.396-1.224-.576-.508-.13-.885-.265-1.284-.156Z"/></svg>
);

export default AirplaneLanding01;
  