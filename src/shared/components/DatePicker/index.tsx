import React from "react";

import { DatePickerProps } from "./type";
const DatePicker = ({label='example',value,placeholder,inputref,iconLeft,size,iconRight,onChange,onClickEvent,error,readonly,customClass,marginBottom,marginTop}: DatePickerProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   

    setInputValue(e.target.value);

    if(onChange){
      onChange(e.target.value);
    }
  }
  const disabled = readonly ? 'disabled' : '';
  return (
    <>
    <div className={["meraki-textfield",`meraki-textfield--${size||'large'}`,`${marginTop?`mt-${marginTop}`:''}`,`${marginBottom?`mb-${marginBottom}`:''}`,`${disabled&&'disabled'}`,`${customClass}`].join(" ")} onClick={onClickEvent}>
      <label>{label}</label>
      <div className={`meraki-textfield__input ${(error) &&'error'}`}>
        {iconLeft&&
        <div className="meraki-button__iconLeft">{iconLeft}</div>}
        <input type={'text'} ref={inputref} value={inputValue} placeholder={placeholder||''} disabled={readonly}  onChange={(e)=>handleChange(e)}/>
        {iconRight&&
        <div className="meraki-button__iconRight">{iconRight}</div>}
        
      </div>
    </div>
    {(error)&&<div className="meraki-error">{error }</div>}
    </>
  )
}

export default DatePicker;