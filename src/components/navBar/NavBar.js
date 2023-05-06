import { Link } from 'react-router-dom'
import imgLogo from '../../img/logo.png'
import styles from './NavBar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

import { useStateValue } from '../../stateProvider';
import { auth } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const history = useNavigate()
    const [{basket, user}, dispatch] = useStateValue();

    const fnSignOut = () => {
        if (user) {
            auth.signOut()
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: []
            })
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            })
            history('/')
        }
    }

    return (
        <>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.logolink}>
                    <figure className={styles.navlogobx}>
                        <img src={imgLogo} alt="logo" />
                    </figure>
                </Link>
                <ul className={styles.navbar__ull}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/list">Catalogo</Link></li>
                    <li><Link to="/cotact">Contacto</Link></li>
                </ul>
                <ul className={styles.navbar__uld}>
                    <li>
                        <Link to="/account">
                            {user ? user.split('@')[0] : ''}
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign" onClick={fnSignOut} className={styles.button}>
                            {user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                        </Link>
                    </li>
                    <li>
                    <Link to="/shop_car">
                        <Badge badgeContent={basket?.length} color="secondary" fontSize="large">
                                <ShoppingCartIcon fontSize='large' color='light' />
                        </Badge>
                    </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;