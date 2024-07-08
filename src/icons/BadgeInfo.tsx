
import React from 'react';

interface BadgeInfoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BadgeInfo: React.FC<BadgeInfoProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M19.978 17.14a4.2 4.2 0 0 0 .069-2.087 4.2 4.2 0 0 0 0-7.098 4.202 4.202 0 0 0-5.018-5.01 4.2 4.2 0 0 0-5.563-1.427 4.2 4.2 0 0 0-1.522 1.428 4.197 4.197 0 0 0-5.007 5.02 4.2 4.2 0 0 0 0 7.077 4.202 4.202 0 0 0 5.017 5.02 4.2 4.2 0 0 0 7.075 0 4.2 4.2 0 0 0 4.95-2.922M11.5 17a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 1.5 1.5m0-11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clip-rule="evenodd"/><path fill={color2 ? color2 : '#61FFFF'} d="M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705" opacity=".5"/></svg>
);

export default BadgeInfo;
  