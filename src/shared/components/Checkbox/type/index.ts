export interface CheckboxProps {
     /**
    * Error de checkbox
    */
  error?: string;
   /**
    * Margen top
    */
   marginTop?: 16 | 24 | 32 | 40;
   /**
 * Margen Bottom
 */
marginBottom?: 16 | 24 | 32 | 40;
   /**
   * Evento click del boton
   */
  onClick: (value: boolean) => void;
     /**
   * ¿El boton es solido o bordeado?
   */
    checked?:boolean;
   /**
   * Texto de checkbox
   */
  children?: React.ReactNode | React.ReactNode[] | string;

}
