
import React from 'react';

interface Badge3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3: React.FC<Badge3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18.5 5.5 21 12l-2.5 6.5L12 21l-6.5-2.5L3 12l2.5-6.5L12 3z"/></svg>
);

export default Badge3;
  