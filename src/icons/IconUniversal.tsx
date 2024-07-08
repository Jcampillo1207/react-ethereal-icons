
import React from 'react';
import Apple from './Apple';
import BadgeAlert from './BadgeAlert';
import Badge from './Badge';
import Boost from './Boost';
import Forge from './Forge';
import Grow from './Grow';
import Intello from './Intello';
import Studio from './Studio';
import User from './User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'Apple' | 'BadgeAlert' | 'Badge' | 'Boost' | 'Forge' | 'Grow' | 'Intello' | 'Studio' | 'User';
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color1, color2, className, ...props }) => {
  const icons = { Apple, BadgeAlert, Badge, Boost, Forge, Grow, Intello, Studio, User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color1={color1} color2={color2} className={className} {...props} />;
};

export default IconUniversal;
