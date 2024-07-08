
import React from 'react';

/**
 * @component
 * @name Zetline
 * @description Automatically generated SVG icon component for Zetline.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=2] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website ethereal.dev
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface ZetlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Zetline: React.FC<ZetlineProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "url(#a)"} d="M18.647 18.248h-1.098L6.07 23h12.578c1.3 0 2.353-1.064 2.353-2.376a2.365 2.365 0 0 0-2.354-2.376"/><path fill={color1 ? color1 : "url(#b)"} d="m14.896 12.536 5.358-6.503L4.29 17.5c-.382.275-.751.585-.962 1.007-.215.43-.329.908-.329 1.395C3 21.613 4.374 23 6.069 23l11.48-4.752c-2.924 0-4.522-3.442-2.653-5.712"/><path fill={color2 ? color2 : "url(#c)"} d="M17.915 1H5.375l14.879 5.033a3.1 3.1 0 0 0 .702-1.963c0-1.695-1.361-3.07-3.04-3.07"/><path fill={color1 ? color1 : "url(#d)"} d="m9.054 11.476-5.338 6.437 16.538-11.88L5.375 1A2.387 2.387 0 0 0 3 3.398a2.387 2.387 0 0 0 2.375 2.398h1.052c2.909 0 4.495 3.428 2.627 5.68"/><defs><linearGradient id="a" x1="11.989" x2="22.182" y1="8.908" y2="9.949" gradientUnits="userSpaceOnUse"><stop stop-color="#181818"/><stop offset="1" stop-color="#767676"/></linearGradient><linearGradient id="b" x1="11.412" x2="14.792" y1="9.585" y2="18.63" gradientUnits="userSpaceOnUse"><stop stop-color="#181818"/><stop offset="1" stop-color="#767676"/></linearGradient><linearGradient id="c" x1="13.304" x2="20.567" y1="15.272" y2="13.914" gradientUnits="userSpaceOnUse"><stop stop-color="#767676"/><stop offset="1" stop-color="#181818"/></linearGradient><linearGradient id="d" x1="11.627" x2="11.627" y1="1" y2="18.12" gradientUnits="userSpaceOnUse"><stop stop-color="#181818"/><stop offset="1" stop-color="#767676"/></linearGradient></defs></svg>
);

export default Zetline;
  