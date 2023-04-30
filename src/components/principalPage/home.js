import Product from '../product'
import Navbar from '../navBar/NavBar'
import styles from './home.module.css'

const home = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.container}>
                <Product></Product>
            </main>
        </>
    )
}

export default home;