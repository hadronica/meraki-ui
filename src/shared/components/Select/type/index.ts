export interface SelectProps {
    /**
    * Tamaño de icono en caso tuviera
    */

  heightAndWidthIcon?: number;
    /**
    * Margen top
    */
    marginTop?: 16 | 24 | 32 | 40;
    /**
    * Margen Bottom
    */
    marginBottom?: 16 | 24 | 32 | 40;
      /**
   * Name de la indicación del modal
   */
    placeholder: string;
    /**
   * Name del Select
   */
    name: string;
  
    /**
   * Opciones del select
   */
    options: {label:string,value:string,icon?:string}[];
  /**
   * Valor del select
   */
  value: string;
  /**
   * ¿El select es de solo lectura?
   */
  readonly?: boolean;
  
  /**
   * Label del Select
   */
  label: string;

   /**
   * Evento click del boton
   */
  onChange?: (value: string) => void;

  /**
   * Error del select
   */
  error?:string;
}
