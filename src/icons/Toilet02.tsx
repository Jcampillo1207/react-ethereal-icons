
import React from 'react';

/**
 * @component
 * @name Toilet02
 * @description Automatically generated SVG icon component for Toilet02.
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

interface Toilet02Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Toilet02: React.FC<Toilet02Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke- d="M14.4 14c.972-.912 1.6-2.364 1.6-4 0-2.761-1.79-5-4-5s-4 2.239-4 5c0 1.636.628 3.088 1.6 4M8.107 14h7.786c.586 0 1.107.414 1.107 1 0 1.51-.67 3.09-1.729 4.126-.525.514-1.036 1.046-.4 1.743.095.104.206.195.299.303.328.376-.024.828-.447.828H9.277c-.423 0-.775-.452-.447-.828.093-.108.204-.199.3-.303.635-.697.123-1.23-.401-1.743C7.669 18.09 7 16.51 7 15c0-.586.521-1 1.107-1Z"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18.29 12c.594 0 1.093-.43 1.152-.994l.367-3.504c.214-2.033.32-3.05-.076-3.818-.987-1.912-3.3-1.675-5.139-1.675H9.406c-1.84 0-4.152-.237-5.139 1.675-.396.768-.29 1.785-.077 3.818l.368 3.504c.06.564.558.994 1.153.994"/></svg>
);

export default Toilet02;
  