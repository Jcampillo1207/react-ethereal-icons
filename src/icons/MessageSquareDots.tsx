
import React from 'react';

interface MessageSquareDotsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MessageSquareDots: React.FC<MessageSquareDotsProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M20.067 1H3.933C2.313 1 1 2.378 1 4.078v18.15c0 .686.79 1.03 1.252.545l3.756-3.941a2.87 2.87 0 0 1 2.074-.902h11.985c1.62 0 2.933-1.378 2.933-3.078V4.078C23 2.378 21.687 1 20.067 1M9 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/></svg>
);

export default MessageSquareDots;
  