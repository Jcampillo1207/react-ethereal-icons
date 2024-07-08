
import React from 'react';

interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User: React.FC<UserProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M12 10C3.415 10 1.53 17.919 1.116 21.395c-.059.5-.089.748.013.991.08.19.25.383.43.484.229.13.503.13 1.051.13h18.78c.548 0 .822 0 1.051-.13.18-.101.35-.294.43-.484.102-.243.072-.492.013-.99C22.47 17.918 20.585 10 12 10"/><ellipse cx="12" cy="7.5" fill={color2 ? color2 : '#61FFFF'} opacity=".5" rx="7" ry="6.5"/></svg>
);

export default User;
  