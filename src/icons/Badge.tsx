
import React from 'react';

interface BadgeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M2.953 7.947a4.202 4.202 0 0 1 5.018-5.01 4.2 4.2 0 0 1 7.075 0 4.197 4.197 0 0 1 5.017 5.02 4.2 4.2 0 0 1 0 7.078 4.2 4.2 0 0 1-5.007 5.02 4.2 4.2 0 0 1-7.085 0 4.198 4.198 0 0 1-5.018-5.01 4.2 4.2 0 0 1 0-7.098"/><path fill={color2 ? color2 : '#61FFFF'} d="M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705" opacity=".5"/></svg>
);

export default Badge;
  