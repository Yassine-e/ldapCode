import '../css/letter.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Signature from '../assets/signature.png'
import '../css/bootstrap.min.css'



function Desc1() {
  return (
    <div className="App" style={{backgroundColor:'#f9f9f9',height:'850px'}}>

      <center><label className='titleLetter1'>Qui somme nous ?</label><br/>
      <label className='titleLetter2'>Ensa Tétouan</label></center>
      <div className='row'>
        <div className="col"><div className="diagonale2" ></div></div>
        <div className="col">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 500, }, }} >
          <Paper elevation={20} style={{marginTop:'40px',backgroundColor:"#fafafa"}} >
            <div className="letterContent"><b>Cher utilisateurs</b>,<br/><br/>
            Créée en septembre 2008, l’Ecole Nationale des Sciences Appliquées de Tétouan est un établissement public à caractère
             scientifique, culturel et professionnel, instaurée pour être une école d’ingénieurs de haut niveau.
             Pour toute demande, remarque ou suggestion et pour nous contacter par e-mail, nous vous invitons à remplissez soigneusement
             le formulaire ci-dessous, Votre message sera transmis au service concerné ..
             <br/><br/>Site web : ensatetouan@uae.ac.ma
             <br/><br/>Téléphone : +212-539-68-80-27
             <br/><br/>Adresse: 2222 M'hannech
             <br/><br/><img src={Signature} alt="" height="100px" /></div>
          </Paper>
        </Box>
        </div>
      </div>



    </div>
  );
}

export default Desc1;
