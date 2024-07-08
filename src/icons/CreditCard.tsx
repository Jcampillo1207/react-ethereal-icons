
import React from 'react';

interface CreditCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const CreditCard: React.FC<CreditCardProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2"/><path fill={color2 ? color2 : '#61FFFF'} d="M1 10V6h22v4z" opacity=".5"/></svg>
);

export default CreditCard;
  