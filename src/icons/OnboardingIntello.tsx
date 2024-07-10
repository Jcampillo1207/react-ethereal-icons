
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
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#4690FF"} d="M18 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/><g filter="url(#a)"><path fill={color1 ? color1 : "#61FFFF"} fill-opacity=".27" d="M22 5H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"/></g><defs><filter id="a"   x="1" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_610"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_610" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_610" stdDeviation=".45"/></filter></defs></svg>
);

export default OnboardingIntello;
  