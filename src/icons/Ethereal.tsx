
import React from 'react';
import Boost from './Boost';
import Forge from './Forge';
import Grow from './Grow';
import Studio from './Studio';
import User from './User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'Boost' | 'Forge' | 'Grow' | 'Studio' | 'User';
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Ethereal: React.FC<IconProps> = ({ name, size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => {
  const icons = { Boost, Forge, Grow, Studio, User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color={color} strokeWidth={strokeWidth} color1={color1} color2={color2} className={className} {...props} />;
};

export default Ethereal;
