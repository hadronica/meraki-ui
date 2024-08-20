export interface TextAreaProps {
        /**
    * Cantidad máxima de caracteres
    */
   type?: 'onlyText' | 'Alphanumeric';
        /**
    * Cantidad máxima de caracteres
    */
      maxLength?: number;
      /**
    * Margen top
    */
      marginTop?: 16 | 24 | 32 | 40;
      /**
    * Margen Bottom
    */
   marginBottom?: 16 | 24 | 32 | 40;
    /**
   * Valor del placeholder
   */
    placeholder?: string;
  /**
   * Valor del input
   */
  value: string;
  /**
   * ¿El input es de solo lectura?
   */
  readonly?: boolean;
  /**
   * ¿Cuál es el tamaño del input?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Label del input
   */
  label: string;
  /**
   * Clase personalizada del boton en caso tenga
   */
  customClass?: string;

   /**
   * Evento click del boton
   */
  onChange?: (val:string) => void;
   /**
   * Mensaje de error personalizado
   */
   customMessageError?: string;
  /**
   * Error del input
   */
  error?:string;
}
