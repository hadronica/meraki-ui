export interface CheckboxProps {
    /**
    * Evento click del boton
    */
    onClick: any;
    /**
  * ¿El boton es solido o bordeado?
  */
    checked?: boolean;
    /**
    * Texto de checkbox
    */
    children?: React.ReactNode | React.ReactNode[] | string;
}
