
import React from 'react';

interface Contrast2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Contrast2: React.FC<Contrast2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M8 6.083a6 6 0 0 0 0 11.833m11.243-1.673a6 6 0 1 0-8.485-8.486 6 6 0 0 0 8.485 8.486"/></svg>
);

export default Contrast2;
  