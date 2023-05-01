import { Link } from 'react-router-dom'
import imgLogo from '../../img/logo.png'
import styles from './NavBar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useStateValue } from '../../stateProvider';

const Navbar = () => {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket?.length)
    return (
        <>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.logolink}>
                    <figure className={styles.navlogobx}>
                        <img src={imgLogo} alt="logo" />
                    </figure>
                </Link>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/list">Catalogo</Link></li>
                    <li><Link to="/cotact">Contacto</Link></li>
                </ul>
                <ul className={styles.navbar__uld}>
                    <li><Link to="/sign">Iniciar Sesión</Link></li>
                    <Link to="/shop_car">
                        <Badge badgeContent={basket?.length} color="secondary" fontSize="large">
                                <ShoppingCartIcon fontSize='large' color='light' />
                        </Badge>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;