import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../product';
import { useEffect, useState } from 'react'
import { getProductsRequest } from '../../api/task.api.js'

export default function Products() {

  const [products, setProducts] = useState([])
    
  useEffect(()=>{
      async function loadProducts() {
          const response = await getProductsRequest()
          setProducts(response.data)

      }
      loadProducts()
  }, [])

  return (
    <Box  sx={{ flexGrow: 1, padding: '0 80px' }}>
      <Grid container spacing={2}>
        {
          products.map((producto, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Product producto={producto}></Product>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
