
import React from 'react';

interface Badge3HelpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Help: React.FC<Badge3HelpProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M10 10a2 2 0 1 1 2 2v2m0 3h.01M21 12l-2.5-6.5L12 3 5.5 5.5 3 12l2.5 6.5L12 21l6.5-2.5z"/></svg>
);

export default Badge3Help;
  