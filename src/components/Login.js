import './Login.css';
import imgUser from '../img/user.png';
import MainButton from './MainButton';
import React, { useState, useRef } from 'react';

const Login = () => {

    const btnIn = document.getElementById('in');
    const btnUp = document.getElementById('up');
    
    const password = useRef();
    const [showh, setShowh] = useState('hide');
    const [showv, setShowv] = useState();
    const [varUp, setUp] = useState();
    const [varIn, setIn] = useState();
    const [rePass, setRePass] = useState('hide');
    const [fgPass, setFgPass] = useState();


    const showPass = () => {
        if (showh === 'hide') {
            setShowh('');
            setShowv('hide')
            password.current.type = 'text';

        } else {
            setShowh('hide');
            setShowv('')
            password.current.type = 'password';
        }
    }

    const buttonPress = (event) => {
        event.preventDefault();
        const button = event.target.id;
        switch (button) {
            case 'up':
                setUp('btn__press')
                setIn()
                setRePass()
                setFgPass('hide')
                break;
            case 'in':
                setIn('btn__press')
                setUp()
                setRePass('hide')
                setFgPass()
                break;
            default:
                break;
        }
        
    }
    
    return (
        <>
        <form className='form'>
            <h1 className='form__title'>Welcome</h1>
            <figure className='form__figure'>
                <img src={imgUser} alt="user" />
            </figure>
            <div className="form__bxInput">
                <input id="email" className="form__bxInput--input" type="text" placeholder=" " autoComplete='off'/>
                <label htmlFor="email" className="form__bxInput--label">e-mail</label>
                <i className="fa-solid fa-user user__icon"></i>
            </div>
            <div className="form__bxInput">
                <input id="password" className="form__bxInput--input" type="password" placeholder=" " autoComplete='off' ref={password}/>
                <label htmlFor="password" className="form__bxInput--label">Password</label>
                <i className="fa-solid fa-lock user__icon"></i>
                <div className='form__eye'>
                    <i className={`fa-solid fa-eye eye-icon ${showv}`} onClick={showPass}></i>
                    <i className={`fa-solid fa-eye-slash eye-icon ${showh}`} onClick={showPass}></i>
                </div>
            </div>
            <div className={`form__bxInput ${rePass}`}>
                <input id="rePassword" className="form__bxInput--input" type="password" placeholder=" " autoComplete='off'/>
                <label htmlFor="rePassword" className="form__bxInput--label">Re-Password</label>
                <i className="fa-solid fa-lock user__icon"></i>
                <div className='form__eye'>
                    <i className={`fa-solid fa-eye eye-icon`} onClick={showPass}></i>
                    <i className={`fa-solid fa-eye-slash eye-icon hide`} onClick={showPass}></i>
                </div>
            </div>
            <span className={`form__span ${fgPass}`}><a href="#">Forgot Password</a></span>
            <MainButton />
            <div className='form__sign'>
                <button className={`form__sign--btn btn__up ${varUp}`} id="up" onClick={buttonPress}>Sign Up</button>
                <button className={`form__sign--btn btn__in ${varIn}`} id="in" onClick={buttonPress}>Sign In</button>
            </div>
        </form>
        </>
    );
}
export default Login;