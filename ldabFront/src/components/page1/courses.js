import '../css/courses.css'
import React, { useState,Component,Fragment } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../css/bootstrap.min.css'


function Desc1() {

  const Cards=[
    {field:"Informatique",img:"fieldinformatique.jpg",chef:"Prof. EL YOUNOUSSI Yacine",mailChef:'yacine.info@gmail.com',text:"une science et une technique, c'est-à-dire une activité qui vise à savoir et une autre qui vise à construire."},
    {field:"Civil",img:"fieldcivil.jpg",chef:"Prof. Khamlichi Abdellatif",mailChef:'khamlichi7@yahoo.es',text:"L'ingénieur du génie civil a pour mission de développer les infrastructures d'une région ou d'un pays. Il conçoit des ponts"},
    {field:"Supply chain management",img:"fieldSCM.jpg",chef:"SEGHIOUER Hamid",mailChef:'hamid.seghiouer@gmail.com',text:"L'Ingénieur Logistique s'occupe de tout ce qui concerne la partie logistique de l'entreprise, de la stratégie à l'opérationnel. "},
    {field:"System télécommunication et réseau",img:"fieldGSTR.jpg",chef:" Prof. CHAKKOR Otman",mailChef:' o.chakkor@gmail.com',text:"L'ingénieur en télécommunications conçoit du matériel ou des systèmes de télécommunications"},
    {field:"Mécatronique",img:"fieldMecatronique.jpg",chef:"Prof. SNABI Mustapha",mailChef:'mustapha_sanbi@yahoo.fr',text:"La Mécatronique a pour but de créer des composants et solutions de plus en plus intelligents pour répondre aux exigences d'excellence des clients."},
  ];

  return (


    <div className="App" style={{padding:'100px'}}>

    <label className='titleLetter1'>Filiére en Ensa Tétouan</label><br/>
    <label className='titleLetter2'>Nos 5 filiéres </label>
    <div className='row'>
      <div className='col mt-5' style={{display:'contents'}}>

      {Cards.map((row, index) => {
        return (
            <div key={index} className='Card' >
              <div style={{display:'flex',width:'500px'}}>
                <div className='Card2' >
                  <label className='CardTitle'>Génie {row.field}</label>
                  <label className='CardText'>{row.text}</label>
                </div>
                <div className='CardImg'>
                  <img src={require('../assets/'+row.img)} alt="" width="100%" height="100%" />
                </div>
              </div>
              <div className='ligne'></div>
              <div className='CardInfo'>
                <div className='CardText'>{row.chef}</div>
                <div className='CardText' style={{color:'#424753',fontWeight:'bold'}}>{row.mailChef}</div>
              </div>
            </div>
       );})}
       </div>
    </div>
    </div>
  );
}

export default Desc1;
