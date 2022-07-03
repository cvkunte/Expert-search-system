import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Filtercandidates from '../components/Filtercandidates';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import { baseUrl } from '../baseurls';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';






const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(open);
  };
  const {username, setUsername} = useContext(LoginContext)
  const {firstname, setFirstname} = useContext(LoginContext);
  const {lastname, setLastname} = useContext(LoginContext);
  const {city, setCity} = useContext(LoginContext);
  const {skillInfo, setSkillInfo} = useContext(LoginContext)
  const {totalexp, setTotalexp} = useContext(LoginContext)
  const {auth, setAuth} = useContext(LoginContext)
  const {location, setLocation} = useContext(LoginContext)


  var navigate = useNavigate() 
  const checkProfile = async (event) => {


    // alert("hi .... "+event.target.value)
    var username = event.target.value

    await axios.post(baseUrl+'/getprofile', { username }, { headers: { "authorization" : 'token' , 'Access-Control-Allow-Origin': "*"} })
      .then((res) => {  
          console.log("this is Data from server: ", res);

          if(res.data.status === false){
              alert("Data not found")
          }else if (res.data.status){
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

  const {candidates, setCandidates} = useContext(LoginContext)

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />


        <AppBar sx={{ width:1200 }} style={{background: '#FFFFFF'}}>
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

                <Typography style={{ color:"#DC143C"}} variant="h3" component="div"  sx={{ pr: 20 }}>
                    <Button 
                        color="inherit" 
                        style={{fontSize:20, fontWeight: "bold"}} 
                        onClick={()=>{navigate('/home')}}
                        > Home </Button>
                </Typography>
            </Toolbar>
        </AppBar>
        
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
                }}
              >
              </Toolbar>
              
              <Filtercandidates/>

              <Divider />
            </Drawer>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >

             <Container sx={{ py: 8 }} maxWidth="md" style={{paddingTop:'120px', paddingLeft:'100px'}}>
      
                <Grid container spacing={4}>
                  {candidates.map((candidate) => (
                    <Grid item key={candidate} xs={12} sm={6} md={4}>
                      <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {candidate[1]}
                            </Typography>
                            <Typography>
                              {candidate[0]} 
                            </Typography>
                            <Typography>
                              <Rating
                                name="simple-controlled"
                                value={candidate[2]}
                              />
                            </Typography>
                        </CardContent>
                        <CardActions key={candidate[0]}>
                            <Button value={candidate[0]} 
                                    size="small" 
                                    onClick={ checkProfile }>View Profile
                            </Button>
                        </CardActions>
                      </Card>   
                    </Grid>
                  ))}
                </Grid>
              </Container>                 

                
        </Box>



      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}