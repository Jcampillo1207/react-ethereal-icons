
import React from 'react';

interface Contrast3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Contrast3: React.FC<Contrast3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M18.364 5.636A8.97 8.97 0 0 0 11.998 3v18a8.97 8.97 0 0 0 6.366-2.636 8.999 8.999 0 0 0 0-12.728M5.636 18.364A9 9 0 0 1 9 3.512v16.976a9 9 0 0 1-3.364-2.124"/></svg>
);

export default Contrast3;
  