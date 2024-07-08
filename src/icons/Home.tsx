
import React from 'react';

interface HomeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Home: React.FC<HomeProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M2 9.42c0-.306.07-.608.206-.886s.335-.524.582-.722l7.778-6.315c.4-.32.909-.497 1.434-.497s1.033.176 1.434.497l7.778 6.315c.247.198.445.444.582.722s.206.58.206.887v9.474a2.05 2.05 0 0 1-.65 1.488 2.29 2.29 0 0 1-1.572.617H4.222c-.59 0-1.154-.222-1.571-.617A2.05 2.05 0 0 1 2 18.895z"/><path fill={color2 ? color2 : '#61FFFF'} d="M14 12h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2" opacity=".5"/></svg>
);

export default Home;
  