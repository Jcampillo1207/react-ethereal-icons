
import React from 'react';

interface Badge4XProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge4X: React.FC<Badge4XProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9 9.172 11.828 12m0 0 2.829 2.828M11.828 12l2.829-2.828M11.828 12 9 14.828M3 8v8l3.5 3.5L12 21l5.5-1.5L21 16V8l-3.5-3.5L12 3 6.5 4.5z"/></svg>
);

export default Badge4X;
  