
import React from 'react';

/**
 * @component
 * @name BoosthubIntello
 * @description Automatically generated SVG icon component for BoosthubIntello.
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

interface BoosthubIntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BoosthubIntello: React.FC<BoosthubIntelloProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g filter="url(#a)"><path fill={color2 ? color2 : "#A635FF"} fill-opacity=".8" d="m3.882 12.64 7.095-4.353a1.97 1.97 0 0 1 2.046 0l7.095 4.353a1.8 1.8 0 0 1 .097 3.034l-7.094 4.975a1.96 1.96 0 0 1-2.242 0l-7.094-4.975a1.8 1.8 0 0 1 .097-3.034"/></g><g filter="url(#b)"><path fill={color1 ? color1 : "#FF51D9"} fill-opacity=".5" d="m3.882 7.64 7.095-4.353a1.97 1.97 0 0 1 2.046 0l7.095 4.353a1.8 1.8 0 0 1 .097 3.035l-7.094 4.974a1.96 1.96 0 0 1-2.242 0l-7.094-4.974a1.8 1.8 0 0 1 .097-3.035"/></g><defs><filter id="a"   x="1.1" y="6.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_795" stdDeviation=".95"/></filter><filter id="b"   x="2.1" y="2.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation=".25"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_795"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_795" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_795" stdDeviation=".45"/></filter></defs></svg>
);

export default BoosthubIntello;
  