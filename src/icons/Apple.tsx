
import React from 'react';

interface AppleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Apple: React.FC<AppleProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M12 21.878c1.65 0 3.025 1.122 4.4 1.122 3.3 0 6.6-8.47 6.6-12.938a5.11 5.11 0 0 0-1.667-3.62 5.52 5.52 0 0 0-3.833-1.44c-2.442 0-4.4 1.524-5.5 2.117C10.9 6.526 8.942 5 6.5 5a5.5 5.5 0 0 0-3.836 1.437A5.1 5.1 0 0 0 1 10.062C1 14.53 4.3 23 7.6 23c1.375 0 2.75-1.122 4.4-1.122"/><path fill={color2 ? color2 : '#61FFFF'} d="M10 3C8 1 4 1 4 1s0 3 2 5 6 2 6 2 0-3-2-5" opacity=".5"/></svg>
);

export default Apple;
  