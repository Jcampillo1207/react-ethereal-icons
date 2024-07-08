
import React from 'react';

interface Badge2EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2Euro: React.FC<Badge2EuroProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M16 14.828c-1.601 1.563-4.198 1.563-5.799 0A3.94 3.94 0 0 1 9 12m0 0c0-1.024.4-2.047 1.201-2.828 1.601-1.563 4.198-1.563 5.799 0M9 12H7m2 0h4m-1-9 4.05 1.45 4.05-.55-.55 4.05L21 12l-1.45 4.05.55 4.05-4.05-.55L12 21l-4.05-1.45-4.05.55.55-4.05L3 12l1.45-4.05L3.9 3.9l4.05.55z"/></svg>
);

export default Badge2Euro;
  