import React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: 'Apple' | 'Backpack' | 'BadgeAlert' | 'BadgeCheck' | 'BadgeDollarSign' | 'BadgeEuroSign' | 'BadgeHelp' | 'BadgeInfo' | 'BadgeMinus' | 'BadgePlus' | 'BadgeX' | 'Badge' | 'Bag' | 'Banknote' | 'Boost' | 'Contrast' | 'CreditCard2' | 'CreditCard3' | 'CreditCard' | 'File2' | 'File' | 'Forge' | 'Grow' | 'Home' | 'Intello' | 'Layers' | 'Mail' | 'MapPin' | 'MessageCircleDots' | 'MessageCircle' | 'MessageSquareDots' | 'MessageSquare' | 'MessagesCircle' | 'MessagesSquare' | 'PillHorizontal2' | 'PillHorizontal' | 'PillVertical2' | 'PillVertical' | 'Pills2' | 'Pills' | 'Search' | 'Squares2' | 'Squares3' | 'Squares4' | 'Squares' | 'Studio' | 'Tag' | 'Tags' | 'User';
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const IconUniversal: React.FC<IconProps>;
export default IconUniversal;
