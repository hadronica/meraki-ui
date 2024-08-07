import React from "react";
import { TextAreaProps } from "./type";
const TextArea = ({label='example',value,placeholder,size,onChange,error,readonly,customMessageError}: TextAreaProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(value);

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
      <div className={`meraki-textarea__input ${(error) &&'error'}`}>
        <textarea name="textarea" placeholder={placeholder||''} disabled={readonly}  onChange={(e)=>handleChange(e)} value={inputValue}></textarea>
      </div>
    </div>
    {(error)&&<div className="meraki-error">{customMessageError||error }</div>}
    </>
  )
}

export default TextArea;