import React, { useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../baseurls';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';




export default function Filter() {


  let navigate = useNavigate()


  const[statuscpp, setStatuscpp] = useState(false)
  const[statuspython, setStatuspython] = useState(false)
  const[statusjava, setStatusjava] = useState(false)
  const[statusreact, setStatusreact] = useState(false)
  const[statusangular, setStatusangular] = useState(false)
  const[statushtml, setStatushtml] = useState(false)
  const[statusbootstrap, setStatusbootstrap] = useState(false)
  const[statusnode, setStatusnode] = useState(false)
  const[statusflask, setStatusflask] = useState(false)
  const[statusspringboot, setStatusspringboot] = useState(false)
  const[statusrest, setStatusrest] = useState(false)
  const[statusdocker, setStatusdocker] = useState(false)
  const[statuskuber, setStatuskuber] = useState(false)
  const[statusds, setStatusds] = useState(false)
  const[statuspowerbi, setStatuspowerbi] = useState(false)
  const[statustablue, setStatustablue] = useState(false)
  // const[location, setLocation] = useState(false)
  
  const{candidates, setCandidates} = useContext(LoginContext)
  const[info, setInfo] = useState(false)
  const{location, setLocation} = useContext(LoginContext)




  function getfilters(){
    const skillset = [
                  {'C++': statuscpp,
                  'Python': statuspython,                  
                  'Java': statusjava,
                  'ReactJS': statusreact, 
                  'Angular': statusangular,
                  'HTML/CSS': statushtml,
                  'Bootstrap': statusbootstrap,
                  'Flask': statusflask,
                  'Springboot': statusspringboot,
                  'NodeJS': statusnode,
                  'RestAPI': statusrest,
                  'Docker': statusdocker,
                  'Kubernetes': statuskuber,
                  'PowerBI': statuspowerbi,
                  'Tableau': statustablue,
                  'DataScience': statusds}
                ];
    return skillset
  }

  const handleFilter = async(event) => {
    
    setCandidates([""])
    var skillsrequired = getfilters()
    console.log(skillsrequired)
    
    await axios.post(baseUrl+'/getcandidates',  { skillsrequired, location }, 
                                                { headers: { "authorization" : 'token' , 
                                                            'Access-Control-Allow-Origin': "*"} })
    .then((res) => {  
        if(res.data.status === false){
            alert("Data not received")
        }else if (res.data.status){
            setCandidates([""])
            setCandidates(res.data.candidates)
            // console.log("candidates are " + candidates)
        }
        else{
          navigate("/dashboard")
        }
    })
    .catch(err =>{
        console.log("Error is : ", err)
        navigate("/error")
    });
  };

  return (

        <React.Fragment>
          <Button onClick={handleFilter}> Filter Candidates </Button>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 10, flexGrow: 1, maxWidth: 500, overflow: 'auto' }}
          >

              <TreeItem nodeId="Languages" label="Languages">
                <FormGroup style={{ paddingLeft: '18px' }}>
                      <Typography
                      fontSize= {12}
                      >
                          <FormControlLabel control={<Checkbox checked={statuscpp} label="ReactJS" onClick={()=> setStatuscpp(!statuscpp)}/>} label="C++" /><br/>
                          <FormControlLabel control={<Checkbox checked={statuspython} label="ReactJS" onClick={()=> setStatuspython(!statuspython)}/>} label="Python"/><br/>
                          <FormControlLabel control={<Checkbox checked={statusjava} label="ReactJS" onClick={()=> setStatusjava(!statusjava)}/>} label="Java"/><br/>
                      </Typography>
                </FormGroup>

            </TreeItem>

            <TreeItem nodeId="Frontend" label="Frontend">
              <FormGroup style={{ paddingLeft: '18px' }}>
                      <Typography
                      fontSize= {12}
                      >
                          <FormControlLabel control={<Checkbox checked={statusreact} label="ReactJS" onClick={()=> setStatusreact(!statusreact)}/>} label="ReactJS" /><br/>
                          <FormControlLabel control={<Checkbox checked={statusangular} label="ReactJS" onClick={()=> setStatusangular(!statusangular)}/>} label="Angular"/><br/>
                          <FormControlLabel control={<Checkbox checked={statushtml} label="ReactJS" onClick={()=> setStatushtml(!statushtml)}/>} label="HTML/CSS"/><br/>
                          <FormControlLabel control={<Checkbox checked={statusbootstrap} label="ReactJS" onClick={()=> setStatusbootstrap(!statusbootstrap)}/>} label="Bootstrap" />
                      </Typography>
              </FormGroup>

            </TreeItem>

            <TreeItem nodeId="Backend" label="Backend">
              <FormGroup style={{ paddingLeft: '18px' }}>
                      <Typography
                      fontSize= {12}
                      >
                          <FormControlLabel control={<Checkbox checked={statusnode} label="NodeJS" onClick={()=> setStatusnode(!statusnode)} />} label="NodeJS" /><br/>
                          <FormControlLabel control={<Checkbox checked={statusspringboot} label="Springboot" onClick={()=> setStatusspringboot(!statusspringboot)} />} label="Springboot" /><br/>
                          <FormControlLabel control={<Checkbox checked={statusflask} label="Flask" onClick={()=> setStatusflask(!statusflask)} />} label="Flask" /><br/>
                          <FormControlLabel control={<Checkbox checked={statusrest} label="RestAPI" onClick={()=> setStatusrest(!statusrest)} />} label="RestAPI" />

                      </Typography>
              </FormGroup>
            </TreeItem>

            <TreeItem nodeId="Devops" label="Devops">
              <FormGroup style={{ paddingLeft: '18px', fontSize:'10px'}}>
                      <Typography
                      fontSize= {12}
                      >
                          <FormControlLabel control={<Checkbox checked={statusdocker} label="Docker" onClick={()=> setStatusdocker(!statusdocker)} />} label="Docker" /><br/>
                          <FormControlLabel control={<Checkbox checked={statuskuber} label="Kubernetes" onClick={()=> setStatuskuber(!statuskuber)} />} label="Kubernetes" />
                      </Typography>
              </FormGroup>
            </TreeItem>

            <TreeItem nodeId="DataModelling" label="DataModelling">
              <FormGroup style={{ paddingLeft: '18px' }}>
                      <Typography
                      fontSize= {12}
                      >
                          <FormControlLabel control={<Checkbox checked={statusds} label="Data science" onClick={()=> setStatusds(!statusds)} />} label="Data science" /><br/>
                          <FormControlLabel control={<Checkbox checked={statuspowerbi} label="PowerBI" onClick={()=> setStatuspowerbi(!statuspowerbi)} />} label="PowerBI" /><br/>
                          <FormControlLabel control={<Checkbox checked={statustablue} label="Tablue" onClick={()=> setStatustablue(!statustablue)} />} label="Tablue" />

                      </Typography>
              </FormGroup>
            </TreeItem>


            <TreeItem nodeId="location" label="location">
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
      >
                      <Typography
                      fontSize= {12}
                      >

                          <FormControlLabel control={<Radio value={"Indianapolis"} label="Indianapolis" onClick={()=> setLocation('Indianapolis')} />} label="Indianapolis" /><br/>
                          <FormControlLabel control={<Radio value={"Branchburg"} label="Branchburg" onClick={()=> setLocation('Branchburg')} />} label="Branchburg" /><br/>
                          <FormControlLabel control={<Radio value={"Cambridge"} label="Cambridge" onClick={()=> setLocation('Cambridge')} />} label="Cambridge" /><br/>
                          <FormControlLabel control={<Radio value={"San Deigo"} label="San Deigo" onClick={()=> setLocation('San Deigo')} />} label="San Deigo" /><br/>
                          <FormControlLabel control={<Radio value={"New York"} label="New York" onClick={()=> setLocation('New York')} />} label="New York" /><br/>
                          <FormControlLabel control={<Radio value={"Washington"} label="Washington" onClick={()=> setLocation('Washington')} />} label="Washington" />


                      </Typography>
              </RadioGroup>
            </TreeItem>

          </TreeView>

          

          {/* </TreeView> */}

          {/* {candidates} */}



          </React.Fragment>

  );
}
