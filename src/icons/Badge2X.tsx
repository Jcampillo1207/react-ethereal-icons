
import React from 'react';

interface Badge2XProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge2X: React.FC<Badge2XProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M9 9.172 11.828 12m0 0 2.829 2.828M11.828 12l2.829-2.828M11.828 12 9 14.828M12 3l4.05 1.45 4.05-.55-.55 4.05L21 12l-1.45 4.05.55 4.05-4.05-.55L12 21l-4.05-1.45-4.05.55.55-4.05L3 12l1.45-4.05L3.9 3.9l4.05.55z"/></svg>
);

export default Badge2X;
  