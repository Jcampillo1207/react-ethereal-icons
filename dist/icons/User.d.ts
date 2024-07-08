import React from 'react';
interface UserProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}
declare const User: React.FC<UserProps>;
export default User;
