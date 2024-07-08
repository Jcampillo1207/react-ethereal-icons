
import React from 'react';

interface CreditCard2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CreditCard2: React.FC<CreditCard2Props> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2"/><g fill="#61FFFF" opacity=".5"><path d="M1 10V6h22v4zM5 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></g></svg>
);

export default CreditCard2;
  