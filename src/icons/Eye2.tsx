
import React from 'react';

interface Eye2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye2: React.FC<Eye2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M3 9s2.7-4 9-4 9 4 9 4M3 14s2.7-6 9-6 9 6 9 6-2.7 6-9 6-9-6-9-6m11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>
);

export default Eye2;
  