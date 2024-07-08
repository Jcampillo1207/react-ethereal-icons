
import React from 'react';

interface BadgeEuroSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BadgeEuroSign: React.FC<BadgeEuroSignProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M13.22 7.16A5 5 0 0 0 7.061 11H7a1 1 0 1 0 0 2h.061a5 5 0 0 0 8.699 2.25 1 1 0 1 0-1.52-1.3A3 3 0 0 1 9.132 13H12a1 1 0 1 0 0-2H9.132a3 3 0 0 1 3.584-1.903 3 3 0 0 1 1.524.953 1 1 0 1 0 1.52-1.3 5 5 0 0 0-2.54-1.589" clip-rule="evenodd"/><path fill={color2 ? color2 : '#61FFFF'} d="M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705" opacity=".5"/></svg>
);

export default BadgeEuroSign;
  