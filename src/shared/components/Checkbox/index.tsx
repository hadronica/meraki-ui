import React from 'react';
import { CheckboxProps } from './type';

const Checkbox = ({  checked, onClick,children,marginTop,error,marginBottom }:CheckboxProps) => {
  const [haveError, setError] = React.useState('');

  const handleClick = () => {
    onClick(!checked);
    if(error){
      setError(error);
    }
  }
  return (
    <>
    <div className={`meraki-checkbox ${marginTop?`mt-${marginTop}`:''} ${marginBottom?`mb-${marginBottom}`:''}`}>
      <div className="meraki-checkbox__check">
        <input type="checkbox" id="checkbox" defaultChecked={checked}/>
        <label htmlFor="checkbox" onClick={()=>handleClick()} className={checked?'checked':''}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.4668 3.19423C13.6425 3.37004 13.7412 3.60845 13.7412 3.85705C13.7412 4.10564 13.6425 4.34405 13.4668 4.51986L6.43988 11.5467C6.34702 11.6396 6.23677 11.7133 6.11543 11.7636C5.99409 11.8138 5.86403 11.8397 5.73269 11.8397C5.60135 11.8397 5.4713 11.8138 5.34996 11.7636C5.22862 11.7133 5.11837 11.6396 5.0255 11.5467L1.53425 8.05611C1.44471 7.96963 1.37329 7.86618 1.32416 7.7518C1.27503 7.63742 1.24916 7.5144 1.24808 7.38992C1.247 7.26544 1.27072 7.14199 1.31786 7.02678C1.365 6.91156 1.43461 6.80689 1.52263 6.71886C1.61066 6.63084 1.71533 6.56123 1.83055 6.51409C1.94576 6.46695 2.06921 6.44323 2.19369 6.44431C2.31817 6.44539 2.44119 6.47125 2.55557 6.52039C2.66995 6.56952 2.7734 6.64094 2.85988 6.73048L5.73238 9.60298L12.1405 3.19423C12.2276 3.10711 12.3309 3.03801 12.4447 2.99085C12.5585 2.9437 12.6805 2.91943 12.8036 2.91943C12.9268 2.91943 13.0488 2.9437 13.1625 2.99085C13.2763 3.03801 13.3797 3.10711 13.4668 3.19423Z" fill="white"/>
          </svg>
        </label>
      </div>
      <div className="meraki-checkbox__text">{children}</div>
    </div>
        {(error || haveError)&&<div className="meraki-error">{error || haveError}</div>}
        </>
  );

}

export default Checkbox;