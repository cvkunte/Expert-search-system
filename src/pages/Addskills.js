
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const skills = [
  'C++',
  'Java',
  'Python',
  'ReactJS',
  'AngularJS',
  'HTML/CSS',
  'Bootstrap',
  'NodeJS',
  'Springboot',
  'Flask',
  'RestAPI',
  'Docker',
  'kubernetes',
  'PowerBI',
  'Tablue',
  'Data Science',
];

export default function Main() {

  let navigate = useNavigate(); 


  const theme = useTheme();

  const [personSkill, setPersonSkill] = React.useState();
  const [skillExperience, setSkillExperience] = React.useState();
  const [skillProject, setSkillProject ] = React.useState();
  const {skillInfo, setSkillInfo} = useContext(LoginContext)
  const {totalexp, setTotalexp} = useContext(LoginContext)
  const {username, setUsername} = useContext(LoginContext)

  const addSkill = (event) => {    

    let mapped = skillInfo.map((ele) => ele.skill);
    let found = mapped.includes(personSkill);
    console.log("found it? ", found);

    var thisproject = parseInt(skillProject)
    var thisexp = parseInt(skillExperience)

    if (!isNaN(thisproject) && !isNaN(thisexp) && !found){
      setSkillInfo([...skillInfo, [ username, personSkill, thisproject, thisexp]])
      console.log("Skill array", skillInfo)
    }
    else{
      alert("Enter valid input")
    }

    console.log("Skills are :",skillInfo)

  };

  const handleProject = (event) => {
    setSkillProject(event.target.value);
  };

  function deleteRow(re_skill){
    console.log("Current skill set ", skillInfo)
    var newList = skillInfo.filter((item) => item[1] !== re_skill);
    console.log("Updated  skill ", skillInfo)
    console.log("Updated  New skill ", newList)
    setSkillInfo(newList)
  };

  const handleSkill = (event) => {
    setPersonSkill(event.target.value);
  };

  const handleTotalexp = (event) => {
    setTotalexp(event.target.value);
  };

  const handleExperience = (event) => {
    setSkillExperience(event.target.value);
  };

  return (

      <div>
        <Grid item xs={3} width='400px' paddingBottom='20px'>
            <TextField id="outlined-basic" label="Enter years experience " variant="outlined" onChange={ handleTotalexp }/>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={personSkill}
                    label="Skill"
                    onChange={handleSkill}
                    >
                      {skills.map((row) => (
                        <MenuItem value={row}>{row}</MenuItem>
                      ))}   
                    </Select>
                </FormControl>
            </Grid>
            
            <Grid item xs={3}>
                <TextField id="outlined-basic" label="Projects" variant="outlined" onChange={handleProject}/>
            </Grid>
            
            <Grid item xs={3} style={{ width: 50, height:50}}>            
                <TextField id="outlined-basic" label="Experience" variant="outlined" onChange={handleExperience}/>
            </Grid>
            <Grid item xs={2} style={{paddingLeft: '60px'}}>
                <Button height='20' variant="contained" onClick={ addSkill } style={{ width: 50, height:50}}> Add </Button>
            </Grid>
        </Grid>
        
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 450 }} aria-label="customized table">
              <TableBody>
                {skillInfo.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.skill} {row[1]}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.project} {row[2]}</StyledTableCell>
                    <StyledTableCell align="right">{row.experience} {row[3]}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Button variant="outlined" onClick={() => deleteRow(row[1])}> X </Button> 
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
  );
}