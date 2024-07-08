
import React from 'react';

interface ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Contrast: React.FC<ContrastProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><circle cx="10" cy="10" r="9" fill={color1 ? color1 : '#735CFF'}/><circle cx="18" cy="18" r="5" fill={color2 ? color2 : '#61FFFF'} opacity=".5"/></svg>
);

export default Contrast;
  