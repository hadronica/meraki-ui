import { clsx } from 'clsx';
import {button, ButtonProps} from './type';

/**
 * Primary UI component for user interaction
 */


 const Button = ({
  variant,
  size = 'medium',
  label,
  loading,
  customClass,
  fullwidth,
  typeStyle,
  iconRight,
  iconLeft,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(button( {size,variant,fullwidth,typeStyle}), customClass)}
      {...props}
    >
      {iconLeft&&
      <div className="meraki-button__iconLeft">{iconLeft}</div>}
      {loading && <span>Loading...</span>}
      {!loading&&
      <span>{label}</span>
      }
      {iconRight&&
      <div className="meraki-button__iconRight">{iconRight}</div>}
    </button>
  );
};

export default Button;