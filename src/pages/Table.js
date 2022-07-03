import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

export default function CustomizedTables() {

  const {firstname, setFirstname} = useContext(LoginContext)
  const {lastname, setLastname} = useContext(LoginContext)
  const {city, setCity} = useContext(LoginContext)
  const {skillInfo, setSkillInfo} = useContext(LoginContext)
  // const {totalexp, setTotalexp} = useContext(LoginContext)


  
  return (

    <TableContainer component={Paper}>

      <Table aria-label="customized table">

      <TableBody aria-label="customized table">
            <StyledTableRow>
              <StyledTableCell component="th" scope="row"> Personal Information </StyledTableCell>
            </StyledTableRow>
        </TableBody>

        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Firstname
              </StyledTableCell>
              <StyledTableCell align="left">{firstname}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Lastname
              </StyledTableCell>
              <StyledTableCell align="left">{lastname}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Current location
              </StyledTableCell>
              <StyledTableCell align="left">{city}</StyledTableCell>
            </StyledTableRow>

        <TableBody aria-label="customized table">
            <StyledTableRow>
              <StyledTableCell component="th" scope="row"> Skill set </StyledTableCell>
            </StyledTableRow>
        </TableBody>

        </TableBody>        

        <TableBody aria-label="customized table">
            <StyledTableRow>
              <StyledTableCell component="th" scope="row"> Skill set </StyledTableCell>
            </StyledTableRow>
        </TableBody>

        <TableBody aria-label="customized table">

            <StyledTableRow>
              <StyledTableCell component="th" scope="row"> Skill </StyledTableCell>
              <StyledTableCell align="left">Number of project</StyledTableCell>
              <StyledTableCell align="left">Years of experience</StyledTableCell>

            </StyledTableRow>
            

            {skillInfo.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.skill}
                </StyledTableCell>
                <StyledTableCell align="right">{row.project}</StyledTableCell>
                <StyledTableCell align="right">{row.experience}</StyledTableCell>
                
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}