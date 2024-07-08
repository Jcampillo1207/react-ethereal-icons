
import React from 'react';

interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const User: React.FC<UserProps> = ({ size = 24, color, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color || 'currentColor'} d="M12 13.125a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25"/><path fill={color || 'currentColor'} d="M21 22.125a9 9 0 0 0-18 0"/></svg>
);

export default User;
  