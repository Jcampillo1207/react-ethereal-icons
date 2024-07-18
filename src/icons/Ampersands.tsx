
import React from 'react';

/**
 * @component
 * @name Ampersands
 * @description Automatically generated SVG icon component for Ampersands.
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

interface AmpersandsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Ampersands: React.FC<AmpersandsProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9.143 12c0 2.75-2.057 5-4.572 5a2.47 2.47 0 0 1-1.818-.824A2.95 2.95 0 0 1 2 14.188c0-3.75 4.571-2.5 4.571-5.313 0-.497-.18-.974-.502-1.326A1.64 1.64 0 0 0 4.857 7c-.455 0-.89.198-1.212.55a1.97 1.97 0 0 0-.502 1.325C3.143 10.75 4.57 14.188 10 17m11.143-5c0 2.75-2.057 5-4.572 5a2.47 2.47 0 0 1-1.818-.824A2.95 2.95 0 0 1 14 14.188c0-3.75 4.571-2.5 4.571-5.313 0-.497-.18-.974-.502-1.326A1.64 1.64 0 0 0 16.857 7c-.454 0-.89.198-1.212.55a1.97 1.97 0 0 0-.502 1.325c0 1.875 1.428 5.313 6.857 8.125"/></svg>
);

export default Ampersands;
  