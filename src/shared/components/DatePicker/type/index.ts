
export interface DatePickerProps {
    /**
    * Click Picker
    */
  onClickEvent?:()=>void;

      /**
    * Ref
    */
  inputref?: React.RefObject<HTMLInputElement>;
  

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
onChange?: (value: string) => void;

 /**
 * Icono a la derecha del input
 */
iconRight?: React.ReactNode | React.ReactNode[] | string;
   /**
 * Icono a la izquierda del input
 */
iconLeft?:React.ReactNode | React.ReactNode[] | string;
/**
 * Error del input
 */
error?:string;
}