import React from 'react';
interface AppleProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const Apple: React.FC<AppleProps>;
export default Apple;
