import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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

import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Admin() {

    let user=JSON.parse(localStorage.getItem('user-info'))

    const navigate = useNavigate();

    const [IDDeletePrivilege, SetIDDeletePrivilege] = useState("");
    const [ListPrivilegeToDelete, SetListPrivilegeToDelete] = useState([]);
    const [ChangeLigne, SetChangeLigne] = useState(false);
    const [Privilege, SetPrivilege] = useState("");
    const [Role, SetRole] = useState("");
    var [LigneClicked, SetLigneClicked] = useState(0);

    const [value, setValue] = React.useState(0);

    const columns1 = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'lastName', headerName: 'First name', width: 130 },
      { field: 'fullname', headerName: 'Last name', width: 130 },
      { field: 'role', headerName: 'role', type: 'number', width: 90,},
      { field: 'ajouter role', headerName: 'ajouter',  width: 130,},
      { field: 'supprimer role', headerName: 'supprimer',  width: 130,},
    ];

    const columns2 = [
      { field: 'role', headerName: 'role', type: 'number', width: 90,},
      { field: 'Privilege', headerName: 'Privilege', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,   },
      { field: 'ajouter privilege', headerName: 'ajouter',  width: 130,},
      { field: 'supprimer privilege', headerName: 'supprimer',  width: 130,},
    ];

    var [UserRole, SetUserRole] = useState([]);
    var [RolePrivilege, SetRolePrivilege] = useState([]);

    var [DialogAddRole, SetDialogAddRole] = useState(false);
    var [DialogAddPrivilege, SetDialogAddPrivilege] = useState(false);
    var [DialogDeletePrivilege, SetDialogDeletePrivilege] = useState(false);
    var [DialogDeleteRole, SetDialogDeleteRole] = useState(false);

    var [AddRole, SetAddRole] = useState("");
    var [AddRoleData, SetAddRoleData] = useState({role: "",users: [{uid:""}]});
    var [AddPrivilegeData, SetAddPrivilegeData] = useState({privilege: "",role:{id: ""}});

    function sweetAlert(msg,icon){
      Swal.fire({
        icon: icon,
        title: msg,
      })
    }

    function AjouterRole(index){
      AddRoleData.users[0].uid=UserRole[index].uid;
      console.log(UserRole[index].uid);
      SetDialogAddRole(true);
      LigneClicked=index;
      SetLigneClicked(index);
    }
    function AjouterPrivilege(index){

      AddPrivilegeData.role.id=RolePrivilege[index].id;
      SetDialogAddPrivilege(true);
      LigneClicked=index;
      SetLigneClicked(index);
    }
    function SupprimerRole(index){
      AddRoleData.users[0].uid=UserRole[index].uid;
      console.log(UserRole[index].uid);
      SetDialogDeleteRole(true);
      LigneClicked=index;
      SetLigneClicked(index);
    }
    function SupprimerPrivilege(index){
      SetDialogDeletePrivilege(true);
      LigneClicked=index;
      SetLigneClicked(index);
      SetListPrivilegeToDelete(RolePrivilege[LigneClicked].privileges);
      console.log(RolePrivilege[LigneClicked].privileges);
    }

    function ChangePrivilege(priv){
      UserRole[LigneClicked].Privilege=priv;
      const rows2=UserRole;
      rows2[LigneClicked].Privilege=priv;
      SetUserRole(rows2);
    }

    const handleChangeDeletePrivilege = (event) => {
      SetIDDeletePrivilege(event.target.value);
    };
    function HandleCloseDialogAddRole() {
      var Data={role: "",users: [{uid:""}]};
      SetAddRoleData(Data);
      SetDialogAddRole(false);
    }
    function HandleCloseDialogAddPrivilege() {
      SetDialogAddPrivilege(false);
    }
    function HandleCloseDialogDeleteRole() {
      var Data={role: "",users: [{uid:""}]};
      SetAddRoleData(Data);
      SetDialogDeleteRole(false);
    }
    function HandleCloseDialogDeletePrivilege() {
      SetDialogDeletePrivilege(false);
    }

    function groupePrivilege(ArrayPrivilege){
      var result="";
      for(var i=0;i<ArrayPrivilege.length;i++){
        result +=ArrayPrivilege[i].privilege+', '
      }
      return result;
    }

    function AjouterRoleFinal(){
      if (AddRoleData.role==""){
        SetDialogAddRole(false);
        sweetAlert("Veuillez entrer le role !!","error");
      }
      else {
        console.log(AddRoleData);
        Axios.post('http://127.0.0.1:8036/bd/role/add/uid/'+user.uid,AddRoleData)
         .then(response => {
            console.log(response.data);
            window.location.reload();
         })
         .catch(err=>{
           console.log(err,err.response);
         });
      }
    }

    function AjouterPrivilegeFinal(){
      console.log(AddPrivilegeData);

      if (AddPrivilegeData.privilege==""){
        SetDialogAddPrivilege(false);
        sweetAlert("Veuillez entrer le privilége !!","error");
      }
      else {
        console.log(AddRoleData);
        Axios.post('http://127.0.0.1:8036/bd/privilege/add',AddPrivilegeData)
         .then(response => {
            console.log(response.data);
            window.location.reload();
         })
         .catch(err=>{
           console.log(err,err.response);
         });
      }

    }

    function SupprimerPrivilegeFinal(){
      console.log(IDDeletePrivilege);

      Axios.delete('http://127.0.0.1:8036/bd/privilege/delete/id/'+IDDeletePrivilege)
       .then(response => {
          console.log(response.data);
          window.location.reload();
       })
       .catch(err=>{
         console.log(err,err.response);
       });

    }

    function SupprimerRoleFinal(){
      console.log(AddRoleData.users[0].uid);

      Axios.delete('http://127.0.0.1:8036/bd/role/delete/uid/'+AddRoleData.users[0].uid+'/role/'+AddRoleData.role)
       .then(response => {
          console.log(response.data);
          window.location.reload();
       })
       .catch(err=>{
         console.log(err,err.response);
       });

    }

    function LogOut(){
      var useLogOut={ uid:"", pass:"" }
      localStorage.setItem("user-info",JSON.stringify(useLogOut));
      navigate('/');
      window.location.reload();
    }

    function Sychroniser(){
      Axios.get('http://127.0.0.1:8036/ldap/synchro')
       .then(response => {
          console.log(response.data);
          window.location.reload();
       })
       .catch(err=>{
         console.log(err,err.response);
       });
    }

    useEffect(()=>{
    Axios.get("http://127.0.0.1:8036/bd/findall")
      .then((reponse)=> {
        SetUserRole(reponse.data);
        console.log(reponse.data);
      })
      .catch(err=>{
        console.log(err,err.response);
      });

    Axios.get("http://127.0.0.1:8036/bd/role/findall")
      .then((reponse)=> {
        SetRolePrivilege(reponse.data);
        console.log(reponse.data);
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
                <Nav.Link href="" onClick={Sychroniser} style={{color:'white'}}>Sychroniser</Nav.Link>
                <Nav.Link href="" onClick={LogOut} style={{color:'white'}}>Déconnexion</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      <div style={{backgroundColor:'#2e3341',height:'400px',display:'flex',color:'white'}} >
        <div className="row mt-5 pb-5">
          <div className="col-4"><div className="diagonale"></div></div>
          <div className="col">
            <label className='title'>Meilleur service apogé administrateur</label>
            <label className='title2'>Vous pouvez gérer tous les service au sein de votre établissement, visualiser les résultat pour les
            étudiant</label>
            <br/>
          </div>
        </div>
      </div>

      <Box >
      <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }} >
        <BottomNavigationAction label="users - roles" icon={<AdminPanelSettingsIcon />} />
        <BottomNavigationAction label="roles - privileges" icon={<ManageAccountsIcon />} />
        <BottomNavigationAction label="All" icon={<AllInclusiveIcon />} />
      </BottomNavigation>
    </Box>

      <div style={{ height: 400}}>

      <TableContainer component={Paper} style={{padding:"0px 10%",display:value==0?"":"none"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns1.map((row, index) => { return ( <TableCell key={index+"t"} align={row.field=="modifier"?"right":"center"} >{row.field}</TableCell> ) })}
            </TableRow>
          </TableHead>
          <TableBody>
            {UserRole.map((row, index) => (
              <TableRow key={index}  >
                <TableCell  align="center"> {row.uid} </TableCell>
                <TableCell align="center">{row.lastname}</TableCell>
                <TableCell align="center">{row.fullname}</TableCell>
                <TableCell align="center">{row.group.split('ou=')[1]}</TableCell>
                <TableCell align="right"><Fab size="small" aria-label="add"><AddIcon onClick={()=>{AjouterRole(index)}} /></Fab></TableCell>
                <TableCell align="right"><Fab size="small" aria-label="add"><RemoveIcon onClick={()=>{SupprimerRole(index)}} /></Fab></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{padding:"0px 20%",display:value==1?"":"none"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns2.map((row, index) => { return ( <TableCell key={index+"t"} align={row.field=="role" || row.field=="Privilege"?"left":"right"} >{row.field}</TableCell> ) })}
            </TableRow>
          </TableHead>
          <TableBody>
            {RolePrivilege.map((row, index) => (
              <TableRow key={index}  >
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">{groupePrivilege(row.privileges)}</TableCell>
                <TableCell align="right"><Fab size="small" aria-label="add"><AddIcon onClick={()=>{AjouterPrivilege(index)}} /></Fab></TableCell>
                <TableCell align="right"><Fab size="small" aria-label="add"><RemoveIcon onClick={()=>{SupprimerPrivilege(index)}} /></Fab></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



      </div>
      <Dialog style={{ marginLeft: "30%", maxWidth: "500px", }} open={DialogAddRole} onClose={HandleCloseDialogAddRole} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <b style={{fontSize:30}}>Ajouter un role à {UserRole[LigneClicked]!=null?UserRole[LigneClicked].fullname:""} </b>
          <label style={{ fontSize:15,color: "#666" }}> From here you can add role to the person you clicked on the table</label>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div><br/>
              <TextField disabled defaultValue={AddRoleData.users[0].uid} label="id" width="50%" style={{ marginBottom: "35px", width: "100%" }}/>
              <TextField onChange={(e)=>AddRoleData.role=e.target.value} label="role" width="50%" style={{ marginBottom: "35px", width: "100%" }}/>
              <br/>
              <Button variant="outlined" onClick={AjouterRoleFinal} startIcon={<AddIcon />}>Ajouter</Button>
            </div>
            <br/>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog style={{ marginLeft: "30%", maxWidth: "500px", }} open={DialogAddPrivilege} onClose={HandleCloseDialogAddPrivilege} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <b style={{fontSize:30}}>Ajouter un privilége à {RolePrivilege[LigneClicked]!=null?RolePrivilege[LigneClicked].role:""} </b>
          <label style={{ fontSize:15,color: "#666" }}> From here you can add privilege to the person you clicked on the table</label>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div><br/>
              <TextField disabled defaultValue={AddPrivilegeData.role.id} label="id" width="50%" style={{ marginBottom: "35px", width: "100%" }}/>
              <TextField onChange={(e)=>AddPrivilegeData.privilege=e.target.value} label="role" width="50%" style={{ marginBottom: "35px", width: "100%" }}/>
              <br/>
              <Button variant="outlined" onClick={AjouterPrivilegeFinal} startIcon={<AddIcon />}>Ajouter</Button>
            </div>
            <br/>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog style={{ marginLeft: "30%", maxWidth: "500px", }} open={DialogDeletePrivilege} onClose={HandleCloseDialogDeletePrivilege} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <b style={{fontSize:30}}>Supprimer un privilége à {RolePrivilege[LigneClicked]!=null?RolePrivilege[LigneClicked].role:""} </b>
          <label style={{ fontSize:15,color: "#666" }}> From here you can delete privilege to the role you clicked on the table</label>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div><br/>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Privilége</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={IDDeletePrivilege} label="Privilége" onChange={handleChangeDeletePrivilege} >
                {ListPrivilegeToDelete.map((row, index) => { return ( <MenuItem key={index} value={row.id}>{row.privilege}</MenuItem> ) })}
              </Select>
            </FormControl>
            <br/><br/>
              <Button variant="outlined" onClick={SupprimerPrivilegeFinal} startIcon={<RemoveIcon />}>Supprimer</Button>
            </div>
            <br/>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog style={{ marginLeft: "30%", maxWidth: "500px", }} open={DialogDeleteRole} onClose={HandleCloseDialogDeleteRole} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <b style={{fontSize:30}}>Supprimer un Role à {UserRole[LigneClicked]!=null?UserRole[LigneClicked].fullname:""} </b>
          <label style={{ fontSize:15,color: "#666" }}> From here you can delete role to the person you clicked on the table</label>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div><br/>
            <TextField disabled defaultValue={AddRoleData.users[0].uid} label="id" width="50%" style={{ marginBottom: "35px", width: "100%" }}/>
            <TextField onChange={(e)=>AddRoleData.role=e.target.value} label="role" width="50%" style={{ marginBottom: "35px", width: "100%" }}/>
            <br/><br/>
              <Button variant="outlined" onClick={SupprimerRoleFinal} startIcon={<RemoveIcon />}>Supprimer</Button>
            </div>
            <br/>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    )


}
export default Admin
