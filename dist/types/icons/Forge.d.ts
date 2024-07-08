import React from 'react';
interface ForgeProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const Forge: React.FC<ForgeProps>;
export default Forge;
