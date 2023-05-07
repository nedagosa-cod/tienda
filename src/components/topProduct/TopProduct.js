
import * as React from 'react';
import { Box, Grid, IconButton } from '@mui/material'
import styles from './topProduct.module.css'
import { useEffect, useState } from 'react'
import { getProductsRequest } from '../../api/task.api.js'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { actionTypes } from '../../reducer';
import { useStateValue } from '../../stateProvider';

const TopProduct = () => {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();
    const [products, setProducts] = useState([])

    const currency = new Intl.NumberFormat('es-CO', {
        currency: 'COP',
        style: 'currency',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
      });

    const addToBasket = () => {
        dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
            id: products[4].id,
            brand: products[4].brand,
            name: products[4].name,
            price: products[4].price,
            image: products[4].image,
            rating: products[4].rating,
            description: products[4].description
          }
        })
      }

    useEffect(()=>{
        async function getProduct(){
            const response = await getProductsRequest()
            setProducts(response.data)
        }
        getProduct()
    }, [])
    return (
        <section className={styles.topProduct_bx}>
            <Box  className={styles.Box} sx={{ flexGrow: 1}}>
                <Grid className={styles.BigGrid} container spacing={2}>
                    <Grid className={styles.Grid} item xs={12} sm={12} md={6} lg={6} key="1">
                        <figure>
                            <img src={products.length ? products[4].image : ''} alt='Product Top'/>
                        </figure>
                    </Grid>
                    <Grid className={styles.content}item xs={12} sm={12} md={6} lg={6} key="2">
                        <h1> 
                            {
                                products.length ? products[4].name : ''
                            }
                        </h1>
                        <h2>
                            {
                                products.length ? products[4].brand : ''
                            }
                        </h2>
                        <span>
                            {
                                products.length ? currency.format(products[4].price) : ''
                            }                            
                        </span>
                        <p>
                            {
                                products.length ? products[4].description : ''
                            }
                        </p>
                        <IconButton className={styles.Button} aria-label="Agregar al carrito" color="inherit" onClick={addToBasket}>
                            Realizar Compra
                            <AddShoppingCartIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default TopProduct