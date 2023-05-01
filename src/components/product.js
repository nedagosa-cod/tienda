import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductIMG from '../img/razer_auri.webp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product(props) {
  const [expanded, setExpanded] = React.useState(false);

  const product = props.producto

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
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>
        {Array(product.rating)
        .fill()
        .map((_, i) => (
            <p key={i}>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ver Más"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
