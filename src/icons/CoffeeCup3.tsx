
import React from 'react';

/**
 * @component
 * @name CoffeeCup3
 * @description Automatically generated SVG icon component for CoffeeCup3.
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

interface CoffeeCup3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CoffeeCup3: React.FC<CoffeeCup3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 6.176H5m1 0h12m-12 0L7 3h10l1 3.176m-12 0L6.786 12M18 6.176h1m-1 0L17.214 12m-9.943 3.6.086.635L8 21h8l.643-4.765.086-.635m-9.458 0h9.458m-9.458 0L6.786 12m9.943 3.6.485-3.6m0 0H6.786"/></svg>
);

export default CoffeeCup3;
  