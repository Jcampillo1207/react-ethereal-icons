
import React from 'react';

interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User: React.FC<UserProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M12 10c-7.71 0-9.475 7.132-9.88 10.4-.06.493-.091.74.01.983.079.19.25.385.43.486.23.131.503.131 1.05.131h16.78c.547 0 .82 0 1.05-.13.18-.102.351-.297.43-.487.101-.244.07-.49.01-.983C21.475 17.132 19.71 10 12 10"/><circle cx="12" cy="8" r="6" fill={color2 ? color2 : '#61FFFF'} opacity=".5"/></svg>
);

export default User;
  