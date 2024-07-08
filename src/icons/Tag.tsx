
import React from 'react';

interface TagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M10.673 2.67A2.29 2.29 0 0 0 9.056 2H3.143A1.143 1.143 0 0 0 2 3.143v5.913c0 .607.241 1.188.67 1.617l6.521 6.52a2.774 2.774 0 0 0 3.91 0l4.093-4.092a2.774 2.774 0 0 0 0-3.91zM8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path stroke="#61FFFF" stroke-linecap="round" stroke- d="M17.5 14.5c1.907 1.126 2.252 1.619 3.5 3.5m1 4-1.315-.564A12.47 12.47 0 0 1 13.5 13" opacity=".5"/></svg>
);

export default Tag;
  