import './Login.css';
import imgUser from '../img/user.png';
import MainButton from './MainButton';

const Login = () => {
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
                <input id="password" className="form__bxInput--input" type="password" placeholder=" " autoComplete='off'/>
                <label htmlFor="password" className="form__bxInput--label">Password</label>
                <i className="fa-solid fa-user user__icon"></i>
            </div>
            <span className='form__span'><a href="#">Forgot Password</a></span>
            <MainButton />
        </form>
        </>
    );
}

export default Login;