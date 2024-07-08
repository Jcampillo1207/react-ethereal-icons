
import React from 'react';
import User from './User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'User';
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color1, color2, className, ...props }) => {
  const icons = { User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color1={color1} color2={color2} className={className} {...props} />;
};

export default IconUniversal;
