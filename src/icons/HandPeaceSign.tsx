
import React from 'react';

/**
 * @component
 * @name HandPeaceSign
 * @description Automatically generated SVG icon component for HandPeaceSign.
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

interface HandPeaceSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const HandPeaceSign: React.FC<HandPeaceSignProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m7.136 10.035-2.294-5.83c-.263-.982.396-2.176 1.392-2.443s2.209.426 2.472 1.408L11 9l2.294-5.83c.263-.982 1.476-1.675 2.472-1.408s1.655 1.46 1.392 2.444l-2.294 5.83m-7.728 0-2.224 2.67a4 4 0 0 0-.255 4.779l1.686 2.53A4.46 4.46 0 0 0 10.053 22h4.232a4.89 4.89 0 0 0 4.663-3.417L20 15c.575-1.82.199-3.166-.544-4.16-.764-1.024-2.157-1.22-3.416-1.005l-1.176.2m-7.728 0L8 13m6.864-2.965L14.5 11"/></svg>
);

export default HandPeaceSign;
  