
import React from 'react';

interface User3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User3: React.FC<User3Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M5 21s0-7 7-7 7 7 7 7M14.828 9.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656Z"/></svg>
);

export default User3;
  