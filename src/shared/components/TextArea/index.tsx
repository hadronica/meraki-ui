import React from "react";
import { TextAreaProps } from "./type";
const TextArea = ({label='example',value,type,placeholder,maxLength,size,onChange,error,readonly,customMessageError,marginBottom,marginTop}: TextAreaProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(type==='onlyText' && !/^[a-zA-Z\s]*$/.test(e.target.value)){
      return
    }
    if(type==='Alphanumeric' && !/^[a-zA-Z0-9\s]*$/.test(e.target.value)){
      return
    }
    setInputValue(e.target.value);

    if(onChange){
      onChange(e.target.value);
    }
  }
  const disabled = readonly ? 'disabled' : '';
  return (
    <>
    <div className={["meraki-textarea",`meraki-textarea--${size}`,`${marginTop?`mt-${marginTop}`:''}`,`${marginBottom?`mb-${marginBottom}`:''}`,`${disabled&&'disabled'}`].join(" ")}>
      <label>{label}</label>
      <div className={`meraki-textarea__input ${(error) &&'error'}`}>
        <textarea maxLength={maxLength&&maxLength} name="textarea" placeholder={placeholder||''} disabled={readonly}  onChange={(e)=>handleChange(e)} value={inputValue}></textarea>
      </div>
    </div>
    {(error)&&<div className="meraki-error">{customMessageError||error }</div>}
    </>
  )
}

export default TextArea;