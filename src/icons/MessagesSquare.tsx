
import React from 'react';

interface MessagesSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MessagesSquare: React.FC<MessagesSquareProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M3 1h11c1.105 0 2 .94 2 2.099v7.346c0 1.159-.895 2.098-2 2.098H5.828c-.53 0-1.039.222-1.414.615l-2.56 2.687c-.315.33-.854.097-.854-.37V3.098C1 1.939 1.895 1 3 1"/><path fill={color2 ? color2 : '#61FFFF'} d="M21 8H10c-1.105 0-2 .94-2 2.099v7.346c0 1.159.895 2.098 2 2.098h8.172c.53 0 1.039.222 1.414.615l2.56 2.687c.315.33.854.097.854-.37V10.098C23 8.939 22.105 8 21 8" opacity=".5"/></svg>
);

export default MessagesSquare;
  