
import React from 'react';

/**
 * @component
 * @name Badge3Dollarsign
 * @description Automatically generated SVG icon component for Badge3Dollarsign.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Badge3DollarsignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Dollarsign: React.FC<Badge3DollarsignProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M15 8.667h-4.5c-.398 0-.78.175-1.06.488-.282.312-.44.736-.44 1.178s.158.866.44 1.179c.28.312.662.488 1.06.488h3c.398 0 .78.176 1.06.488.282.313.44.737.44 1.179s-.158.866-.44 1.178a1.43 1.43 0 0 1-1.06.488H9M12 17V7m9 5-2.5-6.5L12 3 5.5 5.5 3 12l2.5 6.5L12 21l6.5-2.5z"/></svg>
);

export default Badge3Dollarsign;
  