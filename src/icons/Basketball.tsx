
import React from 'react';

/**
 * @component
 * @name Basketball
 * @description Automatically generated SVG icon component for Basketball.
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

interface BasketballProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Basketball: React.FC<BasketballProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M6.125 5.247a1 1 0 1 0-1.939-.494zM6.566 11l-.795.607zm-1.815 7.214a1 1 0 1 0 1.237 1.572zm15.063-13.46a1 1 0 1 0-1.939.493zM17.434 11l.795.607zm.578 8.786a1 1 0 1 0 1.237-1.572zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zM1.27 12.685C3.76 15.335 7.666 17 12 17v-2c-3.843 0-7.2-1.478-9.27-3.684zM12 17c4.335 0 8.24-1.664 10.73-4.315l-1.46-1.37C19.2 13.523 15.845 15 12 15zM11 2v20h2V2zM4.186 4.753c-.454 1.787-.132 4.603 1.585 6.854l1.59-1.214C6.026 8.643 5.816 6.46 6.125 5.247zm1.585 6.854c.747.978 1.246 2.007 1.229 3.04-.017.978-.505 2.195-2.249 3.567l1.237 1.572c2.069-1.628 2.982-3.36 3.011-5.106.029-1.691-.78-3.162-1.638-4.287zm12.104-6.36c.309 1.213.099 3.397-1.236 5.146l1.59 1.214c1.717-2.25 2.04-5.067 1.585-6.854zm-1.236 5.146c-.858 1.125-1.667 2.596-1.638 4.288.03 1.745.942 3.477 3.011 5.105l1.237-1.572c-1.744-1.372-2.232-2.589-2.248-3.567-.018-1.033.481-2.062 1.228-3.04z"/></svg>
);

export default Basketball;
  