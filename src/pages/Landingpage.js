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


const aboutFunction = (event) => {
    window.location.href = "https://www.lilly.com/who-we-are/about-lilly";
};

const homeFunction = (event) => {
    window.location.href = "https://www.lilly.com/news";
};

const impactFunction = (event) => {
    window.location.href = "https://www.lilly.com/impact/overview";
};



const theme = createTheme({
    palette: {
      mode: 'light' ,
    },
    paperContainer: {
        backgroundImage: `https://source.unsplash.com/random`
    }
});

export default function Home() {
  let navigate = useNavigate(); 
  
  const buildProfile = (event) => {
    // alert("here")
    navigate("/externallogin")
  };

  const showDashboard = (event) => {
    navigate("/login")
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

                    <Button color="inherit" onClick={ aboutFunction }>About</Button>
                    <Button color="inherit" onClick={ homeFunction }>News</Button>
                    <Button color="inherit" onClick={ impactFunction }>Our Impact</Button>

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
             Expert Search
            </Typography> 
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            We made hiring easy
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={showDashboard}> Eli-lilly employee </Button>
              <Button variant="outlined" onClick={buildProfile}> External applicant </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
          </Grid>
        </Container>
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