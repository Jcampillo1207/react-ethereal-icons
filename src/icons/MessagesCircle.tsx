
import React from 'react';

interface MessagesCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MessagesCircle: React.FC<MessagesCircleProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M5.472 14.661a7.229 7.229 0 1 0-3.133-3.133l-1.314 3.878a.449.449 0 0 0 .569.57z"/><path fill={color2 ? color2 : '#61FFFF'} d="M18.529 21.661a7.229 7.229 0 1 1 3.132-3.133l1.314 3.878a.449.449 0 0 1-.569.57z" opacity=".5"/></svg>
);

export default MessagesCircle;
  