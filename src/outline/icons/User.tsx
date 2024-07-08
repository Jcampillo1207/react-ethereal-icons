
import React from 'react';

interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const User: React.FC<UserProps> = ({ size = 24, color, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path stroke={color || 'currentColor'} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0 0a8 8 0 0 1 8 8m-8-8a8 8 0 0 0-8 8"/></svg>
);

export default User;
  