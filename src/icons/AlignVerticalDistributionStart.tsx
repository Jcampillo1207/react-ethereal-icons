
import React from 'react';

/**
 * @component
 * @name AlignVerticalDistributionStart
 * @description Automatically generated SVG icon component for AlignVerticalDistributionStart.
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

interface AlignVerticalDistributionStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AlignVerticalDistributionStart: React.FC<AlignVerticalDistributionStartProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M8 4h8M8 4H2m6 0v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4m0 0h6m-3 10H5m14 0h3m-3 0v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4m0 0H2"/></svg>
);

export default AlignVerticalDistributionStart;
  