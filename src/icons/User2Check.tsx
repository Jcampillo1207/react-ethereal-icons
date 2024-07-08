
import React from 'react';

/**
 * @component
 * @name User2Check
 * @description Automatically generated SVG icon component for User2Check.
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

interface User2CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const User2Check: React.FC<User2CheckProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m14.817 3.627-.707.707zm-7.856 7.857.707-.707zm0-7.857.707.707zM1.07 21.63a1 1 0 0 0 1.857.742zm12.831-3.712a1 1 0 0 0 .64-1.895zm2.138 1.154a1 1 0 1 0-1.414 1.414zM17.556 22l-.708.707a1 1 0 0 0 1.415 0zm5.151-3.737a1 1 0 0 0-1.414-1.415zm-7.183-6.072a6.556 6.556 0 0 0 0-9.27L14.11 4.333a4.556 4.556 0 0 1 0 6.443zm-9.27 0a6.556 6.556 0 0 0 9.27 0l-1.414-1.414a4.556 4.556 0 0 1-6.442 0zm0-9.27a6.556 6.556 0 0 0 0 9.27l1.414-1.414a4.556 4.556 0 0 1 0-6.443zm1.414 1.413a4.556 4.556 0 0 1 6.442 0l1.414-1.414a6.556 6.556 0 0 0-9.27 0zm3.22 11.11c-3.645 0-6.11 1.53-7.65 3.071a11 11 0 0 0-1.644 2.102 9 9 0 0 0-.483.918l-.027.062-.008.02q0 .004-.003.007v.003h-.001c0 .001 0 .002.928.373l.928.372v.001l-.001.002.002-.004.013-.03q.02-.046.066-.143c.062-.128.161-.319.3-.552a9 9 0 0 1 1.344-1.717c1.237-1.237 3.216-2.485 6.237-2.485zm0 2a9.3 9.3 0 0 1 3.014.473l.64-1.895a11.3 11.3 0 0 0-3.653-.578zm3.738 3.04 2.222 2.223 1.415-1.414-2.223-2.222zm3.637 2.223 4.444-4.444-1.414-1.415-4.445 4.445z"/></svg>
);

export default User2Check;
  