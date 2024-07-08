
import React from 'react';

/**
 * @component
 * @name HabitalooInvert
 * @description Automatically generated SVG icon component for HabitalooInvert.
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

interface HabitalooInvertProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const HabitalooInvert: React.FC<HabitalooInvertProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#FF5154"} d="M3.004 3.04v16.665a2.04 2.04 0 0 0 2.04 2.039h14.203a2.04 2.04 0 0 0 2.039-2.04v-5.667c0-.54-.215-1.06-.597-1.442l-4.135-4.134a2.04 2.04 0 0 0-2.884 0l-1.25 1.25c-1.285 1.285-3.482.375-3.482-1.441V3.04A2.04 2.04 0 0 0 6.9 1H5.043a2.04 2.04 0 0 0-2.039 2.04"/><path fill={color1 ? color1 : "#EDEDED"} d="M10.391 22.968c-.927 0-1.68-.751-1.68-1.679v-3.455c0-2.963 2.205-5.135 5.097-5.135s5.076 2.172 5.076 5.135v3.455c0 .928-.752 1.679-1.68 1.679z"/></svg>
);

export default HabitalooInvert;
  