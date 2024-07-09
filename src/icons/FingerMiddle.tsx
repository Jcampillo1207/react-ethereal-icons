
import React from 'react';

/**
 * @component
 * @name FingerMiddle
 * @description Automatically generated SVG icon component for FingerMiddle.
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

interface FingerMiddleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FingerMiddle: React.FC<FingerMiddleProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M7.96 9.745c-1.361.292-1.895.658-2.666 1.47-.162.18-.331.391-.493.605-.555.734-.702 1.676-.521 2.579l.369 1.844a5.9 5.9 0 0 0 1.618 3.024l1.026 1.026C7.746 20.746 8 21.36 8 22M7.96 9.745l.04 3.24m-.04-3.24S8.098 8 9.55 8C11 8 11 9.999 11 9.999m0 0V3.745S11 2 12.5 2s1.527 1.745 1.527 1.745l-.04 3.702.01 2.552m-2.997 0v1.003m3-1.003v1.003l-.004-1.003M17 12v-1.146c-.013-.309 0-.826 0-.854m1 12c.024-.897.021-1.868 1-3 1.06-1.03.997-1.944 1-3.671v-3.247C20.006 10.546 18.5 10 17 10V10m-3.004-.001S14 8 15.5 8s1.5 2 1.5 2"/></svg>
);

export default FingerMiddle;
  