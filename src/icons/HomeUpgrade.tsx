
import React from 'react';

/**
 * @component
 * @name HomeUpgrade
 * @description Automatically generated SVG icon component for HomeUpgrade.
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

interface HomeUpgradeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const HomeUpgrade: React.FC<HomeUpgradeProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M8 22H5.694a2 2 0 0 1-1.973-1.671l-1.528-9.171a2 2 0 0 1 .723-1.891L10.751 3a2 2 0 0 1 2.498 0l7.835 6.267a2 2 0 0 1 .723 1.89L20.28 20.33A2 2 0 0 1 18.306 22H14a2 2 0 0 1-2-2v-9m0 0-3 3m3-3 3 3"/></svg>
);

export default HomeUpgrade;
  