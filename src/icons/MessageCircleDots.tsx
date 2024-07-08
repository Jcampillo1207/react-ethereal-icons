
import React from 'react';

interface MessageCircleDotsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MessageCircleDots: React.FC<MessageCircleDotsProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M14.851 21.917a10.6 10.6 0 0 1-7.293-.88l-5.687 1.927a.659.659 0 0 1-.835-.835l1.928-5.687a10.602 10.602 0 1 1 11.887 5.475M9.286 11.143a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0m5.357 0a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0m3.214 2.143a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286" clip-rule="evenodd"/></svg>
);

export default MessageCircleDots;
  