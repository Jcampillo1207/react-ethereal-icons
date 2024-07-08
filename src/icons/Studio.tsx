
import React from 'react';

interface StudioProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Studio: React.FC<StudioProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#00AA4E"} fill-rule="evenodd" d="M4 18.233C4 20.866 6.015 23 8.5 23s4.5-2.134 4.5-4.767V1.917C13 1.41 12.613 1 12.135 1h-7.27C4.387 1 4 1.41 4 1.917zm4.5 2.017c.956 0 1.73-.82 1.73-1.833s-.774-1.834-1.73-1.834-1.73.821-1.73 1.834c0 1.012.774 1.833 1.73 1.833" clip-rule="evenodd"/><path fill={color1 ? color1 : "#2CD7A4"} fill-rule="evenodd" d="M4.633 15.764c-1.303 2.307-.53 5.257 1.727 6.589 2.256 1.332 5.141.541 6.444-1.766l8.074-14.3a.94.94 0 0 0-.332-1.267l-6.6-3.896a.896.896 0 0 0-1.239.34zm3.087 4.179a1.793 1.793 0 0 0 2.479-.68c.501-.887.204-2.021-.664-2.533a1.793 1.793 0 0 0-2.479.678c-.5.888-.203 2.023.664 2.535" clip-rule="evenodd" opacity=".5"/></svg>
);

export default Studio;
  