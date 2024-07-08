
import React from 'react';

interface Badge4EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge4Euro: React.FC<Badge4EuroProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M16 14.828c-1.601 1.563-4.198 1.563-5.799 0A3.94 3.94 0 0 1 9 12m0 0c0-1.024.4-2.047 1.201-2.828 1.601-1.563 4.198-1.563 5.799 0M9 12H7m2 0h4M3 8v8l3.5 3.5L12 21l5.5-1.5L21 16V8l-3.5-3.5L12 3 6.5 4.5z"/></svg>
);

export default Badge4Euro;
  