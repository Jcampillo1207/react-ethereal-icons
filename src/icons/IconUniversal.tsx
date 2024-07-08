
import React from 'react';
import Apple from './icons/Apple';
import Boost from './icons/Boost';
import Forge from './icons/Forge';
import Grow from './icons/Grow';
import Intello from './icons/Intello';
import Studio from './icons/Studio';
import User from './icons/User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'Apple' | 'Boost' | 'Forge' | 'Grow' | 'Intello' | 'Studio' | 'User';
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color1, color2, className, ...props }) => {
  const icons = { Apple, Boost, Forge, Grow, Intello, Studio, User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color1={color1} color2={color2} className={className} {...props} />;
};

export default IconUniversal;
