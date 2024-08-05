export interface ButtonProps {
  /**
   * ¿Este boton es principal?
   */
  primary?: boolean;
  /**
   * ¿Cuál es el tamaño del botón?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Nombre del botón
   */
  label: string;
  /**
   * Clase personalizada del boton en caso tenga
   */
  customClass?: string;
    /**
   * ¿El botón ocupa todo el ancho disponible?
   */
  fullwidth?: boolean;
   /**
   * Evento click del boton
   */
  onClick?: any;
     /**
   * ¿El boton es solido o bordeado?
   */
  typeStyle?:'solid' | 'outline';
   /**
   * Icono a la derecha del boton
   */
  iconRight?: React.ReactNode | React.ReactNode[] | string;
     /**
   * Icono a la izquierda del boton
   */
  iconLeft?:React.ReactNode | React.ReactNode[] | string;
     /**
   * Deshabilitado
   */
  disabled?:boolean;
}
