import { useState } from 'react'
import './LoginPages.css'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'

const LoginPages = () => {

    const[email, setEmail]=useState()
    const[password, setPassword]=useState()
   const[passwordError, setPasswordError]=useState()
   const[check, setCheck] = useState(false)

    const onChangeEmail =(event)=>{
        setEmail(event.target.value)
    }

    const onChangePassword = (event)=>{
        const passwordValue = event.target.value
        setPassword(passwordValue)
        if(passwordValue.length >=6) {
            setPasswordError()
        }else{
            setPasswordError("a senha deve conter 6 caracteres")
        }

            
    }

    const handleChange =()=>{
     
        setCheck(!check)
    }

    

    const onSubmit = () =>{
        console.log(email,password)

    }
    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                label= "E-mail"
                name = "emailInput"
                value={email}
                onChange={onChangeEmail}
                />

                <Input 
                label= "Senha"
                type={!check ?'password' : "text"}
                name= "passwordInput"
                value={password}
                onChange={onChangePassword}
                errorMesseger={passwordError}/>


                <div>
                    <Checkbox
                    label='Visualizar senha'
                    value ={check}
                    onChange ={handleChange}
                    />
                    <p></p>
                    
                </div>

               <button onClick={onSubmit}>entrar</button>


                  
            </div>
        </div>
    )
}


export default LoginPages;