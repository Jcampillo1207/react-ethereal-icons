
import React from 'react';

/**
 * @component
 * @name Badge4Cent
 * @description Automatically generated SVG icon component for Badge4Cent.
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

interface Badge4CentProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge4Cent: React.FC<Badge4CentProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 16.443a4.6 4.6 0 0 1-3.11-1.3 4.37 4.37 0 0 1 0-6.286 4.6 4.6 0 0 1 3.11-1.3m0 8.886a4.6 4.6 0 0 0 3.333-1.3M12 16.443V7.557m0 8.886v1.113m0-10a4.6 4.6 0 0 1 3.333 1.301M12 7.557V6.444M2 7.556v8.888l3.889 3.89L12 22l6.111-1.667L22 16.444V7.556l-3.889-3.89L12 2 5.889 3.667z"/></svg>
);

export default Badge4Cent;
  