import React, { useState,useEffect } from 'react'
import {Container,Navbar, Nav} from 'react-bootstrap';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Admin() {

    const navigate = useNavigate();
    const [ChangeLigne, SetChangeLigne] = useState(false);
    const [Privilege, SetPrivilege] = useState("");
    const [Role, SetRole] = useState("");
    var [LigneClicked, SetLigneClicked] = useState(0);
    var [ProfData, SetProfData] = useState([]);
    var [ProfPrivilege, SetProfPrivilege] = useState("");

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'fullname', headerName: 'First name', width: 130 },
      { field: 'mail', headerName: 'Last name', width: 130 },
      { field: 'role', headerName: 'role', type: 'number', width: 90,},
      { field: 'Privilege', headerName: 'Privilege', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,   },
    ];

    var [rows, SetRows] = useState([
      { id: 1, lastName: 'Snow', firstName: 'Jon', role: 35 ,Privilege:32,},
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', role: 42,Privilege:32,},
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', role: 45,Privilege:32,},
      { id: 4, lastName: 'Stark', firstName: 'Arya', role: 16,Privilege:32,},
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', role: 54,Privilege:32,},
      { id: 6, lastName: 'Melisandre', firstName: null, role: 150 ,Privilege:32,},
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', role: 44 ,Privilege:32,},
      { id: 8, lastName: 'Frances', firstName: 'Rossini', role: 36 ,Privilege:32,},
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', role: 65,Privilege:32,},
    ])

    function change(index){
      LigneClicked=index;
      SetLigneClicked(index);
      SetChangeLigne(true);
      console.log("LigneClicked : "+ LigneClicked);
      console.log(rows[LigneClicked].role);
    }

    function ChangeRole(role){
      rows[LigneClicked].role=role;
      const rows2=rows;
      rows2[LigneClicked].role=role;
      SetRows(rows2);
    }

    function ChangePrivilege(priv){
      rows[LigneClicked].Privilege=priv;
      const rows2=rows;
      rows2[LigneClicked].Privilege=priv;
      SetRows(rows2);
    }

    function HandleCloseChangeLigne() {
      SetChangeLigne(false);
    }
    function LogOut(){
      var useLogOut={ uid:"", pass:"" }
      localStorage.setItem("user-info",JSON.stringify(useLogOut));
      navigate('/');
      window.location.reload();
    }

    useEffect(()=>{
      let user=JSON.parse(localStorage.getItem('user-info'))
      Axios.get("http://127.0.0.1:8036/bd/find/id/"+user.uid)
        .then((reponse)=> {
          SetProfData(reponse.data);
          console.log(reponse.data);
        })
        .catch(err=>{
          console.log(err,err.response);
        });

      Axios.get("http://127.0.0.1:8036/bd/find/privileges/uid/"+user.uid)
        .then((reponse)=> {
          var privilege="";
          for(var i=0;i<reponse.data.length;i++){
            privilege+=reponse.data[i].privilege+", ";
          }
          SetProfPrivilege(privilege);
        })
        .catch(err=>{
          console.log(err,err.response);
        });

    },[]);

    return(
      <div>
          <Navbar style={{backgroundColor:'#2e3341',color:"white"}}>
            <Container >
              <Navbar.Brand href="#home" style={{color:'white'}}>Apogé</Navbar.Brand>
              <Nav className="me-auto" style={{color:'white'}}>
                <Nav.Link href="" onClick={LogOut} style={{color:'white'}}>Déconnexion</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      <div style={{backgroundColor:'#2e3341',height:'400px',display:'flex',color:'white'}} >
        <div className="row mt-5 pb-5">
          <div className="col-4"><div className="diagonale"></div></div>
          <div className="col">
            <label className='title'>Meilleur service apogé <br/>{ProfData.fullname}</label>
            <label className='title2'>Vous pouvez gérer tous les service au sein de votre établissement, visualiser les résultat pour les
            étudiant</label>
            <br/>
          </div>
        </div>
      </div>

      <div style={{ height: 400,}}>

      <TableContainer component={Paper} style={{padding:40}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {columns.map((row, index) => { return ( <TableCell key={index+"t"} >{row.field}</TableCell> ) })}
          </TableRow>
        </TableHead>
        <TableBody>


        <TableRow >
          <TableCell  align="left"> {ProfData.uid} </TableCell>
          <TableCell align="left">{ProfData.fullname}</TableCell>
          <TableCell align="left">{ProfData.mail}</TableCell>
          <TableCell align="left">{ProfData.group}</TableCell>
          <TableCell align="left">{ProfPrivilege}</TableCell>
        </TableRow>


        </TableBody>
      </Table>
    </TableContainer>

      </div>
      </div>
    )


}
export default Admin
