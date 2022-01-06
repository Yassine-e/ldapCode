import {Container,Navbar, Nav} from 'react-bootstrap';
import React, { useState,useEffect} from "react";
import Axios from 'axios'
import './css/navBar.css'
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Tab,Row,Col,ListGroup} from 'react-bootstrap';
import './css/bootstrap.min.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from 'react-router-dom';


import Swal from 'sweetalert2'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function NavBarr() {

  let user=JSON.parse(localStorage.getItem('user-info'))

  const navigate = useNavigate();
  const [DialogLogin, SetDialogLogin] = useState(false);
  const [LoginData, SetLoginData] = useState({uid:"",pass:""});
  const [values, setValues] = React.useState({amount: "",password: "",weight: "",weightRange: "",showPassword: false,});
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    LoginData.pass= event.target.value  ;
  };

  function LoginPopUp() {
    SetDialogLogin(true);
  }
  function HandleCloselogin() {
    SetDialogLogin(false);
  }
  function LogOut(){
    var useLogOut={ uid:"", pass:"" }
    localStorage.setItem("user-info",JSON.stringify(useLogOut));
    navigate('');
    // window.location.reload();
  }
  function LoginBtn(){
    console.log(LoginData);

    Axios.post('http://127.0.0.1:8036/ldap/login',LoginData)
     .then(response => {
       console.log(response.data);
       var group=response.data.split(',');
       console.log("user :"+group[0]);
        if(group=="BAD CREDENTIALS"){
          SetDialogLogin(false);
          sweetAlert("Id ou mot de pass incorrect !!","error")
        }else if(group[0]=="ou=Direction"){
          console.log(response.data);
          localStorage.setItem("user-info",JSON.stringify(LoginData))
          navigate('Admin');
        }else if (group[0]=="ou=Departements"){
          console.log(response.data);
          localStorage.setItem("user-info",JSON.stringify(LoginData))
          navigate('prof');
        }
        // window.location.reload();
     })
     .catch(err=>{
       console.log(err,err.response);
     });
  }

  function sweetAlert(msg,icon){
    Swal.fire({
      icon: icon,
      title: msg,
    })
  }



  return (
    <div>
    <Navbar style={{backgroundColor:'#2e3341',color:"white"}}>
    <Container >
    <Navbar.Brand href="#home" style={{color:'white'}}>Apogé</Navbar.Brand>
    </Container>
  </Navbar>
  <div style={{backgroundColor:'#2e3341',height:'400px',display:'flex',color:'white'}} >
  <div className="row mt-5 pb-5">
    <div className="col-4"><div className="diagonale"></div></div>
    <div className="col">
      <label className='title'>Meilleur service apogé</label>
      <label className='title2'>Vous pouvez gérer tous les service au sein de votre établissement, visualiser les résultat pour les
      étudiant ...</label>
      <br/>
      <Button variant="contained" onClick={LoginPopUp} style={{display:user.uid!=""?"none":"",background:'white',color:'#2e3341',width:'170px',height:'40px',margin:'31px',fontSize:"9px",fontWeight:'bold'}} endIcon={<NavigateNextIcon />}>Se connecter</Button>
      <Button variant="contained" onClick={LogOut} style={{display:user.uid==""?"none":"",background:'white',color:'#2e3341',width:'170px',height:'40px',margin:'31px',fontSize:"9px",fontWeight:'bold'}} endIcon={<NavigateNextIcon />}>Déconnexion</Button>
    </div>
  </div>
  </div>

  <Dialog style={{ marginLeft: "30%", maxWidth: "500px", }} open={DialogLogin} onClose={HandleCloselogin} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <b style={{fontSize:30}}>Connecter vous</b>
          <label style={{ fontSize:15,color: "#666" }}> Thank you for get back to Finderland System, let access our the best recommendation for you.</label>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div>
            <br/>
              <TextField onChange={(e)=>LoginData.uid=e.target.value} label="Login" width="50%" style={{ marginBottom: "35px", width: "100%" }}
                InputProps={{ startAdornment: ( <InputAdornment position="start"> {" "} <PersonIcon />{" "} </InputAdornment> ), }}
              />
              <br />
              <InputLabel htmlFor="standard-adornment-password"> Password </InputLabel>
              <Input style={{ marginBottom: "35px", width: "100%" }} id="standard-adornment-password" type={values.showPassword ? "text" : "password"} value={values.password} onChange={handleChange("password")}
                endAdornment={ <InputAdornment position="end"> <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword} > {values.showPassword ? <Visibility /> : <VisibilityOff />} </IconButton> </InputAdornment> }
              />
              <br /><br />
              <Button onClick={LoginBtn} className="" variant="contained" style={{ color: "white", backgroundColor: "#bc0002", width: "100%", height: "40px", marginLeft: "0%", }} startIcon={<ArrowForwardIosIcon />} > Se connecter </Button>
            </div>
            <br />
          </div>
        </DialogContent>
      </Dialog>
  </div>

  );
}

export default NavBarr;
