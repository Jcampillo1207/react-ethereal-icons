
import React from 'react';

/**
 * @component
 * @name UploadIntello
 * @description Automatically generated SVG icon component for UploadIntello.
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

interface UploadIntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const UploadIntello: React.FC<UploadIntelloProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g filter="url(#a)"><path fill={color2 ? color2 : "#A635FF"} fill-opacity=".8" d="M8.484 22a.5.5 0 0 1-.5-.5v-7.077a.5.5 0 0 0-.5-.5H2.082a.5.5 0 0 1-.38-.824l9.917-11.652a.5.5 0 0 1 .762 0L22.299 13.1a.5.5 0 0 1-.381.824h-5.402a.5.5 0 0 0-.5.5V21.5a.5.5 0 0 1-.5.5z"/></g><g filter="url(#b)"><path fill={color1 ? color1 : "#FF51D9"} fill-opacity=".5" d="M9.944 22a.5.5 0 0 1-.5-.5v-3.846a.5.5 0 0 0-.5-.5H6.012a.5.5 0 0 1-.397-.804l5.988-7.83a.5.5 0 0 1 .794 0l5.988 7.83a.5.5 0 0 1-.397.804h-2.932a.5.5 0 0 0-.5.5V21.5a.5.5 0 0 1-.5.5z"/></g><defs><filter id="a"   x="1.081" y=".771" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_835" stdDeviation=".25"/></filter><filter id="b"   x="4.611" y="7.423" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation=".25"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_835"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_835" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_835" stdDeviation=".45"/></filter></defs></svg>
);

export default UploadIntello;
  