export interface TextAreaProps {
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
    onChange?: any;
    /**
    * Mensaje de error personalizado
    */
    customMessageError?: string;
    /**
     * Error del input
     */
    error?: string;
}
