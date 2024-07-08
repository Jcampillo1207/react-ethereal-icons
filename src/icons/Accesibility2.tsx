
import React from 'react';

interface Accesibility2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility2: React.FC<Accesibility2Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M14.584 18A5 5 0 1 1 8 11.416M19 21v-6h-7V8m1-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
);

export default Accesibility2;
  