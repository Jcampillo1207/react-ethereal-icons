
import React from 'react';

interface BadgeHelpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BadgeHelp: React.FC<BadgeHelpProps> = ({ size = 24, color1, color2, className, ...props }) => (
  <svg className={className} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path fill={color1 ? color1 : '#735CFF'} fill-rule="evenodd" d="M2.953 7.947a4.202 4.202 0 0 1 5.018-5.01 4.2 4.2 0 0 1 7.075 0 4.197 4.197 0 0 1 5.017 5.02 4.2 4.2 0 0 1 0 7.078 4.2 4.2 0 0 1-5.007 5.02 4.2 4.2 0 0 1-7.085 0 4.198 4.198 0 0 1-5.018-5.01 4.2 4.2 0 0 1 0-7.098M9.995 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m-.158-7.722c.429-.24.938-.33 1.436-.249s.94.327 1.252.68c.311.354.476.792.475 1.238v.002c0 .427-.356.903-1.08 1.364a6.4 6.4 0 0 1-1.294.621l-.017.006h-.001a1 1 0 0 0 .607 1.906h.002l.001-.001.004-.001.011-.004.035-.012q.045-.014.119-.041A8.37 8.37 0 0 0 12.993 13c.819-.521 2.006-1.517 2.007-3.05a3.86 3.86 0 0 0-.976-2.565 4.13 4.13 0 0 0-2.428-1.33 4.2 4.2 0 0 0-2.737.478A3.98 3.98 0 0 0 7.062 8.62a1 1 0 0 0 1.876.692 1.98 1.98 0 0 1 .899-1.035" clip-rule="evenodd"/><path fill={color2 ? color2 : '#61FFFF'} d="M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705" opacity=".5"/></svg>
);

export default BadgeHelp;
  