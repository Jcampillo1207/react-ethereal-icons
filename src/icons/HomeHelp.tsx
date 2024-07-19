
import React from 'react';

/**
 * @component
 * @name HomeHelp
 * @description Automatically generated SVG icon component for HomeHelp.
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

interface HomeHelpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const HomeHelp: React.FC<HomeHelpProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M10 11.222a2.222 2.222 0 1 1 3.794 1.571c-.434.434-1.225.652-1.794.652V15m-.011 3H12M10.75 3 2.917 9.267a2 2 0 0 0-.723 1.89L3.72 20.33A2 2 0 0 0 5.694 22h12.612a2 2 0 0 0 1.973-1.671l1.528-9.171a2 2 0 0 0-.723-1.891L13.249 3a2 2 0 0 0-2.498 0"/></svg>
);

export default HomeHelp;
  