
import React from 'react';

/**
 * @component
 * @name PentagonAlert
 * @description Automatically generated SVG icon component for PentagonAlert.
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

interface PentagonAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const PentagonAlert: React.FC<PentagonAlertProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 9v5m0 3h.01M2.871 8.316c-.747.556-1.068 1.557-.747 2.447l2.99 9.68C5.433 21.332 6.18 22 7.141 22h9.716c.961 0 1.708-.668 2.029-1.558l2.99-9.679c.32-.89 0-1.891-.748-2.447l-7.901-5.897A2.18 2.18 0 0 0 11.947 2a2.18 2.18 0 0 0-1.282.419z"/></svg>
);

export default PentagonAlert;
  