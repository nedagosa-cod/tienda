import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './navBar/NavBar';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const theme = createTheme();


export default function SignIn() {

    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            history('/')
            console.log(userCredential)
        })
        .catch((error) => {
            alert(error.message)
        })
  };
  


  return (
    <ThemeProvider theme={theme}>
        <Navbar></Navbar>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/foto-gratis/controlador-sujecion-manos-alto-angulo_23-2149829169.jpg?w=740&t=st=1683309314~exp=1683309914~hmac=052e37873688619b6943a99828f52a3b10972e9549932dc7a8cfcc3917cafd1a)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
            sx={{
                marginTop: 8,
                padding: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Registrarse
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellidos"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={email}
                    onChange={e=>{setEmail(e.target.value)}}
                    required
                    fullWidth
                    id="email"
                    label="Dirección de Correo"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={password}
                    onChange={e=>{setpassword(e.target.value)}}
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Quiero recibir información de nuevos productos, ofertas y promociones"
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Registrarse
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/sign" variant="body2" fontSize={12}>
                    Ya tienes una cuenta? Ingresa...
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}