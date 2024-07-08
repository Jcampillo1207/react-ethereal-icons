
import React from 'react';

interface IntelloProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Intello: React.FC<IntelloProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#fff'} d="M5.335 23h1.572c.603 0 1.13-.473 1.288-1.153L11.88 6.002C12.465 3.482 10.846 1 8.617 1H5.335C4.598 1 4 1.7 4 2.564v18.872c0 .863.598 1.563 1.335 1.563z"/><path fill={color2 ? color2 : '#4690FF'} d="M16 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg>
);

export default Intello;
  