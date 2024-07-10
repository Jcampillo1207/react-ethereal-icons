
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
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g clip-path="url(#a)"><g filter="url(#b)"><path fill={color2 ? color2 : "#A635FF"} fill-opacity=".8" d="m2.078 13.353 8.672-5.022a2.52 2.52 0 0 1 2.5 0l8.672 5.022c1.385.803 1.447 2.623.119 3.502l-8.671 5.74c-.817.54-1.923.54-2.74 0l-8.671-5.74c-1.328-.879-1.266-2.7.12-3.502"/></g><g filter="url(#c)"><path fill={color1 ? color1 : "#FF51D9"} fill-opacity=".5" d="m2.078 6.353 8.672-5.022a2.52 2.52 0 0 1 2.5 0l8.672 5.022c1.385.803 1.447 2.623.119 3.502l-8.671 5.74c-.817.54-1.923.54-2.74 0L1.96 9.855c-1.328-.879-1.266-2.7.12-3.502"/></g></g><defs><filter id="b"   x="-.9" y="6.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_795" stdDeviation=".95"/></filter><filter id="c"   x=".1" y=".1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation=".25"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_795"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_795" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_795" stdDeviation=".45"/></filter><clipPath id="a"><path fill={color2 ? color2 : "#fff"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default BoosthubIntello;
  