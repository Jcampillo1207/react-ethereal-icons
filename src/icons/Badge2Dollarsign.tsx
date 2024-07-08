
import React from 'react';

/**
 * @component
 * @name Badge2Dollarsign
 * @description Automatically generated SVG icon component for Badge2Dollarsign.
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

interface Badge2DollarsignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2Dollarsign: React.FC<Badge2DollarsignProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M15.333 8.296h-5c-.442 0-.866.195-1.178.543a1.96 1.96 0 0 0-.488 1.31c0 .49.175.961.488 1.309.312.347.736.542 1.178.542h3.334c.442 0 .866.195 1.178.542.313.348.488.819.488 1.31s-.175.962-.488 1.31a1.59 1.59 0 0 1-1.178.542h-5M12 17.556V6.444M12 2l4.5 1.611L21 3l-.611 4.5L22 12l-1.611 4.5L21 21l-4.5-.611L12 22l-4.5-1.611L3 21l.611-4.5L2 12l1.611-4.5L3 3l4.5.611z"/></svg>
);

export default Badge2Dollarsign;
  