
import React from 'react';

interface LayersProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Layers: React.FC<LayersProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="m2.078 14.64 8.672-4.353a2.87 2.87 0 0 1 2.5 0l8.672 4.353c1.385.695 1.447 2.273.119 3.034L13.37 22.65c-.817.468-1.923.468-2.74 0L1.96 17.674c-1.328-.761-1.266-2.339.12-3.034"/><path fill={color2 ? color2 : '#61FFFF'} d="m2.078 9.64 8.672-4.353a2.87 2.87 0 0 1 2.5 0l8.672 4.353c1.385.695 1.447 2.273.119 3.034L13.37 17.65c-.817.468-1.923.468-2.74 0L1.96 12.674c-1.328-.761-1.266-2.339.12-3.034" opacity=".5"/><path fill={color1 ? color1 : '#61FFFF'} d="m2.078 5.64 8.672-4.353a2.87 2.87 0 0 1 2.5 0l8.672 4.353c1.385.695 1.447 2.273.119 3.034L13.37 13.65c-.817.468-1.923.468-2.74 0L1.96 8.674C.631 7.913.693 6.335 2.079 5.64" opacity=".5"/></svg>
);

export default Layers;
  