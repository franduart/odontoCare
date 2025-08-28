import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from "react-icons/fa";
import imagem from '../../assets/16324275_rm218batch4-ning-24.jpg';
import perfil1 from '../../assets/1.jpg';
import perfil2 from '../../assets/2.jpg';
import perfil3 from '../../assets/3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem}
          alt="First slide"
        />
        <Carousel.Caption>

            <img
          
          src={perfil1}
          alt="First slide"
        />
          <h3>Maria Silva</h3>
          <div className='star'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>"Sempre tive receio de ir ao dentista, mas aqui encontrei acolhimento e paciência. Hoje vou às consultas tranquila e confiante."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem}
          alt="Second slide"
        />
        <Carousel.Caption>
             <img
          
          src={perfil2}
          alt="First slide"
        />
          <h3>Ana Andrade</h3>
          <div className='star'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>"Profissional super atenciosa, explica tudo de forma clara e transmite segurança. Estou muito feliz com o meu tratamento."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem}
          alt="Third slide"
        />
        <Carousel.Caption>
             <img
          
          src={perfil3}
          alt="First slide"
        />
          <h3>Fernanda Toledo</h3>
          <div className='star'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>
           "Fiz meu clareamento dental e estou apaixonada pelo resultado. Atendimento humanizado e de alta qualidade."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
