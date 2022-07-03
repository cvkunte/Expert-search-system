import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { height } from '@mui/system';
import { Navigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";



function preventDefault(event) {
  event.preventDefault();
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontWeight: "bold",
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    //   backgroundColor: '#fad0c3'
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
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
    setOpen(!open);
  };
  let navigate = useNavigate(); 


  const {firstname, setFirstname} = useContext(LoginContext);
  const {lastname, setLastname} = useContext(LoginContext);
  const {city, setCity} = useContext(LoginContext);
  const {skillInfo, setSkillInfo} = useContext(LoginContext)
  const {totalexp, setTotalexp} = useContext(LoginContext)
  const {auth, setAuth} = useContext(LoginContext)

  return (
    // <ThemeProvider theme={mdTheme}>
    <React.Fragment>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
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
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar> */}
        <AppBar style={{background: '#FFFFFF'}}>
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

                <Typography style={{ color:"#DC143C"}} variant="h3" component="div"  sx={{ pr: 51 }}>
                    <Button 
                        color="inherit" 
                        style={{fontSize:20, fontWeight: "bold"}} 
                        onClick={()=>{navigate('/home')}}
                        > Home </Button>
                </Typography>
            </Toolbar>
        </AppBar>
        
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
           
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={9}>
              <Paper  sx={{ maxWidth: 860, display: 'flex', flexDirection: 'column', height:50 }}>
                <h3 align='center'> Personal Information </h3>
              </Paper>
            </Grid>
            <br></br>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9} paddingTop='2'>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  
                  <Table  sx={{ maxWidth: 800}} align='center' aria-label="caption table">

                        <TableBody aria-label="customized table">

                            <StyledTableRow>
                            <StyledTableCell align="center">Firstname</StyledTableCell>
                            <StyledTableCell align="left">{firstname}</StyledTableCell>

                            </StyledTableRow>

                            <StyledTableRow>
                            <StyledTableCell align="center">Lastname</StyledTableCell>
                            <StyledTableCell align="left">{lastname}</StyledTableCell>

                            </StyledTableRow>


                            <StyledTableRow>
                            <StyledTableCell align="center">Current working location</StyledTableCell>
                            <StyledTableCell align="left">{city}</StyledTableCell>

                            </StyledTableRow>


                            <StyledTableRow>
                            <StyledTableCell align="center">Total experience</StyledTableCell>
                            <StyledTableCell align="left">{totalexp}</StyledTableCell>

                            </StyledTableRow>

                        </TableBody>
                        </Table>
          
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    width: 240,
                  }}
                >
                    <div>
                        <img align='center'  style={{ width: 240, height: 240, pr:'300px' }} src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}/>
                    </div>
                </Paper>
              </Grid>

              <Grid item xs={9}>
                <Paper  sx={{ pb:3, display: 'flex', flexDirection: 'column', height:50 }}>
                  <h3 align='center'>My skills</h3>
                </Paper>
            </Grid>
              <Grid item xs={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Table aria-label="caption table" align='center'
                  sx={{
                    paddingBottom: '50px',
                    paddingLeft: '500px',
                    width: 800,
                    height: 240,
                    pb: 6}}
                  >

                  <TableBody aria-label="customized table">

                    <StyledTableRow>
                      <StyledTableCell component="th"> Skills </StyledTableCell>
                      <StyledTableCell align="right"> Number of projects</StyledTableCell>
                      <StyledTableCell align="right"> Experience in skill </StyledTableCell>

                    </StyledTableRow>
                  {skillInfo.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row"> {row[1]} </StyledTableCell>
                      <StyledTableCell align="right"> {row[2]} </StyledTableCell>
                      <StyledTableCell align="right"> {row[3]} </StyledTableCell>

                    </StyledTableRow>
                  ))}
                  </TableBody>
              </Table>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>

    </React.Fragment>

    // </ThemeProvider>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}