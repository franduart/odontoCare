import React from "react";
import imagemDentista from '../assets/dentista.jpg'
import '../Home/style.css';
import 'animate.css';
import Header from "../components/Header";
import Servicos from "../components/Servicos";
import ControlledCarousel from "../components/ControlledCarousel";
import AntesDepois from "../components/AntesDepois";
import Agenda from "../components/Agenda";

export default function Home() {
  return (
    <div >
      <Header/>
      <section  className="Hero">
        <div className="divText">
          <h1 class="animate__animated animate__backInLeft animate__delay-1s" >Sorria com Confiança</h1>
        
        <div className="text">
        <p>Consultório odontológico com atendimento humanizado e tecnologia de ponta.</p>

        <a href="#contato" className="agendar">Agendar Consulta</a>
        </div>
        </div>

        <div className="divImg"  class='animate__animated animate__backInRight animate_delay-1s'>
          <img src={imagemDentista} alt="foto dentista"></img>
        </div>
      </section>

      <Servicos/>
      {/* Depoimento */}
      <section >
        <ControlledCarousel/>
      </section>
      

       <Agenda/>
     
        <div style={{textAlign: 'center', color: '#18758c'}} >
          <h3>Onde estamos?</h3>
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4634967400133!2d-46.656573684475946!3d-23.588092968828076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cdd2c1e9a3%3A0x58d30d0f7f4be6f4!2sPaulista%20Avenue%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1629981234567!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, height: '60vh' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
       
        <AntesDepois/>
    </div>
  );
}
