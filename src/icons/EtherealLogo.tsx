
import React from 'react';

/**
 * @component
 * @name EtherealLogo
 * @description Automatically generated SVG icon component for EtherealLogo.
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

interface EtherealLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const EtherealLogo: React.FC<EtherealLogoProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#735CFF"} d="M17.218 6.782a9.5 9.5 0 0 1 0 13.436 9.5 9.5 0 1 1 0-13.435"/><path fill={color1 ? color1 : "#61FFFF"} d="M21.096 2.904a6.5 6.5 0 1 1-9.192 9.192 6.5 6.5 0 0 1 9.192-9.192" opacity=".5"/></svg>
);

export default EtherealLogo;
  