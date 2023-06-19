const Input = ({label,inputName, errorMesseger, value,onChange, type = "text"}) => {
    return (
        <div>
            
            <div>
                  <label for={inputName}>{label} </label>
                <input
                 type={type}
                 id={inputName}
                 name={inputName}
                  value ={value}
                  onChange={onChange}
                  />
            </div>
                 {errorMesseger ? (
                    <p className='errorMesseger'>{errorMesseger}</p>
                    ) : <></>
                }
        </div>
        
    );
}

export default Input;