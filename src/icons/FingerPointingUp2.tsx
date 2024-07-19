
import React from 'react';

/**
 * @component
 * @name FingerPointingUp2
 * @description Automatically generated SVG icon component for FingerPointingUp2.
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

interface FingerPointingUp2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FingerPointingUp2: React.FC<FingerPointingUp2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M7 14.263V10.58m0 0V4c0-1.017.946-2 1.977-2S11 2.983 11 4v5l3.126.871c2.057.305 3.086.457 3.81.885 1.197.708 2.064 1.77 2.064 3.322 0 1.08-.27 1.805-.928 3.752-.418 1.236-.627 1.854-.967 2.343a4.26 4.26 0 0 1-2.338 1.663c-.578.164-1.238.164-2.558.164h-1.498c-1.904 0-2.856 0-3.673-.353-.369-.159-.713-.369-1.023-.624-.685-.563-1.11-1.403-1.962-3.083-.69-1.363-1.035-2.044-1.052-2.75a3.1 3.1 0 0 1 .122-.943c.197-.68.706-1.252 1.722-2.399z"/></svg>
);

export default FingerPointingUp2;
  