
import React from 'react';

/**
 * @component
 * @name RunningShoes
 * @description Automatically generated SVG icon component for RunningShoes.
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

interface RunningShoesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const RunningShoes: React.FC<RunningShoesProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M19.101 18H7.963c-2.934 0-4.4 0-5.295-1.117-1.697-2.12.237-7.76 1.408-9.883.397 2.4 4.486 2.333 5.975 2-.992-1.999.332-2.666.994-3h.002c2.953 3.5 9.268 5.404 10.815 9.219.669 1.648-1.236 2.781-2.76 2.781"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linejoin="round" stroke- d="M2 14c4.165 1.43 6.731 1.844 10.022.804.997-.315 1.495-.473 1.806-.452.31.022.945.317 2.213.909 1.583.738 3.756 1.163 5.959.097"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M13.5 9.5 15 8M15.5 11 17 9.5"/></svg>
);

export default RunningShoes;
  