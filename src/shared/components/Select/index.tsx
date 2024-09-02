import React from 'react';
import { SelectProps } from './type';
import Modal from '../Modal';
/**
 * Primary UI component for user interaction
 */
const Select = ({ options, value,heightAndWidthIcon, onChange,label,marginTop,marginBottom,readonly,name,error,placeholder}:SelectProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectValue, setSelectValue] = React.useState(value || placeholder);
    const handleChange = (e:string) => {
      const extractName= options.filter((option)=>option.value===e);
      setSelectValue(extractName[0].label);
        if (onChange) {
            onChange(e);
            setIsOpen(false);
        }
    };
    return (
      <>
      <div id={name} className={`meraki-select ${marginTop?`mt-${marginTop}`:''} ${marginBottom?`mb-${marginBottom}`:''}`}>
        <label htmlFor="">
          {label}
        </label>
        <button className={`meraki-select__content ${(error) &&'error'} ${(readonly) &&'disabled'}`} onClick={()=>setIsOpen(true)}>
          {selectValue}
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.992112 0.46428C1.38264 0.0737556 2.0158 0.0737556 2.40633 0.46428L7.35607 5.41403L12.3058 0.46428C12.6963 0.0737556 13.3295 0.0737556 13.72 0.46428C14.1106 0.854804 14.1106 1.48797 13.72 1.87849L8.06318 7.53535C7.67266 7.92587 7.03949 7.92587 6.64897 7.53535L0.992112 1.87849C0.601588 1.48797 0.601588 0.854804 0.992112 0.46428Z" fill={`${readonly?'#91919c':'#E31C30'}`}/>
          </svg>
        
        </button>
        {(error)&&<div className="meraki-error">{error}</div>}

      </div>
      <Modal title={placeholder} isOpen={isOpen} onClose={()=> setIsOpen(false)} >
        <div className="meraki-select__container">
        {options.map((option) => (
          <button key={option.value} onClick={()=>{handleChange(option.value)}}>
            {option.icon&&<img className="meraki-select__icon" src={option.icon} width={heightAndWidthIcon||20} height={heightAndWidthIcon||20} style={{marginRight:8}}/>}
            {option.label}
            </button>
        ))}
        </div>
        </Modal>
      </>
    );
}
export default Select;
