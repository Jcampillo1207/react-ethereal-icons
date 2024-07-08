
import React from 'react';

interface MessageSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MessageSquare: React.FC<MessageSquareProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M3.933 1h16.134C21.687 1 23 2.378 23 4.078v10.774c0 1.7-1.313 3.078-2.933 3.078H8.082c-.778 0-1.524.325-2.074.902l-3.756 3.941C1.79 23.258 1 22.915 1 22.23V4.079C1 2.378 2.313 1 3.933 1"/></svg>
);

export default MessageSquare;
  