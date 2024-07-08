
import React from 'react';

/**
 * @component
 * @name User1Check
 * @description Automatically generated SVG icon component for User1Check.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface User1CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User1Check: React.FC<User1CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m13.536 4.464-.708.708zm-7.072 7.072.708-.708zm0-7.072.708.708zm9.243 13.829a1 1 0 0 0-1.414 1.414zM17 21l-.707.707a1 1 0 0 0 1.414 0zm4.707-3.293a1 1 0 0 0-1.414-1.414zm-19.7 3.417a1 1 0 1 0 1.985-.248zm13.232-5a1 1 0 0 0 1.523-1.297zm-.996-3.881a6 6 0 0 0 0-8.486l-1.415 1.415a4 4 0 0 1 0 5.656zm-8.486 0a6 6 0 0 0 8.486 0l-1.415-1.415a4 4 0 0 1-5.656 0zm0-8.486a6 6 0 0 0 0 8.486l1.415-1.415a4 4 0 0 1 0-5.656zm1.415 1.415a4 4 0 0 1 5.656 0l1.415-1.415a6 6 0 0 0-8.486 0zm7.12 14.535 2 2 1.415-1.414-2-2zm3.415 2 4-4-1.414-1.414-4 4zM10 12c-2.173 0-3.826.546-5.057 1.441-1.226.892-1.953 2.071-2.38 3.208-.423 1.13-.56 2.243-.593 3.06A11 11 0 0 0 1.995 21l.011.11.001.008v.004L3 21a121 121 0 0 1 .993-.122l-.001-.01-.005-.05-.016-.215a9 9 0 0 1-.003-.811c.028-.684.142-1.571.468-2.44.324-.864.847-1.685 1.683-2.293C6.951 14.454 8.173 14 10 14zm0 2c2.677 0 4.26.974 5.239 2.124l1.523-1.297C15.39 13.217 13.244 12 10 12z"/></svg>
);

export default User1Check;
  