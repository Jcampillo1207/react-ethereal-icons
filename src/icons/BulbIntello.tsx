
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
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g filter="url(#a)"><path fill={color2 ? color2 : "url(#b)"} d="M15.5 16.919c0-.279.022-.558.104-.825.28-.917.829-1.619 1.646-2.407C18.417 12.676 19 11.214 19 9.75a6.63 6.63 0 0 0-2.05-4.773A7.13 7.13 0 0 0 12 3a7.13 7.13 0 0 0-4.95 1.977A6.63 6.63 0 0 0 5 9.75c0 1.125.233 2.475 1.75 3.938.716.69 1.343 1.467 1.643 2.407"/><path fill={color1 ? color1 : "url(#c)"} d="M8.5 17.5A3.5 3.5 0 0 0 12 21"/><path fill={color2 ? color2 : "url(#d)"} d="M15.5 16.919c0-.279.022-.558.104-.825.28-.917.829-1.619 1.646-2.407C18.417 12.676 19 11.214 19 9.75a6.63 6.63 0 0 0-2.05-4.773A7.13 7.13 0 0 0 12 3a7.13 7.13 0 0 0-4.95 1.977A6.63 6.63 0 0 0 5 9.75c0 1.125.233 2.475 1.75 3.938.716.69 1.343 1.467 1.643 2.407.085.265.107.545.107.824v.581a3.5 3.5 0 1 0 7 0z"/></g><defs><radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="matrix(0 14.5 -11.0196 0 12 6.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#61FFFF"/><stop offset=".501" stop-color="#4690FF"/></radialGradient><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(0 14.5 -11.0196 0 12 6.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#61FFFF"/><stop offset=".501" stop-color="#4690FF"/></radialGradient><radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="matrix(0 14.5 -11.0196 0 12 6.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#61FFFF"/><stop offset=".501" stop-color="#4690FF"/></radialGradient><filter id="a"   x="2.9" y=".9" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_854" stdDeviation="1.05"/></filter></defs></svg>
);

export default BulbIntello;
  