import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import axios from 'axios';
import { baseUrl } from '../baseurls';



const theme = createTheme({
    palette: {
      mode: 'light' ,
    },
    paperContainer: {
        backgroundImage: `https://source.unsplash.com/random`
    }
  });


export default function Home() {

  const {username, setUsername} = useContext(LoginContext)
  const {firstname, setFirstname} = useContext(LoginContext);
  const {lastname, setLastname} = useContext(LoginContext);
  const {city, setCity} = useContext(LoginContext);
  const {skillInfo, setSkillInfo} = useContext(LoginContext)
  const {totalexp, setTotalexp} = useContext(LoginContext)
  const {auth, setAuth} = useContext(LoginContext)
  const {candidates, setCandidates} = useContext(LoginContext)


  let navigate = useNavigate(); 

  const buildProfile = async(event) => {

    await axios.post(baseUrl+'/getprofile', { username }, { headers: { "authorization" : 'token' , 'Access-Control-Allow-Origin': "*"} })
      .then((res) => {  
          console.log("this is Data : ", res);

          if(res.data.status === false){
              alert("Data not found")
          }else if (res.data.status){
              // alert("Here")
              setFirstname(res.data.firstname)
              setLastname(res.data.lastname)
              setCity(res.data.city)
              setTotalexp(res.data.experience)
              setSkillInfo(res.data.skills)
              console.log(skillInfo)
              // alert("got data")
              
            }
          else{
              alert("Can't connect")
          }
      })
      .catch(err =>{
          console.log("Error is : ", err)
          navigate("/error")
      });

    navigate("/buildprofile")
  };

  const showDashboard = (event) => {
    navigate("/dashboard")
  };

  const showProfile = async(event) => {
    // alert("Coming to profile")
      await axios.post(baseUrl+'/getprofile', { username }, { headers: { "authorization" : 'token' , 'Access-Control-Allow-Origin': "*"} })
      .then((res) => {  
          console.log("Response received : ", res);
          console.log("Response data : ", res.data);
          console.log("Response status : ", res.data.status);
          console.log("Auth value : ", auth);
          

          if(res.data.status === false){
              alert("Data not found")
          }else if (res.data.status){
            // alert("In profile")
              setFirstname(res.data.firstname)
              setLastname(res.data.lastname)
              setCity(res.data.city)
              setTotalexp(res.data.experience)
              setSkillInfo(res.data.skills)
              navigate("/profiles")
          }
          else{
              alert("Can't connect")
          }
      })
      .catch(err =>{
          console.log("Error is : ", err)
          navigate("/error")
      });
  };

  const handleLogout = (event) => {
    setAuth(false)
    setFirstname("")
    setLastname("")
    setCity("")
    setSkillInfo([])
    setTotalexp("")
    setUsername("")
    setCandidates([])
    navigate("/Landingpage")
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box pt = '50' sx={{ flexGrow: 1 }}>
            <AppBar position="static"  pb='50' style={{ paddingTop: '40px', paddingBottom: '100px', height: 80, pb:50, background: '#FFFFFF', pb:20 }}>
                <Toolbar >
                <Typography variant="h6" component="div" sx={{ pl: 10, flexGrow: 1 }}>
                    <Card style={{width: 180, height:80}}>
                        <CardActionArea href="https://www.lilly.com/">
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

                <Typography style={{fontSize:'10', color:"#DC143C"}} align="right" variant="h6" component="div"  sx={{ fontSize:40, pr: 10, flexGrow: 1 }}>


                    <Button color="inherit">{ username }</Button>
                    <Button color="inherit" onClick={ showProfile } >Profile</Button>
                    <Button color="inherit" onClick={ handleLogout }>Logout</Button>

                </Typography>
                
                </Toolbar>
            </AppBar>
        </Box>
      <main>
        {/* Hero unit */}
        <Divider  variant="middle" />
        <br/>

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              fontSize= {30}
              align="center"
              color="text.primary"
              gutterBottom
            >
             Welcome to Eli-lilly Internal Job Rotation 
            </Typography> 
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            The brick walls are there for a reason. The brick walls are not there to keep us apart.
             It shows us how broadly we are distribued but still united.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={showDashboard}>Find Candidates</Button>
              <Button variant="outlined" onClick={buildProfile}>Build portfolio</Button>
            </Stack>
          </Container>
        </Box>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Credits
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Luddy school of informatics, indiana university - bloomington
        </Typography> 
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}