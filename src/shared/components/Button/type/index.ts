import { ButtonHTMLAttributes } from "react";
import {cva, type VariantProps} from 'class-variance-authority'

export const button = cva("meraki-button", {
  variants: { // Cambié 'variant' a 'variants'
    variant:{
      primary:'meraki-button--primary',
      secondary:'meraki-button--secondary',
    },
    typeStyle:{
      solid:'meraki-button--solid',
      outline:'meraki-button--outline'
    },
    size:{
      small:'meraki-button--small',
      medium:'meraki-button--medium',
      large:'meraki-button--large'
    },
    fullwidth:{
      fullwidth:'meraki-button--fullwidth'
    },
    defaultVariant:{
      variant:'primary',
      typeStyle:'solid'
    }
  }
});  


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof button> {
  /**
   * Principal o secundario
   */
  variant: 'primary'|'secondary';
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
  fullwidth?: 'fullwidth' | null;
     /**
   * ¿El boton es solido o bordeado?
   */
  typeStyle?: 'solid' | 'outline' | null;
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
