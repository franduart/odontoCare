import '../Servicos/style.css';
import { FaTooth } from "react-icons/fa";

export default function Servicos(){
    return(
     <section className='servicos'>
        <h2 >Nossos Serviços</h2>
        <div className='servicosGrid'>
          <div >
            <h3 >Clínico Geral <FaTooth /></h3>
            <p >
              Cuidados preventivos e tratamentos básicos para a saúde bucal.
            </p>
          </div>
          <div >
            <h3 >Ortodontia <FaTooth /></h3>
            <p>
              Alinhamento dos dentes com aparelhos fixos e estéticos.
            </p>
          </div>
          <div >
            <h3>Implantes <FaTooth /></h3>
            <p >
              Soluções seguras e duradouras para reposição de dentes.
            </p>
          </div>
        </div>
     </section>
    )
}