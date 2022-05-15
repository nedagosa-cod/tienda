import './Login.css';

const Login = () => {
    return (
        <>
            <div class="input-container ic1">
                <input id="firstname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="firstname" class="placeholder">First name</label>
            </div>
        </>
    );
}

export default Login;