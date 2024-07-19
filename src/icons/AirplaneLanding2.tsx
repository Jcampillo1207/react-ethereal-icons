
import React from 'react';

/**
 * @component
 * @name AirplaneLanding2
 * @description Automatically generated SVG icon component for AirplaneLanding2.
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

interface AirplaneLanding2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AirplaneLanding2: React.FC<AirplaneLanding2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18.807 3.621 21.292 3l.743 5.058a2 2 0 0 1-1.45 2.22L14.291 12l2 3-2.03.507c-1.652.252-2.454.134-3.53-.807L9.292 13l-5 1c-1.157.083-2.33-.887-2-2 .723-2.44 3.003-3.6 5-4l10-1V5.562a2 2 0 0 1 1.515-1.94M18.292 21h-16"/></svg>
);

export default AirplaneLanding2;
  