
import React from 'react';

/**
 * @component
 * @name OnboardingIntello
 * @description Automatically generated SVG icon component for OnboardingIntello.
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

interface OnboardingIntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const OnboardingIntello: React.FC<OnboardingIntelloProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g filter="url(#a)"><path fill={color2 ? color2 : "#4690FF"} fill-opacity=".8" d="M17.111 2H2.89A.89.89 0 0 0 2 2.889V17.11c0 .491.398.889.889.889H17.11c.491 0 .889-.398.889-.889V2.89A.89.89 0 0 0 17.111 2"/></g><g filter="url(#b)"><path fill={color1 ? color1 : "#61FFFF"} fill-opacity=".27" d="M21.111 6H6.89A.89.89 0 0 0 6 6.889V21.11c0 .491.398.889.889.889H21.11c.491 0 .889-.398.889-.889V6.89A.89.89 0 0 0 21.111 6"/></g><defs><filter id="a"   x=".1" y=".1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_610" stdDeviation=".95"/></filter><filter id="b"   x="2" y="2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_610"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_610" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_610" stdDeviation=".45"/></filter></defs></svg>
);

export default OnboardingIntello;
  