
import React from 'react';

/**
 * @component
 * @name Boost
 * @description Automatically generated SVG icon component for Boost.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo - https://github.com/josecampillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface BoostProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Boost: React.FC<BoostProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#FF51D9"} d="M14.646 10.251c1.35.78 1.35 2.728 0 3.508L4.057 19.872c-1.35.78-3.037-.195-3.037-1.754V5.892c0-1.56 1.687-2.533 3.037-1.754z"/><path fill={color1 ? color1 : "#CA35FF"} d="M17.952 10.244c1.35.78 1.35 2.728 0 3.507L7.364 19.865c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z" opacity=".5"/><path fill={color2 ? color2 : "#A635FF"} d="M21.959 10.244c1.35.78 1.35 2.728 0 3.507l-10.588 6.114c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z" opacity=".5"/></svg>
);

export default Boost;
  