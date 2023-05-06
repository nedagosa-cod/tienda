import styles from './footer.module.css'
import imgLogo from '../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <>
        <footer className={styles.footer}>
            <section className={styles.brand_bx}>
                <h2>Tech Store</h2>
                <figure>
                    <img src={imgLogo} alt="logo" />
                </figure>
                <div>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
            </section>
            <section className={styles.brand_bxes}>
                <div>
                    <h2>Contacto</h2>
                    <ul>
                        <li>Correo: techstore_col@techstore.com</li>
                        <li>Redes: @techstore_col</li>
                        <li>WhatsApp: 3123456789</li>
                    </ul>
                </div>
            </section>
            <section className={styles.brand_bxes}>
                <h2>Titulo</h2>
                <ul>
                    <li>Política de cambio</li>
                    <li>Términos del servicio</li>
                    <li>Política de envío</li>
                </ul>
            </section>
        </footer>
        </>
    )
}

export default Footer;