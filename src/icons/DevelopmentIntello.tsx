
import React from 'react';

/**
 * @component
 * @name DevelopmentIntello
 * @description Automatically generated SVG icon component for DevelopmentIntello.
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

interface DevelopmentIntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const DevelopmentIntello: React.FC<DevelopmentIntelloProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g filter="url(#a)"><path fill={color2 ? color2 : "#2FAC66"} fill-opacity=".8" d="M17.209 11.189c.417-.114.626-.17.709-.279.082-.108.082-.283.082-.631V8.72c0-.348 0-.523-.082-.631-.083-.109-.292-.165-.71-.279-1.56-.423-2.536-2.066-2.133-3.627.11-.429.166-.644.113-.77-.053-.125-.205-.212-.508-.386L13.3 2.24c-.298-.17-.447-.256-.58-.238-.134.019-.285.17-.586.473a3.027 3.027 0 0 1-4.267 0c-.301-.303-.452-.454-.585-.473-.134-.018-.283.067-.58.238l-1.38.788c-.304.174-.456.26-.509.386s.003.341.114.77c.402 1.561-.575 3.204-2.136 3.627-.417.114-.626.17-.709.279C2 8.198 2 8.373 2 8.72v1.558c0 .348 0 .523.082.631.083.109.292.165.71.279 1.56.423 2.536 2.066 2.133 3.627-.11.429-.166.644-.113.77.053.125.205.212.508.386l1.38.788c.298.17.447.256.58.238.134-.018.285-.17.586-.473a3.03 3.03 0 0 1 4.27 0c.3.303.451.454.585.473s.283-.068.58-.238l1.38-.789c.304-.173.455-.26.508-.386s-.002-.34-.113-.77c-.403-1.56.573-3.202 2.133-3.626"/></g><g filter="url(#b)"><path fill={color1 ? color1 : "#2CD7A4"} fill-opacity=".5" d="M21.209 16.189c.417-.114.626-.17.709-.279.082-.108.082-.283.082-.631V13.72c0-.348 0-.523-.082-.631-.083-.109-.292-.165-.71-.279-1.56-.423-2.536-2.066-2.133-3.627.11-.429.166-.644.113-.77-.053-.125-.205-.212-.508-.386L17.3 7.24c-.298-.17-.447-.256-.58-.238-.134.019-.285.17-.586.473a3.027 3.027 0 0 1-4.267 0c-.301-.303-.452-.454-.586-.473s-.282.067-.58.238l-1.38.788c-.303.174-.455.26-.508.386s.003.341.114.77c.402 1.561-.575 3.204-2.136 3.627-.417.114-.626.17-.709.279C6 13.198 6 13.373 6 13.72v1.558c0 .348 0 .523.082.631.083.109.292.165.71.279 1.56.423 2.536 2.066 2.133 3.627-.11.429-.166.644-.113.77.053.125.205.212.508.386l1.38.788c.298.17.447.256.58.238.134-.018.285-.17.586-.473a3.03 3.03 0 0 1 4.27 0c.3.303.451.454.585.473s.282-.068.58-.238l1.38-.789c.304-.173.455-.26.508-.386s-.002-.34-.113-.77c-.403-1.56.573-3.203 2.133-3.626"/></g><defs><filter id="a"   x=".1" y=".1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_822" stdDeviation=".95"/></filter><filter id="b"   x="5.1" y="6.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation=".25"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_822"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_822" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_822" stdDeviation=".45"/></filter></defs></svg>
);

export default DevelopmentIntello;
  