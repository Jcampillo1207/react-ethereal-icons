
import React from 'react';

interface Contrast4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Contrast4: React.FC<Contrast4Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M17.198 12a6 6 0 1 0-10.396 0m10.396 0a6 6 0 1 1-10.396 0m10.396 0a6 6 0 0 0-10.396 0"/></svg>
);

export default Contrast4;
  