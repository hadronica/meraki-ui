import React from 'react';
import './button.scss';
import {ButtonProps} from './type';


/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  customClass,
  fullwidth,
  typeStyle,
  iconRight,
  iconLeft,
  disabled,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'meraki-button--primary' : 'meraki-button--secondary';
  const width = fullwidth ? 'meraki-button--fullwidth' : '';
  const type = typeStyle === 'outline' ? 'meraki-button--outline' : 'meraki-button--solid';
  return (
    <button
      type="button"
      disabled={disabled}
      className={['meraki-button', `meraki-button--${size}`, mode,width,type].join(' ')}
      {...props}
    >
      {iconLeft&&
      <div className="meraki-button__iconLeft">{iconLeft}</div>}
      <span>{label}</span>
      {iconRight&&
      <div className="meraki-button__iconRight">{iconRight}</div>}
    </button>
  );
};
