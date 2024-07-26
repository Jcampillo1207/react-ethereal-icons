
import React from 'react';

/**
 * @component
 * @name Football
 * @description Automatically generated SVG icon component for Football.
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

interface FootballProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Football: React.FC<FootballProps> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m11.708 9.349-.604-.797zm.584 0 .604-.797zm2.253 1.705-.604.797zm.18.58-.954-.299zm-.86 2.758.955.298zm-3.73 0-.955.298zm-.86-2.759-.955.298zm.18-.579-.604-.797zM11 9a1 1 0 1 0 2 0zm2-4a1 1 0 1 0-2 0zm1.649 5.064a1 1 0 0 0 .702 1.872zm4.702.372a1 1 0 0 0-.702-1.872zm-4.519 4.01a1 1 0 0 0-1.664 1.109zm.336 4.109a1 1 0 0 0 1.664-1.11zm-4.387-3.43a1 1 0 1 0-1.562-1.25zm-3.562 1.25a1 1 0 0 0 1.562 1.25zm1.538-3.905a1 1 0 1 0 .486-1.94zM5.243 9.53a1 1 0 0 0-.486 1.94zm6.774-4.908-.576.818a1 1 0 0 0 1.155-.003zm-6.82 5.817.594.804a1 1 0 0 0 .32-1.208zm10.419 7.717.178-.984a1 1 0 0 0-1.122.652zm3.188-8.766-.934-.359a1 1 0 0 0 .34 1.163zM8.05 17.166l1 .01a1 1 0 0 0-1.01-1.01zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zm.311 7.146a.52.52 0 0 1-.622 0l1.207-1.594a1.48 1.48 0 0 0-1.792 0zm-.622 0 2.252 1.705 1.207-1.594-2.252-1.705zm2.253 1.705a.47.47 0 0 1-.171-.516l1.91.596a1.53 1.53 0 0 0-.533-1.674zm-.171-.516-.86 2.76 1.909.595.86-2.76zm-.86 2.76a.5.5 0 0 1 .481-.345v2a1.5 1.5 0 0 0 1.428-1.06zm.481-.345h-2.784v2h2.784zm-2.784 0a.5.5 0 0 1 .481.344l-1.909.596a1.5 1.5 0 0 0 1.428 1.06zm.481.344-.86-2.758-1.91.595.861 2.759zm-.86-2.758a.47.47 0 0 1-.17.515L8.85 10.257a1.53 1.53 0 0 0-.531 1.674zm-.17.515 2.252-1.705-1.207-1.594-2.253 1.705zM13 9V5h-2v4zm2.351 2.936 4-1.5-.702-1.872-4 1.5zm-2.183 3.619 2 3 1.664-1.11-2-3zm-3.949-1.68-2 2.5 1.562 1.25 2-2.5zm.024-3.345-4-1-.486 1.94 4 1zm-.818-7.212L11.44 5.44l1.15-1.635-3.016-2.123zm4.171 2.12 2.984-2.123-1.16-1.63-2.983 2.123zM2.594 13.603l3.197-2.36-1.189-1.61-3.196 2.361zm3.517-3.569-1.64-3.718-1.83.807 1.64 3.719zm13.537 7.834-3.854-.697-.356 1.968 3.854.697zm-4.976-.045-1.35 3.845 1.887.662 1.35-3.844zm4.424-11.987L17.87 9.031l1.867.717 1.226-3.194zm-.887 4.357 3.197 2.361 1.188-1.609-3.196-2.36zm-9.2 11.222.042-4.24-2-.02-.041 4.24zm-.968-5.25-4.048.044.021 2 4.048-.044z"/></svg>
);

export default Football;
  