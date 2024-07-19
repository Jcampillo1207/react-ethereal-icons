
import React from 'react';

/**
 * @component
 * @name Eye3
 * @description Automatically generated SVG icon component for Eye3.
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

interface Eye3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye3: React.FC<Eye3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 6.286c-2.873 0-5.072 1.155-6.667 2.517M12 6.286V4m0 2.286c2.873 0 5.072 1.155 6.667 2.517m-13.334 0C3.043 10.759 2 13.143 2 13.143S5 20 12 20s10-6.857 10-6.857-1.043-2.384-3.333-4.34m-13.334 0L3.111 6.517m15.556 2.286 2.222-2.286m-6.667 6.626c0 1.262-.995 2.286-2.222 2.286s-2.222-1.024-2.222-2.286.995-2.286 2.222-2.286 2.222 1.024 2.222 2.286"/></svg>
);

export default Eye3;
  