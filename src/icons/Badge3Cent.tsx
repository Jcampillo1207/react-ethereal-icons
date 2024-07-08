
import React from 'react';

interface Badge3CentProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Cent: React.FC<Badge3CentProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 15.999a4.14 4.14 0 0 1-2.799-1.17 3.93 3.93 0 0 1 0-5.657A4.14 4.14 0 0 1 12 8.002m0 7.997a4.14 4.14 0 0 0 3-1.17m-3 1.17V8M12 16V17m0-8.999a4.14 4.14 0 0 1 3 1.17m-3-1.17V7m9 5-2.5-6.5L12 3 5.5 5.5 3 12l2.5 6.5L12 21l6.5-2.5z"/></svg>
);

export default Badge3Cent;
  