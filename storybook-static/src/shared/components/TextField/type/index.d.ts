export interface TextFieldProps {
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
    * Icono a la derecha del input
    */
    iconRight?: React.ReactNode | React.ReactNode[] | string;
    /**
  * Icono a la izquierda del input
  */
    iconLeft?: React.ReactNode | React.ReactNode[] | string;
    /**
* Tipo de input (text, password, email, number, etc)
*/
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'onlyLetters' | 'cellphone' | 'custom';
    /**
     * Patrón de validación
     */
    pattern?: string;
    /**
    * Mensaje de error personalizado
    */
    customMessageError?: string;
    /**
    * Es de tipo contraseña
    */
    password?: boolean;
    /**
     * Error del input
     */
    error?: string;
}
