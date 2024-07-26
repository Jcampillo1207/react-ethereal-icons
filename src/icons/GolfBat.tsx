
import React from 'react';

/**
 * @component
 * @name GolfBat
 * @description Automatically generated SVG icon component for GolfBat.
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

interface GolfBatProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const GolfBat: React.FC<GolfBatProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m12 20.606 4.5-11m-9.03 7.263L12 20.58c-.38.39-.745.79-1.282.947-.27.079-.558.079-1.136.079H6.646c-1.522 0-2.95-.486-3.487-2.065-.505-1.484.193-3.946 2.08-3.935.696.004 1.208.424 2.232 1.263m10.15-13.84-1.487 5.577a.635.635 0 0 0 1.165.478l2.864-5.011a1.385 1.385 0 1 0-2.541-1.044"/></svg>
);

export default GolfBat;
  