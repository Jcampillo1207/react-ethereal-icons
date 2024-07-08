
import React from 'react';

interface Accesibility3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Accesibility3: React.FC<Accesibility3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M13.584 18A5 5 0 1 1 7 11.416M20.035 21v-6h-7V8l-3 1v6m4-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
);

export default Accesibility3;
  