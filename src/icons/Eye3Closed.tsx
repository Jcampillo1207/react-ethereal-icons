
import React from 'react';

/**
 * @component
 * @name Eye3Closed
 * @description Componente de ícono SVG generado automáticamente para Eye3Closed.
 * @preview https://your-preview-url.com/eye3closed
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface Eye3ClosedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Eye3Closed: React.FC<Eye3ClosedProps> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth} stroke={color ? color : "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke- d="M12 7V5m0 2c2.586 0 4.565 1.01 6 2.202M12 7a9.4 9.4 0 0 0-1.562.128M6 9.202C3.939 10.914 3 13 3 13s2.7 6 9 6c2.198 0 3.958-.73 5.318-1.682M6 9.202l-2-2m2 2a10 10 0 0 1 1.937-1.265M18 9.202C20.061 10.914 21 13 21 13s-.675 1.5-2.137 3M18 9.202l2-2M4 4l3.937 3.937m2.501 2.501a3 3 0 1 0 4.124 4.124m-4.124-4.124 4.124 4.124m-4.124-4.124L7.937 7.937m6.625 6.625 2.756 2.756M20 20l-2.682-2.682"/></svg>
);

export default Eye3Closed;
  