
import React from 'react';

interface User3CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User3Check: React.FC<User3CheckProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  stroke={color ? color : "currentColor"} d="m12.828 4.172-.53.53zM7.172 9.828l.53-.53zm0-5.656.53.53zM2.25 21a.75.75 0 0 0 1.5 0zm12.3-4.493a.75.75 0 1 0 1.106-1.014zm.98 1.963a.75.75 0 1 0-1.06 1.06zM17 21l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM13.36 10.36a4.75 4.75 0 0 0 0-6.718l-1.06 1.06a3.25 3.25 0 0 1 0 4.597zm-6.718 0a4.75 4.75 0 0 0 6.718 0l-1.06-1.06a3.25 3.25 0 0 1-4.597 0zm0-6.718a4.75 4.75 0 0 0 0 6.718l1.06-1.06a3.25 3.25 0 0 1 0-4.597zm1.06 1.06a3.25 3.25 0 0 1 4.597 0l1.06-1.06a4.75 4.75 0 0 0-6.717 0zM10 13.25c-1.881 0-3.342.473-4.463 1.22-1.116.744-1.85 1.73-2.333 2.695a9.4 9.4 0 0 0-.834 2.618 9 9 0 0 0-.118 1.113l-.002.093v.01L3 21h.75v.001l.001-.055.01-.193c.013-.172.038-.422.088-.724a7.9 7.9 0 0 1 .697-2.194c.393-.786.97-1.549 1.823-2.117.848-.566 2.012-.968 3.631-.968zm0 1.5c2.27 0 3.665.791 4.55 1.757l1.106-1.014C14.473 14.203 12.67 13.25 10 13.25zm4.47 4.78 2 2 1.06-1.06-2-2zm3.06 2 4-4-1.06-1.06-4 4z"/></svg>
);

export default User3Check;
  