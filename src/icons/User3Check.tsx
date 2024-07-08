
import React from 'react';

/**
 * @component
 * @name User3Check
 * @description Automatically generated SVG icon component for User3Check.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface User3CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User3Check: React.FC<User3CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m12.828 4.172-.707.707zM7.172 9.828l.707-.707zm0-5.656.707.707zM2 21a1 1 0 1 0 2 0zm12.366-4.324a1 1 0 0 0 1.474-1.352zm1.341 1.617a1 1 0 0 0-1.414 1.414zM17 21l-.707.707a1 1 0 0 0 1.414 0zm4.707-3.293a1 1 0 0 0-1.414-1.414zm-8.171-7.171a5 5 0 0 0 0-7.072L12.12 4.88a3 3 0 0 1 0 4.242zm-7.072 0a5 5 0 0 0 7.072 0L12.12 9.12a3 3 0 0 1-4.242 0zm0-7.072a5 5 0 0 0 0 7.072L7.88 9.12a3 3 0 0 1 0-4.242zM7.88 4.88a3 3 0 0 1 4.242 0l1.415-1.415a5 5 0 0 0-7.072 0zM10 13c-1.925 0-3.435.484-4.602 1.262-1.16.773-1.92 1.797-2.417 2.79a9.6 9.6 0 0 0-.858 2.69 10 10 0 0 0-.12 1.146L2 20.987v.011C2 21 2 21 3 21h1v.002q0 .002 0 0l.001-.047q.001-.06.01-.184a8 8 0 0 1 .085-.7c.098-.591.293-1.364.673-2.124.379-.756.93-1.482 1.739-2.021C7.31 15.39 8.425 15 10 15zm0 2c2.204 0 3.53.764 4.366 1.676l1.474-1.352C14.607 13.98 12.736 13 10 13zm4.293 4.707 2 2 1.414-1.414-2-2zm3.414 2 4-4-1.414-1.414-4 4z"/></svg>
);

export default User3Check;
  