
import React from 'react';

/**
 * @component
 * @name Badge2Cent
 * @description Automatically generated SVG icon component for Badge2Cent.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Badge2CentProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2Cent: React.FC<Badge2CentProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 15.999a4.14 4.14 0 0 1-2.799-1.17 3.93 3.93 0 0 1 0-5.657A4.14 4.14 0 0 1 12 8.002m0 7.997a4.14 4.14 0 0 0 3-1.17m-3 1.17V8M12 16V17m0-8.999a4.14 4.14 0 0 1 3 1.17m-3-1.17V7m0-4 4.05 1.45 4.05-.55-.55 4.05L21 12l-1.45 4.05.55 4.05-4.05-.55L12 21l-4.05-1.45-4.05.55.55-4.05L3 12l1.45-4.05L3.9 3.9l4.05.55z"/></svg>
);

export default Badge2Cent;
  