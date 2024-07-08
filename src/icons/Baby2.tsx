
import React from 'react';

/**
 * @component
 * @name Baby2
 * @description Automatically generated SVG icon component for Baby2.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Baby2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Baby2: React.FC<Baby2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M17 15h1zm-1.358-3.575-.728-.685zm-7.284 0 .728-.685zM7.3 17.7l-.952.306zM10 7a1 1 0 0 0 0 2zm.01 2a1 1 0 1 0 0-2zM14 7a1 1 0 1 0 0 2zm.01 2a1 1 0 1 0 0-2zM8 8a4 4 0 0 1 4-4V2a6 6 0 0 0-6 6zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zM8 16v-1H6v1zm8-1v1h2v-1zm1 1h-1v-.004.027l-.007.12c-.008.11-.024.275-.058.474-.067.403-.2.925-.454 1.436-.254.506-.618.982-1.145 1.334-.521.347-1.261.613-2.336.613v2c1.425 0 2.56-.36 3.445-.95.88-.585 1.453-1.36 1.824-2.103.37-.74.55-1.467.64-2.001a7 7 0 0 0 .09-.916v-.018l.001-.007V16zm-2.094-3.898c.523.57.805 1.284.952 1.898a5.5 5.5 0 0 1 .14.951l.002.053V15L17 15h1v-.045l-.004-.092a7.525 7.525 0 0 0-.194-1.329c-.192-.804-.589-1.877-1.423-2.785zM16 8c0 1.06-.412 2.024-1.086 2.74l1.457 1.37A5.98 5.98 0 0 0 18 8zm-1.086 2.74A3.99 3.99 0 0 1 12 12v2a5.99 5.99 0 0 0 4.37-1.89zm-7.293.009c-.834.908-1.231 1.98-1.424 2.785a7.5 7.5 0 0 0-.193 1.329l-.004.12V15L7 15h1v.004l.002-.053q.002-.068.015-.206A5.5 5.5 0 0 1 8.142 14c.147-.614.429-1.328.952-1.898zM12 12a3.99 3.99 0 0 1-2.914-1.26l-1.457 1.37A5.99 5.99 0 0 0 12 14zm-2.914-1.26A3.98 3.98 0 0 1 8 8H6c0 1.59.62 3.038 1.63 4.11zm-.834 6.653a5.5 5.5 0 0 1-.249-1.313L8 15.996v.003L7 16H6v.061l.006.128a7.538 7.538 0 0 0 .342 1.817zM10 9h.01V7H10zm4 0h.01V7H14zm-2 11c-1.23 0-2.026-.348-2.561-.779L8.184 20.78C9.108 21.523 10.359 22 12 22zm-2.561-.779c-.616-.495-.977-1.177-1.187-1.828l-1.904.613c.284.88.819 1.953 1.836 2.773zm1.651-6.635-3.189 7 1.82.829 3.189-7z"/></svg>
);

export default Baby2;
  