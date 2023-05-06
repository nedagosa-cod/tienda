import Navbar from '../navBar/NavBar'
import styles from './home.module.css'
import Products from '../products/products'
import SliderImages from '../carousel/Carousel.js'

import logoRazer from '../../img/razer logo.png'
import logoCorsair from '../../img/logo_corsair.png'
import logoLogitech from '../../img/logitech_logo.png'
import logoRedragon from '../../img/logo_redragon.png'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Home = () => {

    return (
        <>
            <header className={styles.header}>
                <Navbar></Navbar>
                <SliderImages />
            </header>
            <main className={styles.container}>
                <section className={styles.brandsbx}>
                    <h1>Encuentra desde cualquier periferico a cualquier marca!</h1>
                    <Box  sx={{ flexGrow: 1, width: '100%'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4} lg={3} key="1">
                                <figure>
                                    <img src={logoRazer} alt="" />
                                </figure>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} key="2">
                                <figure>
                                    <img src={logoCorsair} alt="" />
                                </figure>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} key="3">
                                <figure>
                                    <img src={logoLogitech} alt="" />
                                </figure>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} key="4">
                                <figure>
                                    <img src={logoRedragon} alt="" />
                                </figure>
                            </Grid>
                        </Grid>
                    </Box>
                </section>
                <Products></Products>
            </main>
        </>
    )
}

export default Home;