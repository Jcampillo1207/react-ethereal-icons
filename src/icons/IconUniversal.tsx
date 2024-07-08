
import React from 'react';
import Apple from './Apple';
import Backpack from './Backpack';
import BadgeAlert from './BadgeAlert';
import BadgeCheck from './BadgeCheck';
import BadgeDollarSign from './BadgeDollarSign';
import BadgeEuroSign from './BadgeEuroSign';
import BadgeHelp from './BadgeHelp';
import BadgeInfo from './BadgeInfo';
import BadgeMinus from './BadgeMinus';
import BadgePlus from './BadgePlus';
import BadgeX from './BadgeX';
import Badge from './Badge';
import Boost from './Boost';
import Forge from './Forge';
import Grow from './Grow';
import Intello from './Intello';
import Studio from './Studio';
import Tag from './Tag';
import Tags from './Tags';
import User from './User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'Apple' | 'Backpack' | 'BadgeAlert' | 'BadgeCheck' | 'BadgeDollarSign' | 'BadgeEuroSign' | 'BadgeHelp' | 'BadgeInfo' | 'BadgeMinus' | 'BadgePlus' | 'BadgeX' | 'Badge' | 'Boost' | 'Forge' | 'Grow' | 'Intello' | 'Studio' | 'Tag' | 'Tags' | 'User';
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color1, color2, className, ...props }) => {
  const icons = { Apple, Backpack, BadgeAlert, BadgeCheck, BadgeDollarSign, BadgeEuroSign, BadgeHelp, BadgeInfo, BadgeMinus, BadgePlus, BadgeX, Badge, Boost, Forge, Grow, Intello, Studio, Tag, Tags, User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color1={color1} color2={color2} className={className} {...props} />;
};

export default IconUniversal;
