
import React from 'react';

interface Eye2ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye2Closed: React.FC<Eye2ClosedProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   ><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M3 8s.836-1.238 2.663-2.337M21 8s-2.7-4-9-4c-1.575 0-2.924.25-4.063.625M4 4l1.663 1.663m4.775 4.775a3 3 0 1 0 4.124 4.124m-4.124-4.124 4.124 4.124m-4.124-4.124L7.937 7.937m6.625 6.625 2.756 2.756M20 20l-2.682-2.682M5.663 5.663l2.274 2.274m0 0C4.519 9.624 3 13 3 13s2.7 6 9 6c2.198 0 3.958-.73 5.318-1.682m-6.88-10.19A9.4 9.4 0 0 1 12 7c6.3 0 9 6 9 6s-.675 1.5-2.137 3"/></svg>
);

export default Eye2Closed;
  