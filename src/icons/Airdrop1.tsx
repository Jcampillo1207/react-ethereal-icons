
import React from 'react';

/**
 * @component
 * @name Airdrop1
 * @description Automatically generated SVG icon component for Airdrop1.
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

interface Airdrop1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Airdrop1: React.FC<Airdrop1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M7.407 15.86a6 6 0 1 1 9.186 0m-12.02 2.835A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2.572 6.695M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 22l6-5 6 5z"/></svg>
);

export default Airdrop1;
  