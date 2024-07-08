
import React from 'react';

interface User2CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User2Check: React.FC<User2CheckProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  stroke={color ? color : "currentColor"} d="m14.536 4.464-.53.53zm-7.072 7.072.53-.53zm0-7.072.53.53zm-5.16 16.258a.75.75 0 0 0 1.392.556zm11.456-3.539a.75.75 0 1 0 .48-1.42zm1.77 1.287a.75.75 0 1 0-1.06 1.06zM17 21l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zm-6.464-5.464a5.75 5.75 0 0 0 0-8.132l-1.06 1.06a4.25 4.25 0 0 1 0 6.011zm-8.132 0a5.75 5.75 0 0 0 8.132 0l-1.06-1.06a4.25 4.25 0 0 1-6.011 0zm0-8.132a5.75 5.75 0 0 0 0 8.132l1.06-1.06a4.25 4.25 0 0 1 0-6.011zm1.06 1.06a4.25 4.25 0 0 1 6.011 0l1.06-1.06a5.75 5.75 0 0 0-8.13 0zM11 15.25c-3.234 0-5.417 1.356-6.78 2.72a9.8 9.8 0 0 0-1.457 1.863 8 8 0 0 0-.426.809l-.03.07-.002.006v.002h-.001c0 .001 0 .002.696.28l.696.28.002-.004.012-.03q.019-.044.062-.133a7 7 0 0 1 .277-.508A8.3 8.3 0 0 1 5.28 19.03c1.137-1.136 2.954-2.28 5.72-2.28zm0 1.5c1.06 0 1.973.167 2.76.433l.48-1.42A10 10 0 0 0 11 15.25zm3.47 2.78 2 2 1.06-1.06-2-2zm3.06 2 4-4-1.06-1.06-4 4z"/></svg>
);

export default User2Check;
  