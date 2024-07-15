
import React from 'react';

/**
 * @component
 * @name AppleBitten
 * @description Automatically generated SVG icon component for AppleBitten.
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

interface AppleBittenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const AppleBitten: React.FC<AppleBittenProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 7S8 5 6 5c-.787 0-1.574.31-2.239.868-.459.385-.3 1.08.225 1.37l4.285 2.36a1 1 0 0 1 .466 1.192l-.105.313a6 6 0 0 0 0 3.794l.105.315a1 1 0 0 1-.464 1.19L4.795 18.33c-.45.25-.643.804-.406 1.262C5.126 21.017 6.009 22 7 22c3 0 2.5-1 5-1s2 1 5 1c.992 0 1.874-.983 2.611-2.408.237-.458.045-1.012-.406-1.262l-3.478-1.927a1 1 0 0 1-.464-1.191l.104-.315a6 6 0 0 0 0-3.794l-.104-.313a1 1 0 0 1 .466-1.192l4.285-2.36c.524-.29.684-.985.225-1.37C19.573 5.309 18.787 5 18 5c-2 0-6 2-6 2m0 0c.044-2.682-.17-3.975-2-5"/></svg>
);

export default AppleBitten;
  