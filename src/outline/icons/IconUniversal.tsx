
import React from 'react';
import User from './User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'User';
  size?: number;
  color?: string;
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color, className, ...props }) => {
  const icons = { User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color={color} className={className} {...props} />;
};

export default IconUniversal;
