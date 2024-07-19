
import React from 'react';

/**
 * @component
 * @name Key2
 * @description Automatically generated SVG icon component for Key2.
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

interface Key2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Key2: React.FC<Key2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m17 7-1 1m-6 3-8 8v3h3v-2h2v-2h2l4.085-3.927 2.83.67a2 2 0 0 0 1.874-.532l3.625-3.625A2 2 0 0 0 22 9.172V5.828a2 2 0 0 0-.586-1.414l-1.828-1.828A2 2 0 0 0 18.172 2h-3.344a2 2 0 0 0-1.414.586L9.801 6.199a2 2 0 0 0-.526 1.9z"/></svg>
);

export default Key2;
  