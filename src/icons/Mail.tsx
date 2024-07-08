
import React from 'react';

interface MailProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Mail: React.FC<MailProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2"/><path fill={color2 ? color2 : '#61FFFF'} d="M3 4h18l-7.452 9.108a2 2 0 0 1-3.096 0z" opacity=".5"/></svg>
);

export default Mail;
  