
import React from 'react';

/**
 * @component
 * @name Badge3Check
 * @description Automatically generated SVG icon component for Badge3Check.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {number} [props.strokeWidth=1.5] - Stroke width.
 * @param {string} [props.color1] - First fill color (for icons with two colors).
 * @param {string} [props.color2] - Second fill color (for icons with two colors).
 * @param {string} [props.className] - Additional CSS class for the icon.
 */

interface Badge3CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Badge3Check: React.FC<Badge3CheckProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m21 12 .933.359.138-.359-.138-.359zm-2.5-6.5.933-.359-.16-.415-.414-.16zM12 3l.359-.933L12 1.929l-.359.138zM5.5 5.5l-.359-.933-.415.16-.16.414zM3 12l-.933-.359-.138.359.138.359zm2.5 6.5-.933.359.16.415.414.16zM12 21l-.359.933.359.138.359-.138zm6.5-2.5.359.933.415-.16.16-.414zm-8.793-7.207a1 1 0 0 0-1.414 1.414zM11 14l-.707.707a1 1 0 0 0 1.414 0zm4.707-3.293a1 1 0 0 0-1.414-1.414zm6.226.934-2.5-6.5-1.866.718 2.5 6.5zM18.86 4.567l-6.5-2.5-.718 1.866 6.5 2.5zm-7.218-2.5-6.5 2.5.718 1.866 6.5-2.5zM4.567 5.14l-2.5 6.5 1.866.718 2.5-6.5zm-2.5 7.218 2.5 6.5 1.866-.718-2.5-6.5zm3.074 7.074 6.5 2.5.718-1.866-6.5-2.5zm7.218 2.5 6.5-2.5-.718-1.866-6.5 2.5zm7.074-3.074 2.5-6.5-1.866-.718-2.5 6.5zm-11.14-6.152 2 2 1.414-1.414-2-2zm3.414 2 4-4-1.414-1.414-4 4z"/></svg>
);

export default Badge3Check;
  