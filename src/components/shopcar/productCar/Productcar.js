import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';



export default function ProductCar(props) {

  const [expanded, setExpanded] = React.useState(false);
  const product = props.producto
  console.log('hola',product)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currency = new Intl.NumberFormat('es-CO', {
    currency: 'COP',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
            <Typography
                variant='h5'
                color='textSecondary'
            >{currency.format(product.price)}</Typography>
        }
        title={product.name}
        subheader={product.brand}
      />
      <CardMedia
        component="img"
        sx={{ height: 194, objectFit: 'contain' }}
        image={product.image}
        alt={product.brand}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar al carrito">
          <AddShoppingCartIcon fontSize='large' />
        </IconButton>
        {Array(product.rating)
        .fill()
        .map((_, i) => (
            <p key={i}>&#11088;</p>
        ))}
        <IconButton aria-label="Agregar al carrito">
          <DeleteIcon fontSize='large' />
        </IconButton>
      </CardActions>
    </Card>
  );
}
