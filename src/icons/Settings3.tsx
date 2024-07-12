
import React from 'react';

/**
 * @component
 * @name Settings3
 * @description Automatically generated SVG icon component for Settings3.
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

interface Settings3Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Settings3: React.FC<Settings3Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-foreground`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M21.011 14.407c.522-.14.783-.21.886-.345s.103-.351.103-.784v-1.934c0-.433 0-.65-.103-.784s-.364-.205-.886-.346c-1.95-.526-3.171-2.565-2.668-4.502.139-.533.208-.8.142-.956s-.256-.264-.635-.48l-1.725-.978c-.372-.212-.558-.317-.725-.295s-.356.21-.733.587c-1.459 1.455-3.873 1.455-5.333 0-.377-.377-.565-.565-.732-.587s-.353.083-.725.294l-1.725.98c-.38.215-.57.323-.635.479s.003.423.141.956c.503 1.937-.718 3.976-2.669 4.502-.522.141-.783.212-.886.346-.103.135-.103.351-.103.784v1.934c0 .433 0 .65.103.784s.364.205.886.345c1.95.526 3.171 2.566 2.668 4.503-.139.533-.208.8-.142.956s.256.264.635.479l1.725.98c.372.21.558.316.725.294s.356-.21.733-.587c1.46-1.457 3.876-1.457 5.336 0 .377.376.565.564.732.587.167.022.353-.084.726-.295l1.724-.98c.38-.214.57-.322.635-.478.066-.157-.003-.423-.141-.956-.504-1.937.716-3.976 2.666-4.503Z"/><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke- d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
);

export default Settings3;
  