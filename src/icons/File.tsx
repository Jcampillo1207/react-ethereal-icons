
import React from 'react';

interface FileProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const File: React.FC<FileProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M3 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path fill={color2 ? color2 : '#61FFFF'} d="M16 1H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6z" opacity=".5"/><path fill={color1 ? color1 : '#735CFF'} d="M15 1v4a2 2 0 0 0 2 2h4"/><path fill={color2 ? color2 : '#735CFF'} d="m21 6-5-5h-1v4a2 2 0 0 0 2 2h4z"/></svg>
);

export default File;
  