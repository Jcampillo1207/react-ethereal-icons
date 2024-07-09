
import React from 'react';

/**
 * @component
 * @name FingerPointingRight
 * @description Automatically generated SVG icon component for FingerPointingRight.
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

interface FingerPointingRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FingerPointingRight: React.FC<FingerPointingRightProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2.001 8.44h.948c.645 0 1.274-.236 1.792-.67l4.902-4.115c.566-.475 1.267-.854 1.915-.54 1.049.507 1.73 1.938.158 3.69L10.006 8.6H20.43c2.044.063 2.145 3.762 0 3.92h-5.94c.191 1.665-.852 9.509-5.272 8.366q-.316-.082-.634-.162c-.918-.231-2.556-.915-3.513-1.67-.997-.784-2.626-.507-3.07-.507"/></svg>
);

export default FingerPointingRight;
  