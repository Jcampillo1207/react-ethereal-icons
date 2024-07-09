
import React from 'react';

/**
 * @component
 * @name Typescript1
 * @description Automatically generated SVG icon component for Typescript1.
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

interface Typescript1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Typescript1: React.FC<Typescript1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M18 13a1 1 0 1 0 0-2zm-3 4a1 1 0 1 0 0 2zm-2.268-5a1 1 0 1 0-2 0zm-3.866 4.5a1 1 0 0 0-1.732 1zM1 4v16h2V4zm3 19h16v-2H4zm19-3V4h-2v16zM20 1H4v2h16zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zm-3 19a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zM1 20a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1zM3 4a1 1 0 0 1 1-1V1a3 3 0 0 0-3 3zm15 7h-1.8v2H18zm-1.8 0a2.2 2.2 0 0 0-2.2 2.2h2c0-.11.09-.2.2-.2zM14 13.2v.6h2v-.6zm0 .6a2.2 2.2 0 0 0 2.2 2.2v-2a.2.2 0 0 1-.2-.2zm2.2 2.2h.6v-2h-.6zm.6 0c.11 0 .2.09.2.2h2a2.2 2.2 0 0 0-2.2-2.2zm.2.2v.6h2v-.6zm0 .6a.2.2 0 0 1-.2.2v2a2.2 2.2 0 0 0 2.2-2.2zm-.2.2H15v2h1.8zm-6.068-5v4h2v-4zm0 4a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-.866-.5l-1.732 1A3 3 0 0 0 9.732 19z"/></svg>
);

export default Typescript1;
  