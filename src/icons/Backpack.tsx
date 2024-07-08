
import React from 'react';

interface BackpackProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Backpack: React.FC<BackpackProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M3 9.5A4.5 4.5 0 0 1 7.5 5h9A4.5 4.5 0 0 1 21 9.5v11.25A2.25 2.25 0 0 1 18.75 23H5.25A2.25 2.25 0 0 1 3 20.75z"/><path stroke="#61FFFF" stroke-linecap="round" stroke-linejoin="round" stroke- d="M8 10h8M8 22v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5m-8 0h8m-8 0v-3h8v3M9 5V3.5c0-.398.21-.78.586-1.06C9.96 2.157 10.47 2 11 2h2c.53 0 1.04.158 1.414.44.375.28.586.662.586 1.06V5" opacity=".5"/></svg>
);

export default Backpack;
  