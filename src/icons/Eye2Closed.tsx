
import React from 'react';

/**
 * @component
 * @name Eye2Closed
 * @description Automatically generated SVG icon component for Eye2Closed.
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

interface Eye2ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye2Closed: React.FC<Eye2ClosedProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 6.375c7 0 10 6.75 10 6.75s-.45 1.01-1.406 2.25M2 7.5s.929-1.393 2.959-2.63M22 7.5S19 3 12 3c-1.233 0-2.343.14-3.333.37M3.11 3 4.96 4.87m5.306 5.373a3.38 3.38 0 0 0-1.598 2.882c0 1.864 1.492 3.375 3.333 3.375a3.32 3.32 0 0 0 2.847-1.618m-4.582-4.64 4.582 4.64m-4.582-4.64L7.485 7.43m7.362 7.453 3.062 3.101M20.89 21l-2.98-3.017M4.96 4.871l2.527 2.558m0 0C3.688 9.327 2 13.125 2 13.125s3 6.75 10 6.75c2.443 0 4.398-.822 5.91-1.892"/></svg>
);

export default Eye2Closed;
  