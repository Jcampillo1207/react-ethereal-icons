
import React from 'react';

interface BadgeXProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BadgeX: React.FC<BadgeXProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921m13.074 1.044a1.5 1.5 0 0 0-2.121 0L11.5 9.379 9.025 6.904a1.5 1.5 0 0 0-2.121 2.121L9.379 11.5l-2.475 2.475a1.5 1.5 0 1 0 2.121 2.121l2.475-2.475 2.475 2.475a1.5 1.5 0 1 0 2.121-2.121L13.621 11.5l2.475-2.475a1.5 1.5 0 0 0 0-2.121" clip-rule="evenodd"/><path fill={color2 ? color2 : '#61FFFF'} d="M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705" opacity=".5"/></svg>
);

export default BadgeX;
  