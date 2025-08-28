export default function Sobre(){
    return(

        <div style={{width: '100%',height:'100%', display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'center', maxWidth:'80%', margin:'70px auto'}}>
            <h1 style={{color:'#1D8FAB'}}>Sobre</h1>


            <p>
            Na OdontoCare, acreditamos que um sorriso saudável transforma vidas. Nossa clínica odontológica foi criada com o propósito de oferecer atendimento humanizado, tecnologia de ponta e profissionais especializados, sempre com foco no bem-estar e na confiança de cada paciente.
            </p>    
            <p>
                Oferecemos tratamentos completos em odontologia, desde a prevenção e cuidados diários, até procedimentos estéticos e reabilitadores, tudo em um ambiente moderno, acolhedor e pensado para proporcionar conforto em cada consulta.
            </p>
            <p>
              Nosso time é formado por dentistas experientes que tratam cada caso de forma personalizada, respeitando as necessidades individuais de cada paciente. Na OdontoCare, você encontra serviços como:  
            </p>

            <ul>
                <li>Limpeza e profilaxia dentária</li>
                <li>Tratamentos estéticos (clareamento, lentes de contato dental, facetas)</li>
                <li>Ortodontia moderna com aparelhos convencionais e alinhadores invisíveis</li>
                <li>Implantes e próteses</li>
                <li>Endodontia (tratamento de canal)</li>
                 <li>Atendimento infantil com odontopediatria especializada</li>

            </ul>

            <p>Aqui, o cuidado vai além do tratamento: queremos que você se sinta seguro, confiante e motivado a sorrir mais todos os dias.</p>
            <a href="#contato" className="agendar">Agendar Consulta</a>
        </div>
        
        
    )
}