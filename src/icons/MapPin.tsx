
import React from 'react';

interface MapPinProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const MapPin: React.FC<MapPinProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} d="M3.685 14.235c.176-.14.391-.223.615-.235h15.4c.224.012.439.095.616.235.176.141.307.334.374.553l2.2 6.75c.11.112.11.224.11.337C23 22.55 22.56 23 21.9 23H2.1c-.66 0-1.1-.45-1.1-1.125 0-.113 0-.225.11-.337l2.2-6.75c.067-.22.198-.412.375-.553"/><path fill={color2 ? color2 : '#B0FFFF'} fill-rule="evenodd" d="M10.866 17.089c.66.564 1.608.564 2.268 0C15.116 15.398 19 11.599 19 7.8a6.7 6.7 0 0 0-2.05-4.808A7.1 7.1 0 0 0 12 1a7.1 7.1 0 0 0-4.95 1.992A6.7 6.7 0 0 0 5 7.8c0 3.799 3.884 7.598 5.866 9.289M14.333 7.8c0 1.252-1.044 2.267-2.333 2.267S9.667 9.052 9.667 7.8 10.71 5.533 12 5.533s2.333 1.015 2.333 2.267" clip-rule="evenodd" opacity=".5"/></svg>
);

export default MapPin;
  