
import React from 'react';

interface Accesibility4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility4: React.FC<Accesibility4Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M20 21v-6H10l7-7-4-3-4 3m2.536 11.535A5 5 0 1 1 8 11m13-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
);

export default Accesibility4;
  