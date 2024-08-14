
import React from 'react';

/**
 * @component
 * @name BillboardBuilding
 * @description Automatically generated SVG icon component for BillboardBuilding.
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

interface BillboardBuildingProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BillboardBuilding: React.FC<BillboardBuildingProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 22H8m6 0v-9m0 9h4M8 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9m-6 9v-3m6-6h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2m-.01-6H18m0 6v-2M5 6h.01m5.98 0H11m-.01 4H11m-.01 4.5H11M5 10h.01M5 14.5h.01M6 6h4v9H6z"/></svg>
);

export default BillboardBuilding;
  