
import React from 'react';

interface Squares2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Squares2: React.FC<Squares2Props> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M14 8H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"/><path fill={color2 ? color2 : '#61FFFF'} d="M21 1H10a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2" opacity=".5"/></svg>
);

export default Squares2;
  