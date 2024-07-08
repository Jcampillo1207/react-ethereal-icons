
import React from 'react';

interface Squares4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Squares4: React.FC<Squares4Props> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><rect   x="8" y="1" fill={color1 ? color1 : '#735CFF'} rx="2"/><rect   x="1" y="8" fill={color2 ? color2 : '#B0FFFF'} opacity=".5" rx="2"/></svg>
);

export default Squares4;
  