
import React from 'react';

interface MessageCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MessageCircle: React.FC<MessageCircleProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M7.558 21.036a10.603 10.603 0 1 0-4.594-4.594l-1.928 5.687a.659.659 0 0 0 .835.835z"/></svg>
);

export default MessageCircle;
  