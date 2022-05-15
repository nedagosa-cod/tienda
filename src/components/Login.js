import './Login.css';
import imgUser from '../img/user.png';

const Login = () => {
    return (
        <>
        <div className='form'>
            <h1 className='form__title'>Welcome</h1>
            <figure className='form__figure'>
                <img src={imgUser} alt="user" />
            </figure>
            <div className="form__bxInput">
                <i className="fa-solid fa-user user__icon"></i>
                <input id="email" className="form__bxInput--input" type="text" placeholder=" "/>
                <label htmlFor="email" className="form__bxInput--label">e-mail</label>
            </div>
            <div className="form__bxInput">
                <i className="fa-solid fa-user user__icon"></i>
                <input id="password" className="form__bxInput--input" type="password" placeholder=" " />
                <label htmlFor="password" className="form__bxInput--label">Password</label>
            </div>
            <span className='form__span'><a href="#">Forgot Password</a></span>
        </div>
        </>
    );
}

export default Login;