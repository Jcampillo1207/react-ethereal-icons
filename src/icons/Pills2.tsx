
import React from 'react';

interface Pills2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Pills2: React.FC<Pills2Props> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><g fill="#61FFFF" opacity=".5"><path d="M12.778 4.172a4 4 0 0 1 0 5.656l-2.475 2.475-5.657-5.657 2.475-2.474a4 4 0 0 1 5.657 0M11.172 19.778a4 4 0 0 1 0-5.657l2.474-2.475 5.657 5.657-2.475 2.475a4 4 0 0 1-5.656 0"/></g><path fill={color1 ? color1 : '#735CFF'} d="M2.172 9.121a4 4 0 0 0 5.656 5.657l2.475-2.475-5.657-5.657zM21.778 14.828a4 4 0 1 0-5.657-5.656l-2.475 2.474 5.657 5.657z"/></svg>
);

export default Pills2;
  