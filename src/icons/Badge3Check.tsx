
import React from 'react';

interface Badge3CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Check: React.FC<Badge3CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"}  d="m21 12 .7.27.104-.27-.104-.27zm-2.5-6.5.7-.27-.12-.31-.31-.12zM12 3l.27-.7-.27-.104-.27.104zM5.5 5.5l-.27-.7-.31.12-.12.31zM3 12l-.7-.27-.104.27.104.27zm2.5 6.5-.7.27.12.31.31.12zM12 21l-.27.7.27.104.27-.104zm6.5-2.5.27.7.31-.12.12-.31zm-8.97-7.03a.75.75 0 0 0-1.06 1.06zM11 14l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zm6.17 1.2-2.5-6.5-1.4.54 2.5 6.5zM18.77 4.8l-6.5-2.5-.54 1.4 6.5 2.5zm-7.04-2.5-6.5 2.5.54 1.4 6.5-2.5zM4.8 5.23l-2.5 6.5 1.4.54 2.5-6.5zm-2.5 7.04 2.5 6.5 1.4-.54-2.5-6.5zm2.93 6.93 6.5 2.5.54-1.4-6.5-2.5zm7.04 2.5 6.5-2.5-.54-1.4-6.5 2.5zm6.93-2.93 2.5-6.5-1.4-.54-2.5 6.5zM8.47 12.53l2 2 1.06-1.06-2-2zm3.06 2 4-4-1.06-1.06-4 4z"/></svg>
);

export default Badge3Check;
  