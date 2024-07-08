
import React from 'react';

interface PillsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Pills: React.FC<PillsProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#B0FFFF'} d="M7 1a4 4 0 0 1 4 4v3.5H3V5a4 4 0 0 1 4-4M17 23a4 4 0 0 1-4-4v-3.5h8V19a4 4 0 0 1-4 4" opacity=".5"/><path fill={color2 ? color2 : '#735CFF'} d="M3 12a4 4 0 0 0 8 0V8.5H3zM21 12a4 4 0 0 0-8 0v3.5h8z"/></svg>
);

export default Pills;
  