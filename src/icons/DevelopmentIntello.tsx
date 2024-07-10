
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
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><g clip-path="url(#a)"><g filter="url(#b)"><path fill={color2 ? color2 : "#2FAC66"} fill-opacity=".8" d="M18.11 11.414c.47-.128.704-.193.797-.316s.093-.32.093-.715V8.617c0-.395 0-.592-.093-.715s-.327-.187-.797-.316c-1.755-.48-2.854-2.342-2.401-4.11.125-.487.187-.73.127-.873-.06-.142-.23-.24-.571-.437l-1.553-.894c-.335-.193-.502-.29-.652-.27-.15.021-.32.193-.66.536a3.387 3.387 0 0 1-4.8 0c-.338-.343-.508-.515-.658-.535s-.318.076-.653.269l-1.552.894c-.342.196-.512.294-.572.437s.003.386.127.872c.453 1.77-.646 3.631-2.402 4.111-.47.129-.704.193-.797.316S1 8.222 1 8.617v1.766c0 .395 0 .593.093.715.093.123.327.188.797.316 1.755.48 2.854 2.342 2.401 4.11-.125.487-.187.73-.127.873s.23.24.571.437l1.552.894c.335.193.503.29.653.27.15-.021.32-.193.66-.536a3.39 3.39 0 0 1 4.802 0c.34.343.509.515.66.535.15.02.317-.076.652-.269l1.552-.894c.342-.196.512-.294.572-.437s-.003-.386-.128-.873c-.453-1.768.645-3.63 2.4-4.11"/></g><g filter="url(#c)"><path fill={color1 ? color1 : "#2CD7A4"} fill-opacity=".5" d="M22.11 16.414c.47-.129.704-.193.797-.316.093-.122.093-.32.093-.715v-1.766c0-.395 0-.593-.093-.715-.093-.123-.327-.187-.797-.316-1.755-.48-2.854-2.341-2.401-4.11.125-.487.187-.73.127-.873-.06-.142-.23-.24-.571-.437l-1.553-.894c-.334-.193-.502-.29-.652-.27-.15.021-.32.193-.66.536a3.387 3.387 0 0 1-4.8 0c-.338-.343-.508-.515-.658-.535s-.318.076-.653.269l-1.552.894c-.342.196-.512.294-.572.437s.003.386.127.873c.453 1.768-.646 3.63-2.402 4.11-.47.129-.704.193-.797.316s-.093.32-.093.715v1.766c0 .395 0 .593.093.715.093.123.327.188.797.316 1.755.48 2.854 2.342 2.401 4.11-.125.487-.187.73-.127.873s.23.24.571.437l1.553.894c.335.193.502.29.652.27.15-.021.32-.193.66-.536a3.39 3.39 0 0 1 4.802 0c.34.343.509.515.66.535.15.02.317-.076.652-.269l1.552-.894c.342-.196.512-.294.572-.437s-.003-.386-.128-.873c-.453-1.768.645-3.63 2.4-4.11"/></g></g><defs><filter id="b"   x="-.9" y="-.9" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_38_822" stdDeviation=".95"/></filter><filter id="c"   x="4.1" y="5.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation=".25"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_38_822"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_38_822" result="shape"/><feGaussianBlur result="effect2_foregroundBlur_38_822" stdDeviation=".45"/></filter><clipPath id="a"><path fill={color2 ? color2 : "#fff"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default DevelopmentIntello;
  