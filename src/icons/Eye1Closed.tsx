
import React from 'react';

interface Eye1ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye1Closed: React.FC<Eye1ClosedProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke={color ? color : "currentColor"}><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="m4 4 3.29 3.29m2.589 2.589a3 3 0 0 0 4.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-2.59-2.59m6.832 6.832 2.59 2.59M20 20l-3.29-3.29M7.29 7.29C4.325 9.051 3 12 3 12s2.7 6 9 6a9.1 9.1 0 0 0 4.71-1.29M18.864 15C20.325 13.5 21 12 21 12s-2.7-6-9-6c-.759 0-1.465.087-2.121.24"/></svg>
);

export default Eye1Closed;
  