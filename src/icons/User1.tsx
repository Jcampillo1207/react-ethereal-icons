
import React from 'react';

interface User1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User1: React.FC<User1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M3 21s0-8 9-8 9 8 9 8m-5.464-9.464a5 5 0 1 0-7.071-7.072 5 5 0 0 0 7.07 7.072Z"/></svg>
);

export default User1;
  