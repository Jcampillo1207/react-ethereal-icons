
import React from 'react';

/**
 * @component
 * @name Mask
 * @description Automatically generated SVG icon component for Mask.
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

interface MaskProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Mask: React.FC<MaskProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M2 10.833c0 1.547.527 3.031 1.464 4.125.938 1.094 2.21 1.709 3.536 1.709 1.848.08 3.614.904 5 2.333 1.386-1.428 3.152-2.253 5-2.333 1.326 0 2.598-.615 3.535-1.709S22 12.38 22 10.833V5h-5c-1.848.08-3.614.905-5 2.333C10.614 5.905 8.848 5.08 7 5H2z"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M5 8.667c4 0 5 1.333 5 4.333-3 0-5-.5-5-4.333M19 8.667c-4 0-5 1.333-5 4.333 3 0 5-.5 5-4.333"/></svg>
);

export default Mask;
  