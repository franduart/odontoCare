import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from "react-icons/fa";
import imagem from '../../assets/16324275_rm218batch4-ning-24.jpg';
import perfil1 from '../../assets/1000005970.jpg';
import perfil2 from '../../assets/1000005971.png';
import perfil3 from '../../assets/1000005972.jpg';
import perfil4 from '../../assets/1000005973.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function AntesDepois() {


  return (
  <section className='antes'>
    <h3>Antes e depois dos nossos pacientes</h3>

    <div className='grid'>
        <img src={perfil1} alt='primeira imagem'/>
        <img src={perfil2} alt='primeira imagem'/>
        <img src={perfil3} alt='primeira imagem'/>
        <img src={perfil4} alt='primeira imagem'/>
    </div>

  </section>
  
  );
}

export default AntesDepois;
