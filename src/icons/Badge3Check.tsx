
import React from 'react';

/**
 * @component
 * @name Badge3Check
 * @description Automatically generated SVG icon component for Badge3Check.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo - https://github.com/josecampillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Badge3CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Check: React.FC<Badge3CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><g clip-path="url(#a)"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m22 12 .933.359.138-.359-.138-.359zm-2.778-7.222.934-.36-.16-.414-.415-.16zM12 2l.359-.933L12 .929l-.359.138zM4.778 4.778l-.36-.934-.414.16-.16.415zM2 12l-.933-.359L.929 12l.138.359zm2.778 7.222-.934.36.16.414.415.16zM12 22l-.359.933.359.138.359-.138zm7.222-2.778.36.934.414-.16.16-.415zm-9.848-7.93a1 1 0 0 0-1.414 1.415zm1.515 2.93-.707.707a1 1 0 0 0 1.414 0zm5.151-3.737a1 1 0 1 0-1.414-1.414zm6.893 1.156-2.777-7.222-1.867.718 2.778 7.222zm-3.352-7.797L12.36 1.067l-.718 1.866 7.222 2.778zm-7.94-2.777L4.419 3.844l.718 1.867 7.222-2.778zM3.844 4.419 1.067 11.64l1.866.718 2.778-7.222zm-2.777 7.94 2.777 7.222 1.867-.718-2.778-7.222zm3.352 7.797 7.222 2.777.718-1.866-7.222-2.778zm7.94 2.777 7.222-2.777-.718-1.867-7.222 2.778zm7.797-3.352 2.777-7.222-1.866-.718-2.778 7.222zM7.96 12.707l2.222 2.222 1.414-1.414-2.222-2.222zm3.636 2.222 4.444-4.444-1.414-1.414-4.444 4.444z"/></g><defs><clipPath id="a"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default Badge3Check;
  