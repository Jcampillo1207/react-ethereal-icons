
import React from 'react';

/**
 * @component
 * @name Audac
 * @description Automatically generated SVG icon component for Audac.
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

interface AudacProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Audac: React.FC<AudacProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#0A0A0A"} d="M10 21.55c0 .98-.953 1.68-1.885 1.38a10.95 10.95 0 0 1-7.045-7.045 1.446 1.446 0 0 1 2.757-.881 8.05 8.05 0 0 0 5.169 5.169c.598.193 1.004.749 1.004 1.377M21.478 11a1.52 1.52 0 0 1-1.446-1.056C18.94 6.53 15.756 4.06 12 4.06S5.062 6.53 3.968 9.944A1.52 1.52 0 0 1 2.523 11a1.528 1.528 0 0 1-1.449-1.998C2.562 4.36 6.891 1 12 1s9.438 3.36 10.926 8.002A1.528 1.528 0 0 1 21.478 11"/><path fill={color1 ? color1 : "#64BFCB"} d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 9.395s-3.396 0-3.396-3.395S12 8.605 12 8.605s3.396 0 3.396 3.395S12 15.395 12 15.395M23 15.592v5.816c0 .88-.792 1.592-1.77 1.592h-6.46c-.978 0-1.77-.713-1.77-1.592 0-.682.482-1.288 1.2-1.507 2.512-.77 4.501-2.56 5.357-4.822.244-.645.917-1.079 1.674-1.079.977 0 1.769.713 1.769 1.592"/></svg>
);

export default Audac;
  