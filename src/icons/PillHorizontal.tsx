
import React from 'react';

interface PillHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const PillHorizontal: React.FC<PillHorizontalProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M7 18A6 6 0 0 1 7 6h5v12z"/><path fill={color2 ? color2 : '#B0FFFF'} d="M17 6a6 6 0 0 1 0 12h-5V6z" opacity=".5"/></svg>
);

export default PillHorizontal;
  