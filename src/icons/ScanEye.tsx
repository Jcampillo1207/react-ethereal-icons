
import React from 'react';

/**
 * @component
 * @name ScanEye
 * @description Automatically generated SVG icon component for ScanEye.
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

interface ScanEyeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const ScanEye: React.FC<ScanEyeProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M7 2H4a2 2 0 0 0-2 2v3m0 10v3a2 2 0 0 0 2 2h3m10 0h3a2 2 0 0 0 2-2v-3M17 2h3a2 2 0 0 1 2 2v3M5 12s2.1-5 7-5 7 5 7 5-2.1 5-7 5-7-5-7-5"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
);

export default ScanEye;
  