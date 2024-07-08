
import React from 'react';

/**
 * @component
 * @name Eye3Closed
 * @description Automatically generated SVG icon component for Eye3Closed.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Eye3ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye3Closed: React.FC<Eye3ClosedProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M6 9.202C3.939 10.914 3 13 3 13s2.7 6 9 6c2.198 0 3.958-.73 5.318-1.682M6 9.202l-2-2m2 2a10 10 0 0 1 1.937-1.265M12 5v2c2.586 0 4.565 1.01 6 2.202m0 0C20.061 10.914 21 13 21 13s-.321.713-1 1.648m-2-5.446 2-2M4 4l3.937 3.937m2.501 2.501a3 3 0 1 0 4.124 4.124m-4.124-4.124 4.124 4.124m-4.124-4.124L7.937 7.937m6.625 6.625 2.756 2.756M20 20l-2.682-2.682"/></svg>
);

export default Eye3Closed;
  