
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
import Bag from './Bag';
import Banknote from './Banknote';
import Boost from './Boost';
import Contrast from './Contrast';
import CreditCard2 from './CreditCard2';
import CreditCard3 from './CreditCard3';
import CreditCard from './CreditCard';
import File2 from './File2';
import File from './File';
import Forge from './Forge';
import Grow from './Grow';
import Home from './Home';
import Intello from './Intello';
import Layers from './Layers';
import Mail from './Mail';
import MapPin from './MapPin';
import MessageCircleDots from './MessageCircleDots';
import MessageCircle from './MessageCircle';
import MessageSquareDots from './MessageSquareDots';
import MessageSquare from './MessageSquare';
import MessagesCircle from './MessagesCircle';
import MessagesSquare from './MessagesSquare';
import PillHorizontal2 from './PillHorizontal2';
import PillHorizontal from './PillHorizontal';
import PillVertical2 from './PillVertical2';
import PillVertical from './PillVertical';
import Pills2 from './Pills2';
import Pills from './Pills';
import Search from './Search';
import Squares2 from './Squares2';
import Squares3 from './Squares3';
import Squares4 from './Squares4';
import Squares from './Squares';
import Studio from './Studio';
import Tag from './Tag';
import Tags from './Tags';
import User from './User';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'Apple' | 'Backpack' | 'BadgeAlert' | 'BadgeCheck' | 'BadgeDollarSign' | 'BadgeEuroSign' | 'BadgeHelp' | 'BadgeInfo' | 'BadgeMinus' | 'BadgePlus' | 'BadgeX' | 'Badge' | 'Bag' | 'Banknote' | 'Boost' | 'Contrast' | 'CreditCard2' | 'CreditCard3' | 'CreditCard' | 'File2' | 'File' | 'Forge' | 'Grow' | 'Home' | 'Intello' | 'Layers' | 'Mail' | 'MapPin' | 'MessageCircleDots' | 'MessageCircle' | 'MessageSquareDots' | 'MessageSquare' | 'MessagesCircle' | 'MessagesSquare' | 'PillHorizontal2' | 'PillHorizontal' | 'PillVertical2' | 'PillVertical' | 'Pills2' | 'Pills' | 'Search' | 'Squares2' | 'Squares3' | 'Squares4' | 'Squares' | 'Studio' | 'Tag' | 'Tags' | 'User';
  size?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const IconUniversal: React.FC<IconProps> = ({ name, size = 24, color1, color2, className, ...props }) => {
  const icons = { Apple, Backpack, BadgeAlert, BadgeCheck, BadgeDollarSign, BadgeEuroSign, BadgeHelp, BadgeInfo, BadgeMinus, BadgePlus, BadgeX, Badge, Bag, Banknote, Boost, Contrast, CreditCard2, CreditCard3, CreditCard, File2, File, Forge, Grow, Home, Intello, Layers, Mail, MapPin, MessageCircleDots, MessageCircle, MessageSquareDots, MessageSquare, MessagesCircle, MessagesSquare, PillHorizontal2, PillHorizontal, PillVertical2, PillVertical, Pills2, Pills, Search, Squares2, Squares3, Squares4, Squares, Studio, Tag, Tags, User };
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} color1={color1} color2={color2} className={className} {...props} />;
};

export default IconUniversal;
