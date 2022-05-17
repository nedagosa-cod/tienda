import {Link} from 'react-router-dom'

const home = () => {
    return (
        <>
            <h1>Main Page</h1>
            <Link to="/login">Go Login</Link>
        </>
    )
}

export default home;