
import React from 'react';

/**
 * @component
 * @name FingerPointingUp
 * @description Automatically generated SVG icon component for FingerPointingUp.
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

interface FingerPointingUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const FingerPointingUp: React.FC<FingerPointingUpProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M8.44 21.999v-.948c0-.645-.236-1.273-.67-1.791l-4.115-4.903c-.475-.566-.854-1.267-.54-1.915.507-1.049 1.938-1.73 3.69-.158l1.796 1.71V3.57c.063-2.044 3.762-2.145 3.92 0v5.94c1.665-.191 9.509.852 8.366 5.272q-.082.317-.162.633c-.231.92-.915 2.557-1.67 3.514-.784.997-.507 2.626-.507 3.07"/></svg>
);

export default FingerPointingUp;
  