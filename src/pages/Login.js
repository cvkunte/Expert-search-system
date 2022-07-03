
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import validator from 'validator';
import { baseUrl } from '../baseurls';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Login(){

    let navigate = useNavigate(); 

    const {username, setUsername} = useContext(LoginContext)

    const {auth, setAuth} = useContext(LoginContext)
    const {token, setToken} = useContext(LoginContext)
    const {userId, setUserId} = useContext(LoginContext)
    const [tokenState, setTokenState] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();
    
        const data = new FormData(event.currentTarget);
        var email = data.get('email')
        var password = data.get('password')
            
        if (!validator.isEmail(email)) {
            setLoading(false)            
            alert('Email or password is not correct! \n- Email format (xyz@domain.com)\n- password length should be >4')
        }
        else if(!email.endsWith('@lilly.com')) {
            alert("Not an internal emial address")
        }
        else{  
            const input = { email, password };
            setUsername(email)
            console.log("email: "+email)
            console.log("Username: "+username)
            console.log("Username:"+username+ "password:"+password )
            console.log(input)
            await axios.post(baseUrl+'/login', { username, password }, { headers: { "authorization" : 'token' , 'Access-Control-Allow-Origin': "*"} })
            .then((res) => {  
                setLoading(false)
                console.log("this is Data : ", res);
    
                if(res.data.status === false){
                    setLoading(false)
                    alert("SIGN UP PLEASE")
                }else if (res.data.status){
                  setAuth(true)  
                  navigate("/home")  
                }
                else{
                    setLoading(false)
                    alert("User Not Authenticated")
                }
            })
            .catch(err =>{
                console.log("Error is : ", err)
                navigate("/error")
            });
        }

        
    };


 return(
     <React.Fragment>
         <Box pt = '50'>
            <AppBar position="static"  pb='50' style={{ paddingTop: '40px', paddingBottom: '10px', height: 80, pb: 50, background: '#FFFFFF', pb:10 }}>
            <Toolbar >
                <Typography variant="h6" component="div" sx={{ pl: 10, flexGrow: 1 }}>
                    <Card style={{width: 180, height:80}}>
                        <CardActionArea>
                            <CardMedia
                                width= '33'
                                height="70"
                                component="img"
                                image= {require('./lilly.png')}
                                style={{width: 150, height:80}}
                            />
                        </CardActionArea>
                    </Card>               
                </Typography>
            </Toolbar>
        </AppBar>
      </Box>
      <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                      Sign in
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="email"
                      name="email"
                      autoComplete="current-email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    //   disabled= {loading}
                    >
                    Sign In
                    </Button>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={()=>navigate('/')}
                    >
                    Home
                    </Button>
                
                
                    <Grid container>
                      <Grid item>
                        <Link href="/register" variant="body2">
                          {/* {"Don't have an account? Sign Up"} */}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>              
              </Box>
          </Container>

     </React.Fragment>
 );
}

export default Login;