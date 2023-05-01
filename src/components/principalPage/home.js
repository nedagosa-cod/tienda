import Navbar from '../navBar/NavBar'
import styles from './home.module.css'
import Products from '../products/products'
import SliderImages from '../carousel/Carousel.js'

const Home = () => {

    return (
        <>
            <header className={styles.header}>
                <Navbar></Navbar>
                <SliderImages />
            </header>
            <main className={styles.container}>
                <Products></Products>
            </main>
        </>
    )
}

export default Home;