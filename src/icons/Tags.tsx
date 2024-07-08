
import React from 'react';

interface TagsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Tags: React.FC<TagsProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M9.673 4.67A2.29 2.29 0 0 0 8.056 4H2.143A1.143 1.143 0 0 0 1 5.143v5.913c0 .607.241 1.188.67 1.617l6.521 6.52a2.774 2.774 0 0 0 3.91 0l4.093-4.092a2.774 2.774 0 0 0 0-3.91zM7 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill={color2 ? color2 : '#61FFFF'} fill-rule="evenodd" d="M16.589 7.586A2 2 0 0 0 15.174 7H10a1 1 0 0 0-1 1v5.174a2 2 0 0 0 .586 1.415l5.706 5.706a2.427 2.427 0 0 0 3.421 0l3.582-3.582a2.427 2.427 0 0 0 0-3.42zm-2.339 3.351a1.312 1.312 0 1 1-2.625 0 1.312 1.312 0 0 1 2.625 0" clip-rule="evenodd" opacity=".5"/></svg>
);

export default Tags;
  