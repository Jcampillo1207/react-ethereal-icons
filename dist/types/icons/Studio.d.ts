import React from 'react';
interface StudioProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const Studio: React.FC<StudioProps>;
export default Studio;
