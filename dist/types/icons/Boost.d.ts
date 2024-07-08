import React from 'react';
interface BoostProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const Boost: React.FC<BoostProps>;
export default Boost;
