
import React from 'react';

/**
 * @component
 * @name Baby1
 * @description Componente de ícono SVG generado automáticamente para Baby1.
 * @preview https://your-preview-url.com/baby1
 * @param {object} props - Props del componente SVG, incluyendo cualquier atributo SVG válido.
 * @param {number} [props.size=24] - Tamaño del ícono.
 * @param {string} [props.color] - Color del ícono.
 * @param {number} [props.strokeWidth=1.5] - Ancho del trazo.
 * @param {string} [props.color1] - Primer color de relleno (para íconos con dos colores).
 * @param {string} [props.color2] - Segundo color de relleno (para íconos con dos colores).
 * @param {string} [props.className] - Clase CSS adicional para el ícono.
 * @returns {JSX.Element} Elemento JSX representando el ícono SVG.
 */

interface Baby1Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  color1?: string;
  color2?: string;
  className?: string;
}

const Baby1: React.FC<Baby1Props> = ({ size = 24, color, strokeWidth = 1.5, color1, color2, className, ...props }) => (
  <svg className={className} color={color} width={size} height={size} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   fill="none"><path strokeWidth={strokeWidth}  fill={color ? color : "currentColor"} d="M17 15h.75zm-1.358-3.575-.546-.514zm-7.284 0 .546-.514zM7.3 17.7l-.714.23zm3.286-11.286-.53.53zm3.358.53a.75.75 0 0 0-1.06-1.06zm-3.358-3.358-.53-.53zM7.75 8A4.25 4.25 0 0 1 12 3.75v-1.5A5.75 5.75 0 0 0 6.25 8zM12 3.75A4.25 4.25 0 0 1 16.25 8h1.5A5.75 5.75 0 0 0 12 2.25zM7.75 16v-1h-1.5v1zm8.5-1v1h1.5v-1zm.75 1h-.75v-.002.034l-.008.13a5 5 0 0 1-.06.496c-.07.42-.208.968-.478 1.507-.268.536-.658 1.049-1.23 1.43-.566.378-1.355.655-2.474.655v1.5c1.381 0 2.467-.348 3.307-.907.835-.557 1.382-1.294 1.739-2.008.355-.71.53-1.413.616-1.93a7 7 0 0 0 .088-.879v-.025zm-1.91-4.067c.562.612.858 1.371 1.01 2.009a6 6 0 0 1 .148.998l.002.052v.01V15L17 15h.75v-.04l-.003-.086a7.276 7.276 0 0 0-.187-1.282c-.187-.78-.57-1.808-1.365-2.674zM16.25 8c0 1.127-.438 2.15-1.154 2.912l1.093 1.027A5.73 5.73 0 0 0 17.75 8zm-1.154 2.912A4.24 4.24 0 0 1 12 12.25v1.5c1.651 0 3.14-.697 4.189-1.81zm-7.29.006c-.796.866-1.179 1.894-1.366 2.674a7.3 7.3 0 0 0-.187 1.282l-.003.112V15L7 15h.75v.002-.01q0-.015.002-.052.002-.073.016-.219a6 6 0 0 1 .131-.78c.153-.637.449-1.396 1.011-2.008zM12 12.25c-1.22 0-2.32-.514-3.096-1.338L7.81 11.939A5.74 5.74 0 0 0 12 13.75zm-3.096-1.338A4.23 4.23 0 0 1 7.75 8h-1.5c0 1.524.594 2.911 1.561 3.94zM12 20.25c-1.355 0-2.234-.407-2.822-.921-.602-.527-.957-1.216-1.164-1.859l-1.428.46c.26.806.734 1.767 1.605 2.528.884.774 2.122 1.292 3.809 1.292zm-3.986-2.78a5.8 5.8 0 0 1-.26-1.376l-.004-.079V16L7 16h-.75v.007a3 3 0 0 0 .006.168 7.288 7.288 0 0 0 .33 1.755zm3.456-5-4.7 4.7 1.06 1.06 4.7-4.7zm-1.415-5.525a2.75 2.75 0 0 0 3.89 0l-1.061-1.061a1.25 1.25 0 0 1-1.768 0zm0-3.89a2.75 2.75 0 0 0 0 3.89l1.061-1.061a1.25 1.25 0 0 1 0-1.768zm1.061 1.061c.244-.244.563-.366.884-.366v-1.5c-.703 0-1.408.269-1.944.805z"/></svg>
);

export default Baby1;
  