import Navbar from '../navBar/NavBar'
import styles from './home.module.css'
import Products from '../products/products'

const home = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.container}>
                <Products></Products>
            </main>
        </>
    )
}

export default home;