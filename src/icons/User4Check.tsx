
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
 * @author José Campillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
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
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m15.603 3.953-.707.707zM6.175 13.38l.707-.707zm0-9.428.707.707zM1 22a1 1 0 1 0 2 0zm16.512-5.097a1 1 0 0 0 1.777-.917zM16.04 19.07a1 1 0 1 0-1.414 1.414zM17.556 22l-.708.707a1 1 0 0 0 1.415 0zm5.151-3.737a1 1 0 0 0-1.414-1.415zm-17.24-4.175a7.667 7.667 0 0 0 10.843 0l-1.414-1.414a5.667 5.667 0 0 1-8.014 0zM6.883 4.66a5.667 5.667 0 0 1 8.014 0l1.414-1.414a7.667 7.667 0 0 0-10.842 0zm-1.327 7.817c-2.338 1.545-3.46 3.983-4.005 5.926a15.5 15.5 0 0 0-.54 3.287 9 9 0 0 0-.01.3V22L2 22h1v.001-.007a4 4 0 0 1 .007-.209 13.527 13.527 0 0 1 .47-2.843c.482-1.722 1.413-3.629 3.18-4.796zm-.087-9.231a7.667 7.667 0 0 0-.079 10.762l1.435-1.393a5.667 5.667 0 0 1 .058-7.955zm-.079 10.762.079.08 1.414-1.414-.058-.06zm9.731.138c1.078.711 1.845 1.696 2.392 2.757l1.777-.917c-.663-1.286-1.637-2.565-3.067-3.509zm1.19-.058.078-.08-1.434-1.393-.058.059zm.078-.08a7.667 7.667 0 0 0-.078-10.762L14.896 4.66a5.667 5.667 0 0 1 .058 7.954zm-1.762 6.477 2.222 2.222 1.415-1.414-2.223-2.222zm3.637 2.222 4.444-4.444-1.414-1.415-4.445 4.445z"/></svg>
);

export default User4Check;
  