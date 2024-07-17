
import React from 'react';

/**
 * @component
 * @name Rotate3d
 * @description Automatically generated SVG icon component for Rotate3d.
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

interface Rotate3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Rotate3d: React.FC<Rotate3dProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 2C6.477 2 2 6.477 2 12M12 2c5.523 0 10 4.477 10 10M12 2S8.5 7.5 8.5 14M2 12c0 5.523 4.477 10 10 10M2 12s3 2 6.5 2m3.5 8c5.523 0 10-4.477 10-10M12 22s-3.5-1.5-3.5-8M22 12s-4.5 2-13.5 2"/></svg>
);

export default Rotate3d;
  