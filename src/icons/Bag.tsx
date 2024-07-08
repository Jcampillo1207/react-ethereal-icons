
import React from 'react';

interface BagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Bag: React.FC<BagProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M18 7H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/><path stroke="#61FFFF" stroke-linecap="round" stroke- d="M14 8V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" opacity=".5"/></svg>
);

export default Bag;
  