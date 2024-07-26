
import React from 'react';

/**
 * @component
 * @name RunningShoes1
 * @description Automatically generated SVG icon component for RunningShoes1.
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

interface RunningShoes1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const RunningShoes1: React.FC<RunningShoes1Props> = ({ size = 24, color, strokeWidth = 2, color1, color2, className, ...props }) => (
  <svg className={`${className} text-inherit`} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="m2.668 16.883.78-.625zM4.076 7l.987-.163a1 1 0 0 0-1.863-.32zm5.975 2 .218.976a1 1 0 0 0 .677-1.42zm.994-3-.44-.897-.01.004zm.002 0 .764-.645a1 1 0 0 0-1.205-.253zm10.815 9.219-.926.376zm-9.84-.415-.302-.954zm1.806-.452-.069.998zm2.213.909-.423.906zm-3.248-6.468a1 1 0 0 0 1.414 1.414zm2.914-.086a1 1 0 0 0-1.414-1.414zm-.914 1.586a1 1 0 0 0 1.414 1.414zm2.914-.086a1 1 0 0 0-1.414-1.414zM19.101 17H7.963v2h11.138zM7.963 17c-1.502 0-2.504-.003-3.25-.126-.691-.115-1.02-.311-1.264-.616l-1.562 1.25c.65.812 1.502 1.174 2.5 1.339.946.156 2.144.153 3.576.153zm-4.514-.742c-.236-.295-.408-.8-.443-1.56-.033-.745.07-1.623.268-2.545.398-1.848 1.14-3.696 1.678-4.67L3.2 6.517C2.566 7.667 1.756 9.7 1.32 11.732c-.22 1.019-.355 2.08-.31 3.056.043.96.266 1.955.878 2.72zm-.36-9.095c.31 1.868 2.038 2.587 3.376 2.844 1.407.27 2.94.162 3.804-.031l-.437-1.952c-.625.14-1.88.232-2.99.019-1.177-.226-1.691-.674-1.78-1.206zm7.857 1.392c-.388-.782-.226-1.062-.173-1.145.12-.19.359-.333.722-.516l-.9-1.787c-.298.151-1.053.508-1.513 1.234-.527.834-.53 1.887.073 3.104zm.54-1.657h.001l-.881-1.796-.002.001zm-1.204-.253c1.6 1.895 4.095 3.348 6.155 4.685 2.184 1.418 3.861 2.693 4.499 4.265l1.853-.752c-.91-2.243-3.164-3.827-5.263-5.19-2.223-1.444-4.361-2.693-5.715-4.298zm10.654 8.95c.084.207.072.346.04.448-.038.118-.13.264-.314.418-.386.324-1.009.539-1.56.539v2c.972 0 2.064-.351 2.845-1.006.4-.336.754-.782.933-1.34.184-.574.159-1.195-.09-1.811zm-19.26-.65c4.24 1.456 7.054 1.948 10.647.812l-.603-1.907c-2.988.945-5.307.607-9.395-.796zm10.647.812c.509-.16.855-.27 1.115-.338.277-.074.342-.067.321-.069l.138-1.995c-.332-.023-.671.051-.97.13-.317.084-.718.21-1.207.365zm1.436-.407c-.037-.002.05.005.427.164.335.142.79.354 1.432.653l.845-1.813c-.626-.292-1.121-.523-1.498-.682-.335-.142-.72-.293-1.068-.317zm1.86.817c1.753.818 4.256 1.33 6.817.091l-.872-1.8c-1.844.893-3.687.556-5.1-.104zm-1.412-5.96 1.5-1.5-1.414-1.414-1.5 1.5zm2 1.5 1.5-1.5-1.414-1.414-1.5 1.5z"/></svg>
);

export default RunningShoes1;
  