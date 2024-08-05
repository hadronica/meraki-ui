export interface SelectProps {
    /**
   * Name del Select
   */
    name: string;
  
    /**
   * Opciones del select
   */
    options: {label:string,value:string}[];
  /**
   * Valor del select
   */
  value: {label:string,value:string};
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
  onChange?: any;

  /**
   * Error del select
   */
  error?:string;
}
