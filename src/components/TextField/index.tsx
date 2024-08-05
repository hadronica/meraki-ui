import React from "react";
import { TextFieldProps } from "./type";
import './index.scss';
const TextField = ({label='example',value,placeholder,iconLeft,size,iconRight,type,password,onChange,error,readonly,pattern,customMessageError}: TextFieldProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(value);
  const [typeInput, setTypeInput] = React.useState(password ? 'password' : 'text');
  const [haveError, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(type === 'number' && isNaN(Number(e.target.value))){
      return
    }
    if(type === 'onlyLetters' && !/^[a-zA-Z\s]*$/.test(e.target.value)){
      return
    }
    if(type === 'email' ){
      const email = e.target.value;
     const validateEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if(!validateEmail.test(email)){
        setError('Email no valido');
        setInputValue(e.target.value);
        return
      }else{
        setError('');
      }
    
    }
    if(type==='custom' && pattern){
      const custom = e.target.value;
      const validateCustom = new RegExp(pattern);
      if(!validateCustom.test(custom)){
        setError(customMessageError||'Formato no valido');
        setInputValue(e.target.value);
        return
      }else{
        setError('');
      }
    }

    setInputValue(e.target.value);

    if(onChange){
      onChange(e.target.value);
    }
  }
  const disabled = readonly ? 'disabled' : '';
  return (
    <>
    <div className={["meraki-textfield",`meraki-textfield--${size}`,`${disabled&&'disabled'}`].join(" ")}>
      <label>{label}</label>
      <div className={`meraki-textfield__input ${(error|| haveError) &&'error'}`}>
        {iconLeft&&
        <div className="meraki-button__iconLeft">{iconLeft}</div>}
        <input type={typeInput} value={inputValue} placeholder={placeholder||''} disabled={readonly}  onChange={(e)=>handleChange(e)}/>
        {iconRight&&
        <div className="meraki-button__iconRight">{iconRight}</div>}
        {password&&
        <div className="meraki-textfield__icon" onClick={()=>setTypeInput(typeInput==='password'?'text':'password')}>
          {typeInput==='password'?'👁️':'👁️'}
        </div>}
      </div>
    </div>
    {(error || haveError)&&<div className="meraki-error">{error || haveError}</div>}
    </>
  )
}

export default TextField;