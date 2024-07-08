import React from 'react';
interface GrowProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const Grow: React.FC<GrowProps>;
export default Grow;
