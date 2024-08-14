
import React from 'react';

/**
 * @component
 * @name BillboardUrban
 * @description Automatically generated SVG icon component for BillboardUrban.
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

interface BillboardUrbanProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const BillboardUrban: React.FC<BillboardUrbanProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M16.5 7h1a1 1 0 0 0-1-1zm-9 0V6a1 1 0 0 0-1 1zm0 12h-1a1 1 0 0 0 1 1zm9 0v1a1 1 0 0 0 1-1zM9 21a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zM2.293 4.293a1 1 0 0 0 1.414 1.414zm18 1.414a1 1 0 1 0 1.414-1.414zM16.5 6h-9v2h9zm-10 1v12h2V7zm11 12V7h-2v12zm-10 1H12v-2H7.5zm4.5 0h4.5v-2H12zm-1-1v3h2v-3zm1 2H9v2h3zm0 2h3v-2h-3zm0-22c-3.173 0-5.575.794-7.197 1.606-.81.404-1.423.812-1.84 1.125a8 8 0 0 0-.65.542l-.012.012-.005.005-.002.001v.001L3 5c.707.707.707.707.706.708l-.001.001-.001.001.015-.014q.023-.023.08-.072c.076-.067.197-.168.363-.293.333-.25.845-.591 1.535-.937C7.075 3.706 9.173 3 12 3zm0 2c2.827 0 4.925.706 6.303 1.394.69.346 1.202.688 1.534.937a6 6 0 0 1 .444.365l.014.014h.001l-.002-.002L21 5c.707-.707.707-.707.706-.708l-.002-.002-.017-.017a4 4 0 0 0-.17-.154 8 8 0 0 0-.48-.388c-.417-.313-1.03-.72-1.84-1.125C17.575 1.794 15.173 1 12 1z"/></svg>
);

export default BillboardUrban;
  