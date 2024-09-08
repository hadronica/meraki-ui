import React, { useEffect } from "react";

import { TextFieldProps } from "./type";
const TextField = ({label='example',InputRef,maxLength,value,marginTop,marginBottom,placeholder,iconLeft,size,iconRight,type,password,onChange,error,readonly,pattern,customMessageError,customClass}: TextFieldProps): JSX.Element => {
  const [inputValue, setInputValue] = React.useState(value);
  const [typeInput, setTypeInput] = React.useState(password ? 'password' : 'text');
  const [haveError, setError] = React.useState('');

  useEffect(() => {
    setInputValue(value);
  }
  ,[value]);

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
        onChange&&onChange(e.target.value);
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
        onChange&&onChange(e.target.value);
        return
      }else{
        setError('');
      }
    }
    if(pattern){
      const custom = e.target.value;
      const validateCustom = new RegExp(pattern);
      if(!validateCustom.test(custom)){
        setError(customMessageError||'Formato no valido');
      }else{
        setError('');
        
      }
    }
    
    onChange&&onChange(e.target.value);
    setInputValue(e.target.value);
    
  }
  const disabled = readonly ? 'disabled' : '';
  return (
    <>
    <div className={["meraki-textfield",`meraki-textfield--${size||'large'}`,`${marginTop?`mt-${marginTop}`:''}`,`${marginBottom?`mb-${marginBottom}`:''}`,`${disabled&&'disabled'}`,`${customClass}`].join(" ")}>
      <label>{label}</label>
      <div className={`meraki-textfield__input ${(error|| haveError) &&'error'}`}>
        {iconLeft&&
        <div className="meraki-button__iconLeft">{iconLeft}</div>}
        <input ref={InputRef}  type={typeInput} maxLength={maxLength} value={inputValue} placeholder={placeholder||''} disabled={readonly}  onChange={(e)=>handleChange(e)}/>
        {iconRight&&
        <div className="meraki-button__iconRight">{iconRight}</div>}
        {password&&
        <div className="meraki-textfield__icon" onClick={()=>setTypeInput(typeInput==='password'?'text':'password')}>
          {typeInput==='password'?<svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7842_490)">
<path fillRule="evenodd" clipRule="evenodd" d="M7.5 11C4.803 11 2.53 9.622 1.096 7.5C2.53 5.378 4.803 4 7.5 4C10.197 4 12.47 5.378 13.904 7.5C12.47 9.622 10.197 11 7.5 11ZM7.5 3C4.308 3 1.656 4.706 0.0760012 7.235C0.0263348 7.31447 0 7.40629 0 7.5C0 7.59371 0.0263348 7.68553 0.0760012 7.765C1.656 10.294 4.308 12 7.5 12C10.692 12 13.344 10.294 14.924 7.765C14.9737 7.68553 15 7.59371 15 7.5C15 7.40629 14.9737 7.31447 14.924 7.235C13.344 4.706 10.692 3 7.5 3ZM7.5 9.5C8.03043 9.5 8.53914 9.28929 8.91421 8.91421C9.28929 8.53914 9.5 8.03043 9.5 7.5C9.5 6.96957 9.28929 6.46086 8.91421 6.08579C8.53914 5.71071 8.03043 5.5 7.5 5.5C6.96957 5.5 6.46086 5.71071 6.08579 6.08579C5.71071 6.46086 5.5 6.96957 5.5 7.5C5.5 8.03043 5.71071 8.53914 6.08579 8.91421C6.46086 9.28929 6.96957 9.5 7.5 9.5Z" fill="#0A2E48"/>
</g>
<defs>
<clipPath id="clip0_7842_490">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.34303 18.782L7.41103 18.264L8.19803 15.325C7.02009 14.8903 5.92528 14.2572 4.96103 13.453L2.80803 15.607L1.39403 14.193L3.54703 12.039C2.33122 10.5827 1.51424 8.83571 1.17603 6.96899L3.14403 6.60999C3.52148 8.68379 4.6147 10.5594 6.23315 11.9099C7.85161 13.2603 9.89265 14 12.0005 14C14.1084 14 16.1494 13.2603 17.7679 11.9099C19.3863 10.5594 20.4796 8.68379 20.857 6.60999L22.825 6.96799C22.4867 8.83516 21.6693 10.5825 20.453 12.039L22.607 14.193L21.193 15.607L19.039 13.453C18.0748 14.2572 16.98 14.8903 15.802 15.325L16.59 18.265L14.658 18.782L13.87 15.842C12.6325 16.0555 11.3676 16.0555 10.13 15.842L9.34303 18.782Z" fill="#0A2E48"/>
</svg>
}
        </div>}
      </div>
    </div>
    {(error || haveError)&&<div className="meraki-error">{error || haveError}</div>}
    </>
  )
}

export default TextField;