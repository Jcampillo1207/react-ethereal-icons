import React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: 'Apple' | 'BadgeAlert' | 'Badge' | 'Boost' | 'Forge' | 'Grow' | 'Intello' | 'Studio' | 'User';
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const IconUniversal: React.FC<IconProps>;
export default IconUniversal;
