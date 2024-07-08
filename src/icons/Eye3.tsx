
import React from 'react';

/**
 * @component
 * @name Eye3
 * @description Automatically generated SVG icon component for Eye3.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Eye3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye3: React.FC<Eye3Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 7C9.414 7 7.435 8.01 6 9.202M12 7V5m0 2c2.586 0 4.565 1.01 6 2.202m-12 0C3.939 10.914 3 13 3 13s2.7 6 9 6 9-6 9-6-.939-2.086-3-3.798m-12 0-2-2m14 2 2-2M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>
);

export default Eye3;
  