
import React from 'react';

/**
 * @component
 * @name CheckIntello
 * @description Automatically generated SVG icon component for CheckIntello.
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

interface CheckIntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CheckIntello: React.FC<CheckIntelloProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g filter="url(#a)"><path fill={color2 ? color2 : "#2FAC66"} fill-opacity=".8" d="M20.443 6.642a1 1 0 0 0 0-1.414l-1.52-1.52a1 1 0 0 0-1.414 0l-7.717 7.716a1 1 0 0 1-1.414 0L5.642 8.687a1 1 0 0 0-1.414 0l-1.52 1.52a1 1 0 0 0 0 1.415l5.67 5.67a1 1 0 0 0 1.414 0z"/></g><g filter="url(#b)"><path fill={color1 ? color1 : "#2CD7A4"} fill-opacity=".5" d="M21.443 9.642a1 1 0 0 0 0-1.414l-1.52-1.52a1 1 0 0 0-1.414 0l-7.717 7.716a1 1 0 0 1-1.414 0l-2.736-2.737a1 1 0 0 0-1.414 0l-1.52 1.52a1 1 0 0 0 0 1.415l5.67 5.67a1 1 0 0 0 1.414 0z"/></g><defs><filter id="a"   x="1.514" y="2.514" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_39_872" stdDeviation=".45"/></filter><filter id="b"   x="2.514" y="5.514" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation=".25"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_39_872"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_39_872" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_39_872" stdDeviation=".45"/></filter></defs></svg>
);

export default CheckIntello;
  