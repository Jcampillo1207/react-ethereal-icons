
import React from 'react';

/**
 * @component
 * @name BulbIntello
 * @description Automatically generated SVG icon component for BulbIntello.
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

interface BulbIntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BulbIntello: React.FC<BulbIntelloProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g clip-path="url(#a)" filter="url(#b)"><path fill={color2 ? color2 : "url(#c)"} d="M16 17.477c0-.317.026-.636.122-.938.321-1.014.947-1.792 1.878-2.664 1.333-1.125 2-2.75 2-4.375 0-1.99-.843-3.897-2.343-5.303S14.122 2 12 2s-4.157.79-5.657 2.197C4.843 5.603 4 7.51 4 9.5c0 1.25.267 2.75 2 4.375.816.765 1.53 1.625 1.875 2.665"/><path fill={color1 ? color1 : "url(#d)"} d="M8 18a4 4 0 0 0 4 4"/><path fill={color2 ? color2 : "url(#e)"} d="M16 17.477c0-.317.026-.636.122-.938.321-1.014.947-1.792 1.878-2.664 1.333-1.125 2-2.75 2-4.375 0-1.99-.843-3.897-2.343-5.303S14.122 2 12 2s-4.157.79-5.657 2.197C4.843 5.603 4 7.51 4 9.5c0 1.25.267 2.75 2 4.375.816.765 1.53 1.625 1.875 2.665.1.3.125.62.125.937V18a4 4 0 0 0 8 0z"/></g><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(0 16.1111 -12.5938 0 12 5.889)" gradientUnits="userSpaceOnUse"><stop stop-color="#61FFFF"/><stop offset=".501" stop-color="#4690FF"/></radialGradient><radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="matrix(0 16.1111 -12.5938 0 12 5.889)" gradientUnits="userSpaceOnUse"><stop stop-color="#61FFFF"/><stop offset=".501" stop-color="#4690FF"/></radialGradient><radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="matrix(0 16.1111 -12.5938 0 12 5.889)" gradientUnits="userSpaceOnUse"><stop stop-color="#61FFFF"/><stop offset=".501" stop-color="#4690FF"/></radialGradient><clipPath id="a"><path fill={color1 ? color1 : "#fff"} d="M0 0h24v24H0z"/></clipPath><filter id="b"   x="1.9" y="-.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_854" stdDeviation="1.05"/></filter></defs></svg>
);

export default BulbIntello;
  