
import React from 'react';

/**
 * @component
 * @name User4Check
 * @description Automatically generated SVG icon component for User4Check.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface User4CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User4Check: React.FC<User4CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m15.243 4.757-.707.707zm-8.486 8.486.707-.707zm0-8.486.707.707zM2 21a1 1 0 1 0 2 0zm14.872-4.542a1 1 0 1 0 1.777-.916zm-1.165 1.835a1 1 0 0 0-1.414 1.414zM17 21l-.707.707a1 1 0 0 0 1.414 0zm4.707-3.293a1 1 0 0 0-1.414-1.414zM6.05 13.95a7 7 0 0 0 9.9 0l-1.414-1.414a5 5 0 0 1-7.072 0zm1.414-8.486a5 5 0 0 1 7.072 0L15.95 4.05a7 7 0 0 0-9.9 0zm-1.32 6.882c-2.133 1.409-3.152 3.63-3.645 5.39a14 14 0 0 0-.49 2.98 8 8 0 0 0-.009.275v.008L3 21h1v.001-.006a3 3 0 0 1 .006-.183 12.07 12.07 0 0 1 .419-2.536c.431-1.54 1.26-3.23 2.822-4.261zM6.05 4.05a7 7 0 0 0-.071 9.827l1.434-1.394a5 5 0 0 1 .051-7.019zm-.071 9.827.071.073 1.414-1.414-.051-.053zm8.774.138c.952.629 1.632 1.5 2.119 2.443l1.777-.916c-.602-1.169-1.49-2.335-2.794-3.196zm1.197-.065.071-.073-1.434-1.394-.051.053zm.071-.073a7 7 0 0 0-.071-9.827l-1.414 1.414a5 5 0 0 1 .051 7.02zm-1.728 5.83 2 2 1.414-1.414-2-2zm3.414 2 4-4-1.414-1.414-4 4z"/></svg>
);

export default User4Check;
  