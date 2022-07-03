import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Addskills from './Addskills';
import Personal from './Personal';

import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import axios from 'axios';
import { baseUrl } from '../baseurls';



const theme = createTheme();

export default function Checkout() {
  const {username, setUsername} = useContext(LoginContext)
  const {firstname, setFirstname} = useContext(LoginContext)
  const {lastname, setLastname} = useContext(LoginContext)
  const {city, setCity} = useContext(LoginContext)
  const {skillInfo, setSkillInfo} = useContext(LoginContext)
  const {totalexp, setTotalexp} = useContext(LoginContext)

let navigate = useNavigate(); 
    
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async (event) => {


    setActiveStep(1);
    // alert("active step " + activeStep)

    console.log(activeStep, typeof(activeStep))
    // if (activeStep === 1){
      // alert("Coming to submit" + firstname + lastname + skillInfo + city + totalexp)

      // const input = { email, password };
      console.log("My totoal experience is "+ totalexp)
      // alert("Coming here" + username+ firstname+ lastname+ city + totalexp+ skillInfo)
      await axios.post(baseUrl+'/buildprofile', { username, firstname, lastname, city, totalexp, skillInfo }, { headers: { "authorization" : 'token' , 'Access-Control-Allow-Origin': "*"} })
      .then((res) => {  
          console.log("this is Data : ", res);

          if(res.data.status === false){
              alert("SIGN UP PLEASE")
          }else if (res.data.status){
              // alert("Built profile")
          }
          else{
              alert("User Not Authenticated")
          }
      })
      .catch(err =>{
          console.log("Error is : ", err)
          navigate("/error")
      });
  };

  const goHome = () => {
    navigate('/home');
  };

  return (
      
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static"  pb='20' style={{ paddingTop: '40px', paddingBottom: '10px', height: 80, pb:20, background: '#FFFFFF', pb:10 }}>
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

        <Container component="main" sx={{ mb: 4, width:900 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                  Join us 
                </Typography>

                <React.Fragment>
                {activeStep === 1 ? (
                    <React.Fragment>
                      <Typography align='center' variant="h6" gutterBottom>
                        Account create successfully..
                      </Typography>
                      <Typography align='center' variant="h6" gutterBottom>
                          <Button onClick={goHome}>Home</Button>
                      </Typography>
                    </React.Fragment>
                ) : (
                    <div>
                      <Container component="main" sx={{ mb: 4, width:800 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                          <Personal></Personal>
                        </Paper>
                      </Container>
                      <Container component="main" sx={{ mb: 4, width:800 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Addskills></Addskills>
                        </Paper>
                      </Container>

                      <Container component="main" sx={{ mb: 2, width:800 }}>
                        <Paper align="center" variant="outlined">
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ width:600, mt: 1, ml: 1, mb:1 }}
                              >
                              Submit form
                              </Button>                        
                            </Paper>
                      </Container>

                    </div>

                  )}
                </React.Fragment>
            </Paper>
        </Container>
    </ThemeProvider>
  );
}