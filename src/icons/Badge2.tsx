
import React from 'react';

interface Badge2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2: React.FC<Badge2Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M16.05 4.45 12 3 7.95 4.45 3.9 3.9l.55 4.05L3 12l1.45 4.05-.55 4.05 4.05-.55L12 21l4.05-1.45 4.05.55-.55-4.05L21 12l-1.45-4.05.55-4.05z"/></svg>
);

export default Badge2;
  