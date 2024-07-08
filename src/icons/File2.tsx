
import React from 'react';

interface File2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const File2: React.FC<File2Props> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M16 1H5.25c-.597 0-1.169.232-1.591.644A2.17 2.17 0 0 0 3 3.2v17.6c0 .584.237 1.143.659 1.556.422.412.994.644 1.591.644h13.5c.597 0 1.169-.232 1.591-.644S21 21.383 21 20.8V6z"/><g fill="#61FFFF" opacity=".5"><path d="M14 1v4.667A2.333 2.333 0 0 0 16.333 8H21"/><path d="m21 6-5-5h-2v4.667A2.333 2.333 0 0 0 16.333 8H21z"/></g></svg>
);

export default File2;
  