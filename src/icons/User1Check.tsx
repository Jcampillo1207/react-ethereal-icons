
import React from 'react';

/**
 * @component
 * @name User1Check
 * @description Automatically generated SVG icon component for User1Check.
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

interface User1CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User1Check: React.FC<User1CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m13.725 3.627-.708.707zm-7.84 7.857.708-.706zm0-7.857.708.707zm10.171 15.445a1 1 0 1 0-1.416 1.412zM17.566 22l-.708.706a1 1 0 0 0 1.415 0zm5.142-3.738a1 1 0 1 0-1.416-1.413zM1.052 22.124a1 1 0 1 0 1.985-.248zm14.643-5.615a1 1 0 1 0 1.524-1.295zm-1.263-4.319a6.564 6.564 0 0 0 0-9.27l-1.415 1.414a4.564 4.564 0 0 1 0 6.444zm-9.255 0a6.534 6.534 0 0 0 9.255 0l-1.415-1.412a4.535 4.535 0 0 1-6.424 0zm0-9.27a6.564 6.564 0 0 0 0 9.27l1.416-1.412a4.564 4.564 0 0 1 0-6.444zm1.416 1.414a4.534 4.534 0 0 1 6.424 0l1.415-1.413a6.535 6.535 0 0 0-9.255 0zm8.047 16.15 2.218 2.222 1.415-1.412-2.217-2.222zm3.633 2.222 4.435-4.444-1.416-1.413-4.434 4.445zM9.805 12.111c-2.39 0-4.2.602-5.543 1.58-1.338.976-2.133 2.267-2.6 3.514-.464 1.241-.614 2.465-.651 3.365a12 12 0 0 0 .027 1.421l.012.119.001.008v.005L2.045 22l.993-.123v.002-.002l-.007-.068a9.705 9.705 0 0 1-.021-1.156c.032-.767.16-1.766.526-2.747.365-.975.956-1.906 1.905-2.598.943-.688 2.321-1.197 4.365-1.197zm0 2c2.998 0 4.783 1.095 5.89 2.398l1.524-1.295c-1.498-1.764-3.848-3.103-7.414-3.103z"/></svg>
);

export default User1Check;
  