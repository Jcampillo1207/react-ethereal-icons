
import React from 'react';

/**
 * @component
 * @name Eye3Closed
 * @description Automatically generated SVG icon component for Eye3Closed.
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

interface Eye3ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye3Closed: React.FC<Eye3ClosedProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M5.333 8.853C3.043 10.779 2 13.125 2 13.125s3 6.75 10 6.75c2.443 0 4.398-.822 5.91-1.892M5.332 8.853l-2.222-2.25m2.222 2.25a11 11 0 0 1 2.153-1.424M12 4.125v2.25c2.873 0 5.072 1.137 6.667 2.478m0 0C20.957 10.779 22 13.125 22 13.125s-.357.803-1.111 1.854m-2.222-6.126 2.222-2.25M3.11 3l4.375 4.43m2.779 2.813a3.38 3.38 0 0 0-1.598 2.882c0 1.864 1.492 3.375 3.333 3.375a3.32 3.32 0 0 0 2.847-1.618m-4.582-4.64 4.582 4.64m-4.582-4.64L7.485 7.43m7.362 7.453 3.062 3.101M20.89 21l-2.98-3.017"/></svg>
);

export default Eye3Closed;
  