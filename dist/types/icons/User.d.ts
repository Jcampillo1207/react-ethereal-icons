import React from 'react';
interface UserProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color1?: string;
    color2?: string;
    className?: string;
}
declare const User: React.FC<UserProps>;
export default User;
