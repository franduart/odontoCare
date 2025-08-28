import Servicos from "../components/Servicos"

export default function ServicosPage(){
    return(
        <div style={{width: '100%',margin:'60px 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'70%'}}>
            <Servicos />
             <a href="#contato" className="agendar">Agendar Consulta</a>
        </div>
       
    )
}