
import React from 'react';

/**
 * @component
 * @name Badge1Cent
 * @description Automatically generated SVG icon component for Badge1Cent.
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

interface Badge1CentProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge1Cent: React.FC<Badge1CentProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 16.443a4.6 4.6 0 0 1-3.11-1.3 4.37 4.37 0 0 1 0-6.286 4.6 4.6 0 0 1 3.11-1.3m0 8.886a4.6 4.6 0 0 0 3.333-1.3M12 16.443V7.557m0 8.886v1.113m0-10a4.6 4.6 0 0 1 3.333 1.301M12 7.557V6.444M3.86 8.616a4.002 4.002 0 0 1 4.779-4.77 4 4 0 0 1 6.738 0 3.997 3.997 0 0 1 4.778 4.78 4 4 0 0 1 0 6.74 4.003 4.003 0 0 1-2.781 4.716 4 4 0 0 1-1.987.065 4 4 0 0 1-6.748 0 3.997 3.997 0 0 1-4.779-4.77 4 4 0 0 1 0-6.761"/></svg>
);

export default Badge1Cent;
  