import '../css/desc1.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../css/navBar.css'
import EnsaDonsang from '../assets/ensaDonsang.jpg'
import EnsaTetouan from '../assets/ensaTetouan.jpeg'
import Convention from '../assets/StitouConvention.png'
import Convention2 from '../assets/convention2.jpg'

function Desc1() {
  return (
    <div className="row" style={{margin:'90px'}}>
      <div className="col" >
        <label>Informations</label>
        <label className='titleDesc1'>Conventions et partenariats</label>
        <label className='titleDesc2'>Société DevinWeb	</label>
        <label>Devinweb est une société informatique basée au Maroc, région du nord (Tanger, Tétouan), aussi présente et proche de ces clients sur les axes Casa, Rabat qui offre des services de développement en ingénierie de logiciels informatiques, les services qu'on propose s'articulent sur: La création des applications Web (Systèmes d'Informations internes, Gestion commerciales et stocks (plateforme devinStock), Gestion des points de ventes (plateforme devinPOS), création des sites Web, et création des sites e-commerce(plateforme devinShop)</label>
        <label className='titleDesc2'>Groupe Avalon	</label>
        <label>Nos aliamos con nuestros clientes - grandes empresas, multinacionales y organismos internacionales - para ofrecerles un servicio basado en valores estratégicos que genera resultados tangibles. Contamos con delegaciones en varias ciudades de España.</label>
        <label className='titleDesc2'>NTT DATA</label>
        <label>NTT DATA Europe & Latam nace de la alianza entre everis (con presencia en Europa y América Latina) y NTT DATA EMEA (con presencia principalmente en Reino Unido, Italia, Alemania y Rumanía) para llevar la transformación y la innovación a clientes en Europa y Latinoamérica.</label>
      </div>
      <div className="col mt-5 ml-3"  >
        <Box sx={{ display: 'flex',bgcolor:'grey', flexWrap: 'wrap', '& > :not(style)': { m: 1, }, }} >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, }, }} >
            <Paper elevation={20} style={{marginTop:'40px',backgroundColor:"#fafafa"}} >
              <img src={EnsaDonsang} alt="" height="168px" />
            </Paper>

            <Paper elevation={5}  style={{backgroundColor:"#f0f0f0"}}>
              <img src={Convention2} alt="" height="200px" />
            </Paper>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, }, }} >
            <Paper elevation={5} style={{backgroundColor:"#f0f0f0"}} >
              <img src={ EnsaTetouan} alt="" height="190px" />
            </Paper>
            <Paper elevation={5}  style={{backgroundColor:"#f0f0f0"}}>
              <img src={Convention} alt="" height="190px"/>
            </Paper>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Desc1;
