import Navbar from "../navBar/NavBar"
import style from "./shopcar.module.css"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useStateValue } from "../../stateProvider";
import ProductCar from "./productCar/Productcar";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { getBasketTotal } from "../../reducer";


const Shopcar = () => {
    const [{basket}] = useStateValue();

    const currency = new Intl.NumberFormat('es-CO', {
        currency: 'COP',
        style: 'currency',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
      });

    return (
        <>
        <header className={style.header}>
            <Navbar></Navbar>
            <div className={style.bx_title}>
                <h1>CARRITO DE COMPRAS</h1>
            </div>
            <Box className={style.firstBox} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className={style.Grid}>
                    {
                        basket?.map((product, i) => (
                            <Grid item xs={12} sm={12} md={12} lg={12} key={i}>
                                <ProductCar producto={product}></ProductCar>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <Box  sx={{ flexGrow: 1, margin: "auto", width: "40%"  }}>
                <Grid container spacing={0} className={style.GridVal}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div>
                            <p>Cantidad: {basket.length}</p>
                            <h1>Total Productos</h1>
                            <div>
                                <span>{currency.format(getBasketTotal(basket))}</span>
                            </div>
                        </div>
                        <IconButton aria-label="Agregar al carrito" color="inherit" href='/checkout'>
                            Realizar Compra
                            <AddShoppingCartIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </header>
        </>
    )
}

export default Shopcar