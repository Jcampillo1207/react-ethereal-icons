
import React from 'react';

/**
 * @component
 * @name FingerPointingRight2
 * @description Automatically generated SVG icon component for FingerPointingRight2.
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

interface FingerPointingRight2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FingerPointingRight2: React.FC<FingerPointingRight2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9.737 7h3.684m0 0H20c1.017 0 2 .946 2 1.977S21.017 11 20 11h-5l-.871 3.126c-.305 2.057-.457 3.086-.885 3.81C12.536 19.133 11.474 20 9.923 20c-1.08 0-1.806-.27-3.753-.928-1.236-.418-1.854-.627-2.343-.967a4.26 4.26 0 0 1-1.663-2.338C2 15.189 2 14.529 2 13.209v-1.498c0-1.904 0-2.856.353-3.673.159-.369.369-.713.624-1.023.563-.685 1.403-1.11 3.083-1.962 1.363-.69 2.044-1.035 2.75-1.052.319-.008.637.034.943.122.68.197 1.252.706 2.399 1.722z"/></svg>
);

export default FingerPointingRight2;
  