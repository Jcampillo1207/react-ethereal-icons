
import React from 'react';

interface Badge4CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge4Check: React.FC<Badge4CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m9 12 2 2 4-4M3 8v8l3.5 3.5L12 21l5.5-1.5L21 16V8l-3.5-3.5L12 3 6.5 4.5z"/></svg>
);

export default Badge4Check;
  