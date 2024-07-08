
import React from 'react';

interface User4CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User4Check: React.FC<User4CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color ? color : "currentColor"}><path strokeWidth={strokeWidth} fill={color ? color : "currentColor"} d="m15.243 4.757-.53.53zm-8.486 8.486.53-.53zm0-8.486.53.53zM2.25 21a.75.75 0 0 0 1.5 0zm14.844-4.656a.75.75 0 0 0 1.333-.688zM15.53 18.47a.75.75 0 1 0-1.06 1.06zM17 21l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM6.227 13.773a6.75 6.75 0 0 0 9.546 0l-1.06-1.06a5.25 5.25 0 0 1-7.425 0zm1.06-8.485a5.25 5.25 0 0 1 7.425 0l1.061-1.061a6.75 6.75 0 0 0-9.546 0zm-1.005 7.266c-2.061 1.362-3.057 3.517-3.542 5.25a13.8 13.8 0 0 0-.482 2.925 8 8 0 0 0-.008.263v.007L3 21h.75v.001-.045l.006-.156a12.324 12.324 0 0 1 .428-2.592c.439-1.567 1.291-3.323 2.925-4.402zm-.055-8.327a6.75 6.75 0 0 0-.069 9.476l1.076-1.045a5.25 5.25 0 0 1 .054-7.37zm-.069 9.476.069.07 1.06-1.06-.053-.055zm8.733.103c.996.658 1.702 1.566 2.203 2.538l1.333-.688c-.588-1.14-1.45-2.27-2.71-3.102zm.882-.033.069-.07-1.076-1.045-.054.054zm.069-.07a6.75 6.75 0 0 0-.069-9.476l-1.06 1.06a5.25 5.25 0 0 1 .053 7.37zM14.47 19.53l2 2 1.06-1.06-2-2zm3.06 2 4-4-1.06-1.06-4 4z"/></svg>
);

export default User4Check;
  