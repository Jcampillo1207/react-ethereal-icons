
import React from 'react';

interface User1CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User1Check: React.FC<User1CheckProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m13.536 4.464-.53.53zm-7.072 7.072.53-.53zm0-7.072.53.53zM15.53 18.47a.75.75 0 1 0-1.06 1.06zM17 21l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM2.256 21.093a.75.75 0 0 0 1.488-.186zm13.173-5.131a.75.75 0 1 0 1.142-.973zm-1.363-3.896a5.75 5.75 0 0 0 0-8.132l-1.06 1.06a4.25 4.25 0 0 1 0 6.011zm-8.132 0a5.75 5.75 0 0 0 8.132 0l-1.06-1.06a4.25 4.25 0 0 1-6.011 0zm0-8.132a5.75 5.75 0 0 0 0 8.132l1.06-1.06a4.25 4.25 0 0 1 0-6.011zm1.06 1.06a4.25 4.25 0 0 1 6.011 0l1.06-1.06a5.75 5.75 0 0 0-8.13 0zM14.47 19.53l2 2 1.06-1.06-2-2zm3.06 2 4-4-1.06-1.06-4 4zM10 12.25c-2.13 0-3.729.535-4.91 1.393-1.177.857-1.879 1.991-2.292 3.094-.412 1.098-.545 2.182-.579 2.982a10 10 0 0 0 .025 1.26l.01.102.001.008v.003L3 21l.744-.092v-.001l-.001-.011-.005-.054a8.864 8.864 0 0 1-.02-1.06c.03-.701.146-1.616.484-2.519.337-.897.885-1.763 1.77-2.406.882-.642 2.158-1.107 4.028-1.107zm0 1.5c2.748 0 4.401 1.005 5.429 2.212l1.142-.973C15.25 13.436 13.173 12.25 10 12.25z"/></svg>
);

export default User1Check;
  