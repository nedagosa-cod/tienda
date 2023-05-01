import Navbar from "../navBar/NavBar"
import style from "./shopcar.module.css"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useStateValue } from "../../stateProvider";
import ProductCar from "./productCar/Productcar";

const Shopcar = () => {
    const [{basket}] = useStateValue();
    return (
        <>
        <header className={style.header}>
            <Navbar></Navbar>
            <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        basket?.map((product) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                <ProductCar producto={product}></ProductCar>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </header>
        </>
    )
}

export default Shopcar