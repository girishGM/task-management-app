import React, { useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './login.styles.css';

const Login = () => {

    const router = useHistory();
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if(localStorage.getItem('access-token')){
            router.push('/dashboard');
        } 
    })

    const handleChange =(event) =>{
        switch (event.target.name) {
            case 'userId':
                setUserId(event.target.value);
                break;
            case 'userName':
                    setUserName(event.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit =() =>{
        if(userName && userId){
            const payload ={
                userName: userName,
                userId: userId
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            };
            fetch(process.env.REACT_APP_LOGIN_API, requestOptions).then(response => response.json())
              .then(res => {
                let token = res.result && res.result.token;
                if(token){
                    localStorage.setItem('access-token',token);
                    localStorage.setItem('user-name', userName);
                    router.push('/dashboard');
                }else{
                    setErrorMessage('Invalid user credentials');
                }
              }
            );
        }
    }

    return (
        <div className='login-wrapper'>
        <div className='login-container'>
        <form >
            <h5>Login</h5>
            {errorMessage && <label className='alert alert-danger'>{errorMessage}</label>}
            <div className="form-group">
                <input type="text" name='userId' onChange={handleChange} className="form-control" placeholder="Id" />
            </div>

            <div className="form-group">
                <input type="text" name='userName' onChange={handleChange} className="form-control" placeholder="Name" />
            </div>

            <button type="button" onClick={handleSubmit} disabled={!(userName && userId)} className="btn btn-primary btn-block">Login</button>
            
        </form>
        </div>
        </div>
    );
}

export default Login;