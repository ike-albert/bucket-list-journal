import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router";
import { useToken } from "../auth/useToken";


export const SignUpPage = () =>{
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [userNameValue, setuserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        const response = await axios.post('/api/signup', {
            username: userNameValue,
            email: emailValue,
            password: passwordValue,
        });
        
        const {token} = response.data;
        setToken(token);
        history.push('/'); //Home route
        alert('Sign Up Clicked');
    }
    return(
        <div className="content=container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={userNameValue}
                onChange={e => setuserNameValue(e.target.value)}
                placeholder="username"/>
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="random@gmail.com"/>
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="confirm password" />
            <hr/>
            <button
                disabled={
                    !userNameValue || !emailValue ||!passwordValue||
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</button>
            <button onClick={() => history.push('/login')}>Already have an account? Login</button>

        </div>
    );
}