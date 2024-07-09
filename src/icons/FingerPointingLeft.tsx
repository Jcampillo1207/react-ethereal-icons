
import React from 'react';

/**
 * @component
 * @name FingerPointingLeft
 * @description Automatically generated SVG icon component for FingerPointingLeft.
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

interface FingerPointingLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FingerPointingLeft: React.FC<FingerPointingLeftProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M21.999 8.44h-.948a2.78 2.78 0 0 1-1.791-.67l-4.903-4.115c-.566-.475-1.267-.854-1.915-.54-1.049.507-1.73 1.938-.158 3.69l1.71 1.796H3.57c-2.044.063-2.145 3.762 0 3.92h5.94c-.191 1.665.852 9.509 5.272 8.366q.317-.082.633-.162c.92-.231 2.557-.915 3.514-1.67.997-.784 2.626-.507 3.07-.507"/></svg>
);

export default FingerPointingLeft;
  