
import React from 'react';

/**
 * @component
 * @name Airdrop
 * @description Automatically generated SVG icon component for Airdrop.
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

interface AirdropProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Airdrop: React.FC<AirdropProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M4 17.001A9.96 9.96 0 0 1 2 11C2 5.477 6.477 1 12 1s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M7.528 15a6 6 0 1 1 8.944 0"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9.952 17.876c.77-1.118 1.156-1.677 1.656-1.82a1.4 1.4 0 0 1 .784 0c.5.143.886.702 1.657 1.82 1.025 1.487 1.538 2.231 1.439 2.851a1.54 1.54 0 0 1-.412.83C14.646 22 13.764 22 12 22s-2.646 0-3.076-.444a1.54 1.54 0 0 1-.412-.829c-.099-.62.414-1.364 1.44-2.851"/></svg>
);

export default Airdrop;
  