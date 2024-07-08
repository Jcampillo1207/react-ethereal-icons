
import React from 'react';

/**
 * @component
 * @name Colecto
 * @description Automatically generated SVG icon component for Colecto.
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

interface ColectoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Colecto: React.FC<ColectoProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill={color1 ? color1 : "none"}><path fill={color2 ? color2 : "#3C3C3B"} d="M21.245 14.375c1.338 0 2.185 1.402 1.527 2.535-1.765 3.038-5.118 5.09-8.964 5.09-4.84 0-8.899-3.249-9.995-7.625A9.8 9.8 0 0 1 3.52 12c0-.818.101-1.614.292-2.375C4.909 5.25 8.968 2 13.808 2c3.846 0 7.2 2.052 8.964 5.09.658 1.133-.189 2.535-1.527 2.535a1.77 1.77 0 0 1-1.527-.87c-1.166-2.002-3.376-3.352-5.91-3.352-2.886 0-5.352 1.752-6.333 4.222A6.4 6.4 0 0 0 7.022 12c0 .838.16 1.638.453 2.375.981 2.47 3.447 4.222 6.333 4.222 2.534 0 4.744-1.35 5.91-3.351.312-.537.893-.87 1.527-.87"/><path fill={color1 ? color1 : "#fff"} d="M11.924 12.545c.75 0 1.357-.591 1.357-1.32 0-.728-.608-1.318-1.357-1.318h-4.33a.6.6 0 0 1-.606-.589v-2.11c0-.527-.659-.789-1.039-.411l-4.775 4.747c-.375.372-.103 1 .433 1h5.445q.041.566.174 1.102c.72 2.905 3.386 5.062 6.565 5.062a6.77 6.77 0 0 0 5.886-3.379c.433-.752-.124-1.683-1.002-1.683-.417 0-.799.222-1.004.578a4.47 4.47 0 0 1-3.88 2.225 4.46 4.46 0 0 1-4.16-2.803 4.3 4.3 0 0 1-.271-1.102z"/></svg>
);

export default Colecto;
  