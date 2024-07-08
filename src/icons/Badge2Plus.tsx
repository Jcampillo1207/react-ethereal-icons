
import React from 'react';

/**
 * @component
 * @name Badge2Plus
 * @description Automatically generated SVG icon component for Badge2Plus.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Badge2PlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2Plus: React.FC<Badge2PlusProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M8 12h4m0 0h4m-4 0V8m0 4v4m0-13 4.05 1.45 4.05-.55-.55 4.05L21 12l-1.45 4.05.55 4.05-4.05-.55L12 21l-4.05-1.45-4.05.55.55-4.05L3 12l1.45-4.05L3.9 3.9l4.05.55z"/></svg>
);

export default Badge2Plus;
  