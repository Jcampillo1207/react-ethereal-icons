
import React from 'react';

/**
 * @component
 * @name User2Check
 * @description Automatically generated SVG icon component for User2Check.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface User2CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User2Check: React.FC<User2CheckProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m14.536 4.464-.708.708zm-7.072 7.072.708-.708zm0-7.072.708.708zM2.072 20.63a1 1 0 0 0 1.856.742zM13.68 17.42a1 1 0 0 0 .64-1.895zm2.027.873a1 1 0 0 0-1.414 1.414zM17 21l-.707.707a1 1 0 0 0 1.414 0zm4.707-3.293a1 1 0 0 0-1.414-1.414zm-6.464-5.464a6 6 0 0 0 0-8.486l-1.415 1.415a4 4 0 0 1 0 5.656zm-8.486 0a6 6 0 0 0 8.486 0l-1.415-1.415a4 4 0 0 1-5.656 0zm0-8.486a6 6 0 0 0 0 8.486l1.415-1.415a4 4 0 0 1 0-5.656zm1.415 1.415a4 4 0 0 1 5.656 0l1.415-1.415a6 6 0 0 0-8.486 0zM11 15c-3.312 0-5.556 1.391-6.957 2.793a10 10 0 0 0-1.494 1.911 8 8 0 0 0-.44.837l-.025.058-.008.018-.003.007v.003h-.001c0 .001 0 .002.928.373l.928.372v.002l-.001.001.001-.003.011-.025q.017-.04.058-.125c.055-.113.143-.282.267-.489.248-.414.638-.97 1.193-1.526C6.556 18.11 8.312 17 11 17zm0 2c1.032 0 1.92.163 2.68.42l.64-1.895A10.3 10.3 0 0 0 11 15zm3.293 2.707 2 2 1.414-1.414-2-2zm3.414 2 4-4-1.414-1.414-4 4z"/></svg>
);

export default User2Check;
  