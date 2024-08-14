
import React from 'react';

/**
 * @component
 * @name SpeedTrain
 * @description Automatically generated SVG icon component for SpeedTrain.
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

interface SpeedTrainProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const SpeedTrain: React.FC<SpeedTrainProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M2 2a1 1 0 0 0 0 2zm9.868 1.401-.313.95zm4.37 2.728.593-.804zm3.69 2.726.595-.804zm.08.06-.601.798zM22 12.86l1-.008v-.001zm0 .172-1-.019v.003zM20.032 15l-.016-1h-.003zM2 14a1 1 0 1 0 0 2zm0-8a1 1 0 0 0 0 2zm2.426 1.008-.064.998zm2.815 1.43.768-.642zm.32.424.808-.59zm.103.143-.832.555zm.334 1.024 1-.043zm-.024.713-.935-.355zm-.232.232.354.935zM2 10a1 1 0 1 0 0 2zm19 2a1 1 0 1 0 0-2zm-8-8a1 1 0 1 0-2 0zM2 18a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zm-3-1a1 1 0 1 0-2 0zm-2 2a1 1 0 1 0 2 0zm-4-2a1 1 0 1 0-2 0zm-2 2a1 1 0 1 0 2 0zm-4-2a1 1 0 1 0-2 0zm-2 2a1 1 0 1 0 2 0zM2 4h4.733V2H2zm4.733 0c2.674 0 3.791.012 4.822.351l.626-1.9C10.775 1.988 9.28 2 6.733 2zm4.822.351c1.031.34 1.937.994 4.088 2.583l1.188-1.61c-2.049-1.513-3.244-2.41-4.65-2.873zm4.088 2.583 3.692 2.726 1.188-1.61-3.692-2.725zm3.692 2.725.072.054 1.203-1.597-.087-.065zm.072.054A4 4 0 0 1 21 12.87l2-.02a6 6 0 0 0-2.39-4.735zM21 12.869v.09h2v-.107zm0 .09v.054l2 .038v-.092zm0 .057a1 1 0 0 1-.984.984l.032 2A3 3 0 0 0 23 13.048zm-.987.984h-.054v2h.092zm-.054 0H2v2h17.96zM2 8h1.893V6H2zm1.893 0c.283 0 .38 0 .469.006L4.49 6.01C4.322 6 4.15 6 3.893 6zm.469.006a3 3 0 0 1 2.111 1.072l1.536-1.282a5 5 0 0 0-3.52-1.786zm2.111 1.072c.057.068.115.146.282.375l1.614-1.18c-.152-.208-.253-.348-.36-.477zm.282.375c.057.077.068.093.077.107l1.664-1.11c-.039-.058-.08-.114-.127-.178zm.077.107a1 1 0 0 1 .167.512l1.998-.086a3 3 0 0 0-.501-1.536zm.167.512.001.132h2c0-.08 0-.149-.003-.218zm.001.132v.212h2v-.212zm0 .212-.001.136v.003-.003l.006-.042a1 1 0 0 1 .034-.123l1.87.709c.063-.167.08-.318.086-.416C9 10.59 9 10.49 9 10.416zm.039-.029a.6.6 0 0 1 .349-.348l.708 1.87a1.4 1.4 0 0 0 .813-.813zm.349-.348a.7.7 0 0 1 .167-.04h-.038L7.416 10v2c.073 0 .174 0 .264-.005.098-.006.249-.022.416-.086zM7.416 10H2v2h5.416zM21 10h-3.667v2H21zm-3.667 0C14.878 10 13 8.15 13 6h-2c0 3.374 2.897 6 6.333 6zM13 6V4h-2v2zM2 20h20v-2H2zm15-1v2h2v-2zm-6 0v2h2v-2zm-6 0v2h2v-2z"/></svg>
);

export default SpeedTrain;
  