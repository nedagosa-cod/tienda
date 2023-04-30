import {Link} from 'react-router-dom'
import imgLogo from '../../img/logo.png'
import styles from './NavBar.module.css'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <>
            <header className={styles.header}>
                <figure className={styles.navlogobx}>
                    <img src={imgLogo} alt="logo" />
                </figure>
                <nav className={styles.navbar}>
                    <ul>
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="/list">Catalogo</Link></li>
                        <li><Link to="/cotact">Contacto</Link></li>
                    </ul>
                    <ul className={styles.navbar__uld}>
                        <li><Link to="/sign">Iniciar Sesión</Link></li>
                        <IconButton>
                            <ShoppingCartIcon fontSize='large' sx={{ color: '#ececec'}}/>
                        </IconButton>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;