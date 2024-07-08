
import React from 'react';

/**
 * @component
 * @name LojitLight
 * @description Automatically generated SVG icon component for LojitLight.
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

interface LojitLightProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const LojitLight: React.FC<LojitLightProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#2FAC66"} d="M1.005 16.127V3.297a2.297 2.297 0 0 1 4.594 0v11.017c0 .61.242 1.194.673 1.625l.467.467c.431.431 1.016.673 1.625.673h2.978a2.297 2.297 0 0 1 0 4.594H6.55c-.61 0-1.194-.242-1.624-.673L1.678 17.75a2.3 2.3 0 0 1-.673-1.624"/><path fill={color1 ? color1 : "#EDEDED"} d="M22.99 15.912v4.791A2.297 2.297 0 0 1 20.693 23h-2.297a2.297 2.297 0 0 1-2.297-2.297v-3.445a2.297 2.297 0 0 0-2.297-2.297h-1.345c-2.047 0-3.071-2.475-1.625-3.922l2.495-2.494a2.297 2.297 0 0 1 3.248 0l5.743 5.743c.43.43.672 1.015.672 1.624"/></svg>
);

export default LojitLight;
  