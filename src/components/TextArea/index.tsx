import React from "react";
import { TextAreaProps } from "./type";
import './index.scss';
const TextArea = ({label='example',value,placeholder,size,onChange,error,readonly,customMessageError}: TextAreaProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(value);
  const [haveError, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    if(onChange){
      onChange(e.target.value);
    }
  }
  const disabled = readonly ? 'disabled' : '';
  return (
    <>
    <div className={["meraki-textarea",`meraki-textarea--${size}`,`${disabled&&'disabled'}`].join(" ")}>
      <label>{label}</label>
      <div className={`meraki-textarea__input ${(error|| haveError) &&'error'}`}>
        <textarea name="textarea" placeholder={placeholder||''} disabled={readonly}  onChange={(e)=>handleChange(e)} value={inputValue}></textarea>
      </div>
    </div>
    {(error || haveError)&&<div className="meraki-error">{error || haveError}</div>}
    </>
  )
}

export default TextArea;