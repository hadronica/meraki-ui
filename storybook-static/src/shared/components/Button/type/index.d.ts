import { ButtonHTMLAttributes } from '../../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
export declare const button: (props?: ({
    variant?: "primary" | "secondary" | null | undefined;
    typeStyle?: "solid" | "outline" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
    fullwidth?: "fullwidth" | null | undefined;
    defaultVariant?: "variant" | "typeStyle" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    /**
     * Estado de carga
     */
    loading?: boolean;
    /**
     * Principal o secundario
     */
    variant: 'primary' | 'secondary';
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
    iconLeft?: React.ReactNode | React.ReactNode[] | string;
    /**
  * Deshabilitado
  */
    disabled?: boolean;
}
