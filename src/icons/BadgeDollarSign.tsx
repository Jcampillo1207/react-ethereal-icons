
import React from 'react';

interface BadgeDollarSignProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BadgeDollarSign: React.FC<BadgeDollarSignProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M9.75 9.25h1v1.5h-1c-.3 0-.568-.103-.75-.259-.178-.152-.25-.333-.25-.491s.072-.338.25-.491a1.16 1.16 0 0 1 .75-.259M12.25 13.75v-1.5h1c.3 0 .568.103.75.259.178.152.25.333.25.491s-.072.338-.25.491a1.16 1.16 0 0 1-.75.259z"/><path fill={color2 ? color2 : '#735CFF'} fill-rule="evenodd" d="M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M12.25 7a.75.75 0 0 0-1.5 0v.75h-1c-.629 0-1.25.213-1.726.62-.478.41-.774.993-.774 1.63s.296 1.22.774 1.63c.475.407 1.097.62 1.726.62h1v1.5H8a.75.75 0 0 0 0 1.5h2.75V16a.75.75 0 0 0 1.5 0v-.75h1c.629 0 1.25-.213 1.726-.62.478-.41.774-.993.774-1.63s-.296-1.22-.774-1.63a2.66 2.66 0 0 0-1.726-.62h-1v-1.5H15a.75.75 0 0 0 0-1.5h-2.75z" clip-rule="evenodd"/><path fill={color1 ? color1 : '#61FFFF'} d="M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705" opacity=".5"/></svg>
);

export default BadgeDollarSign;
  