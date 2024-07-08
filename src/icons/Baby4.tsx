
import React from 'react';

interface Baby4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Baby4: React.FC<Baby4Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14 8.121a2.88 2.88 0 0 1-4.142 0 3.05 3.05 0 0 1 0-4.242A2.89 2.89 0 0 1 11.928 3M9 12h.01M15 12h.01M10 15s0 2 2 2 2-2 2-2m4.364 3.364A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"/></svg>
);

export default Baby4;
  