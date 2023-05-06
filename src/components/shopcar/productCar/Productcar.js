import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './productcar.module.css'
import { useStateValue } from '../../../stateProvider';
import { actionTypes } from '../../../reducer';



export default function ProductCar(props) {

  const [{basket}, dispatch] = useStateValue();
  const product = props.producto

  console.log(basket)

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: product.id
  })

  const currency = new Intl.NumberFormat('es-CO', {
    currency: 'COP',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  return (
    <Card
      sx={{
        maxWidth: "90%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 60, objectFit: "contain", width: 60 }}
        image={product.image}
        alt={product.brand}
        
      />
    <Typography variant="h5" color="text.secondary">
        {product.name}
    </Typography>
      <CardActions disableSpacing className={style.CardActions}>
      <Typography variant="h5" color="text.secondary">
        {currency.format(product.price)}
      </Typography>
        <IconButton aria-label="Agregar al carrito" onClick={removeItem}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
