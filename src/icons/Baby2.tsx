
import React from 'react';

/**
 * @component
 * @name Baby2
 * @description Automatically generated SVG icon component for Baby2.
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

interface Baby2Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Baby2: React.FC<Baby2Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M18 15.333h1zm-1.63-3.971-.7-.713zm-8.74 0 .7-.713zm-1.27 6.971-.944.328zM9.6 6.556a1 1 0 1 0 0 2zm.012 2a1 1 0 1 0 0-2zm4.788-2a1 1 0 1 0 0 2zm.012 2a1 1 0 1 0 0-2zM7 7.556C7 5.11 9.165 3 12 3V1C8.208 1 5 3.864 5 7.556zM12 3c2.835 0 5 2.11 5 4.556h2C19 3.864 15.792 1 12 1zM7 16.444v-1.11H5v1.11zm10-1.11v1.11h2v-1.11zm1 1.11h-1v-.004.031l-.009.135c-.01.123-.029.307-.069.53a5.5 5.5 0 0 1-.552 1.611 4 4 0 0 1-1.427 1.534c-.665.41-1.603.719-2.943.719v2c1.66 0 2.972-.386 3.994-1.017a6 6 0 0 0 2.136-2.286c.44-.813.654-1.616.76-2.207a7 7 0 0 0 .11-1.012v-.032c0-.001 0-.002-1-.002m-2.34-4.378c.65.654.992 1.465 1.168 2.148a5.8 5.8 0 0 1 .17 1.063l.002.053v.008-.004h1l1-.001v-.017l-.004-.134a7.755 7.755 0 0 0-.231-1.47c-.231-.892-.704-2.067-1.684-3.055zM17 7.556c0 1.183-.495 2.27-1.33 3.093l1.402 1.425C18.257 10.908 19 9.318 19 7.556zm-1.33 3.093c-.907.892-2.209 1.462-3.67 1.462v2c1.985 0 3.79-.775 5.072-2.037zm-8.75.008c-.98.988-1.454 2.163-1.685 3.056a7.8 7.8 0 0 0-.23 1.47L5 15.326v.006l1 .001 1 .001v.003l.002-.06a5.754 5.754 0 0 1 .17-1.064c.176-.682.518-1.493 1.167-2.147zM12 12.111c-1.461 0-2.763-.57-3.67-1.462l-1.402 1.425c1.282 1.262 3.087 2.037 5.072 2.037zM8.33 10.65C7.496 9.827 7 8.739 7 7.556H5c0 1.762.743 3.352 1.928 4.518zm-1.025 7.356a5.8 5.8 0 0 1-.301-1.47L7 16.441q0-.002 0 0v.003H5v.01l.001.057.006.141a7.807 7.807 0 0 0 .408 2.01zM9.6 8.555h.012v-2H9.6zm4.8 0h.012v-2H14.4zM12 21c-1.536 0-2.547-.404-3.229-.913l-1.195 1.604C8.646 22.488 10.09 23 12 23zm-3.229-.913c-.773-.576-1.214-1.357-1.466-2.082l-1.89.656c.34.976.975 2.145 2.16 3.03zm2.332-7.417-3.827 7.777 1.795.883 3.826-7.777z"/></svg>
);

export default Baby2;
  