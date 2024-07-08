
import React from 'react';

interface SearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M10.9 1C5.432 1 1 5.432 1 10.9s4.432 9.9 9.9 9.9c2.338 0 4.486-.81 6.18-2.165l4.042 4.043a1.1 1.1 0 1 0 1.556-1.556l-4.043-4.043A9.86 9.86 0 0 0 20.8 10.9c0-5.468-4.432-9.9-9.9-9.9m-7.7 9.9a7.7 7.7 0 1 1 15.4 0 7.7 7.7 0 0 1-15.4 0" clip-rule="evenodd"/><path fill={color2 ? color2 : '#61FFFF'} fill-opacity=".5" d="M10.9 3.2a7.7 7.7 0 1 0 0 15.4 7.7 7.7 0 0 0 0-15.4"/></svg>
);

export default Search;
  