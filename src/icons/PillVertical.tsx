
import React from 'react';

interface PillVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const PillVertical: React.FC<PillVerticalProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M6 7a6 6 0 1 1 12 0v5H6z"/><path fill={color2 ? color2 : '#B0FFFF'} d="M18 17a6 6 0 0 1-12 0v-5h12z" opacity=".5"/></svg>
);

export default PillVertical;
  