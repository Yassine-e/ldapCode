import '../css/NewsLetter.css'

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Signature from '../assets/signature.png'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import '../css/bootstrap.min.css'

function Desc1() {
  return (
    <div className="App" >
      <div className="NewsLetterContainer row" >
        <div className='col-7'>
          <label className='titleNewsLetter1'>Newsletter</label>
          <label className='titleNewsLetter2'>Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…). ... L'étude formelle des textes s'appuie sur la linguistique, qui est l'approche scientifique du langage.</label>
        </div>
        <div className="NewsLetterSearch col">
          <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }} >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Enter email address" inputProps={{ 'aria-label': 'search google maps' }} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button  style={{background:'#eaeaec',color:'#2e3341',width:'100px',height:'40px',fontSize:"9px",fontWeight:'bold'}} >Subscribe</Button>
          </Paper>
        </div>
      </div>

      {/*<div className="afterNews">
        <div className="diagonale2" style={{width:'50%'}} ></div>
        <div className="afterNewsText">
          <label className='titleNewsLetter2'>Meet the team</label><br/>
          <label className='titleNewsLetter1'>Ozan Onay</label>
          <label className='titleNewsLetter2'>Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…). ... L'étude formelle des textes s'appuie sur la linguistique, qui est l'approche scientifique du langage.</label>
          <Fab className="afterNewsbtns" size="small" style={{backgroundColor:'#424755'}} color="primary" aria-label="add"> <ArrowBackIcon /> </Fab>
          <Fab className="afterNewsbtns" size="small" style={{backgroundColor:'#424755'}} color="primary" aria-label="add"> <ArrowForwardIcon /> </Fab>
        </div>
      </div>*/}

    </div>
  );
}

export default Desc1;
