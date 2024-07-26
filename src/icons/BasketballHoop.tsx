
import React from 'react';

/**
 * @component
 * @name BasketballHoop
 * @description Automatically generated SVG icon component for BasketballHoop.
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

interface BasketballHoopProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BasketballHoop: React.FC<BasketballHoopProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M4.79 18.978a1 1 0 1 0 .42-1.956zm-1.328-1.676-.64.768zm-.554-.563-.778.629zm0-12.255-.778-.629zm.554-.563.64.769zm17.076 0 .64-.768zm.554.563-.778.629zm0 12.255.777.629zm-.554.563.64.768zm-1.748-.28a1 1 0 1 0 .42 1.956zM6 11a1 1 0 1 0 0 2zm1.508 10.129a1 1 0 1 0 1.984-.258zM18 13a1 1 0 1 0 0-2zm-3.492 7.871a1 1 0 0 0 1.984.258zM11 21a1 1 0 1 0 2 0zM7 8.97a1 1 0 1 0 2 .06zm8 .06a1 1 0 1 0 2-.06zm-9.79 7.992c-.512-.11-.845-.27-1.108-.489l-1.28 1.537c.57.475 1.224.748 1.968.908zm-1.108-.489a3 3 0 0 1-.417-.423L2.13 17.368q.313.385.692.702zm-.416-.423c-.287-.354-.476-.838-.58-1.72C3.003 13.487 3 12.304 3 10.612H1c0 1.644-.002 2.963.12 4.01.124 1.066.389 1.977 1.01 2.746zM3 10.612c0-1.693.002-2.875.107-3.778.103-.883.292-1.367.579-1.721L2.13 3.855c-.621.77-.886 1.68-1.01 2.747C.998 7.648 1 8.968 1 10.612zm.686-5.499a3 3 0 0 1 .416-.423l-1.28-1.537a5 5 0 0 0-.692.702zm.416-.423c.346-.288.817-.478 1.68-.582C6.67 4.002 7.832 4 9.5 4V2c-1.619 0-2.922-.002-3.956.122-1.057.127-1.96.397-2.722 1.031zM9.5 4h5V2h-5zm5 0c1.669 0 2.83.002 3.718.108.863.104 1.334.294 1.68.582l1.28-1.537c-.762-.634-1.665-.904-2.722-1.03C17.422 1.997 16.119 2 14.5 2zm5.398.69q.228.19.416.423l1.556-1.258a5 5 0 0 0-.692-.702zm.416.423c.287.354.477.838.58 1.72.104.904.106 2.086.106 3.779h2c0-1.644.002-2.964-.12-4.01-.124-1.067-.389-1.978-1.01-2.747zM21 10.612c0 1.692-.002 2.875-.107 3.778-.102.882-.292 1.366-.579 1.72l1.556 1.258c.621-.769.886-1.68 1.01-2.747.122-1.046.12-2.365.12-4.01zm-.686 5.498a3 3 0 0 1-.416.424l1.28 1.536q.38-.317.691-.702zm-.416.423c-.263.22-.596.38-1.108.49l.42 1.955c.744-.16 1.397-.433 1.967-.908zM6 13h1.333v-2H6zm.342-.871 1.166 9 1.984-.258-1.167-9zm.991.871H12v-2H7.333zM18 11h-1.333v2H18zm-2.325.871-1.167 9 1.984.258 1.166-9zm.992-.871H12v2h4.667zM11 12v9h2v-9zM9 9.03c.011-.394.08-.597.132-.697a.35.35 0 0 1 .176-.166c.11-.054.292-.104.595-.134.302-.03.655-.033 1.095-.033V6c-.429 0-.876.002-1.29.043-.413.04-.861.124-1.276.326a2.35 2.35 0 0 0-1.066 1.026c-.244.459-.348.993-.366 1.575zM10.998 8h2.004V6h-2.004zm2.004 0c.44 0 .793.004 1.095.033.303.03.485.08.595.134a.35.35 0 0 1 .176.166c.053.1.12.303.133.697L17 8.97c-.018-.582-.122-1.116-.366-1.575a2.35 2.35 0 0 0-1.066-1.026c-.415-.202-.863-.286-1.276-.326S13.431 6 13.002 6zM8 16.5h8v-2H8zm.444 3.5h7.112v-2H8.444z"/></svg>
);

export default BasketballHoop;
  