
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
 * @author José Campillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
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
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m12.92 3.302-.707.707zM6.636 9.587l.707-.707zm0-6.285.707.707zM1 22a1 1 0 1 0 2 0zm13.71-4.88a1 1 0 1 0 1.475-1.351zm1.33 1.95a1 1 0 1 0-1.414 1.415zM17.556 22l-.708.707a1 1 0 0 0 1.415 0zm5.151-3.737a1 1 0 0 0-1.414-1.415zm-9.08-7.969a5.444 5.444 0 0 0 0-7.7L12.214 4.01a3.445 3.445 0 0 1 0 4.871zm-7.699 0a5.444 5.444 0 0 0 7.7 0L12.213 8.88a3.444 3.444 0 0 1-4.87 0zm0-7.7a5.444 5.444 0 0 0 0 7.7L7.342 8.88a3.444 3.444 0 0 1 0-4.871zM7.342 4.01a3.444 3.444 0 0 1 4.871 0l1.415-1.414a5.444 5.444 0 0 0-7.7 0zm2.436 9.213c-2.12 0-3.776.533-5.051 1.383-1.27.847-2.104 1.968-2.65 3.059a10.6 10.6 0 0 0-.942 2.956 11 11 0 0 0-.133 1.26L1 21.985v.012C1 22 1 22 2 22h1v.002-.008l.001-.048q.002-.068.012-.209a9 9 0 0 1 .095-.788 8.6 8.6 0 0 1 .759-2.39c.426-.854 1.05-1.677 1.969-2.29.912-.607 2.172-1.047 3.942-1.047zm0 2c2.478 0 3.982.861 4.933 1.898l1.474-1.351c-1.348-1.47-3.396-2.547-6.407-2.547zm4.848 5.263 2.222 2.222 1.415-1.414-2.223-2.222zm3.637 2.222 4.444-4.444-1.414-1.415-4.445 4.445z"/></svg>
);

export default User3Check;
  