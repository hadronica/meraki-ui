import React from 'react';
import { SelectProps } from './type';
/**
 * Primary UI component for user interaction
 */
const Select = ({ options, value, onChange,label,readonly,name,error}:SelectProps) => {
    const [selectValue, setSelectValue] = React.useState(value.value);
    const handleChange = (e:{target:{value:string}}) => {
      setSelectValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (
      <div className="meraki-select">
        <label htmlFor="">
          {label}
        </label>
        <div className={`meraki-select__content ${(error) &&'error'} ${(readonly) &&'disabled'}`}>
          <label htmlFor={name}>
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.992112 0.46428C1.38264 0.0737556 2.0158 0.0737556 2.40633 0.46428L7.35607 5.41403L12.3058 0.46428C12.6963 0.0737556 13.3295 0.0737556 13.72 0.46428C14.1106 0.854804 14.1106 1.48797 13.72 1.87849L8.06318 7.53535C7.67266 7.92587 7.03949 7.92587 6.64897 7.53535L0.992112 1.87849C0.601588 1.48797 0.601588 0.854804 0.992112 0.46428Z" fill={`${readonly?'#ffffff':'#E31C30'}`}/>
          </svg>
          </label>
        <select id={name} defaultValue={selectValue} onChange={(e:any) => handleChange(e)} disabled={readonly}>
          <option value="">Seleccionar</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </div>
        {(error)&&<div className="meraki-error">{error}</div>}

      </div>
    );
}
export default Select;
