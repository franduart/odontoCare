import React, { useState } from "react";
import  '../Agenda/style.css'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Agenda() {
  const [date, setDate] = useState(new Date());
  const [dados, setDados] = useState({});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [time, setTime] = useState('09:00');
  const [mensagem, setMensagem] = useState(false);

  const agendar = () => {
    const agendamento = {
      nome,
      email,
      tel,
      date,
      time
    };

    setDados(agendamento);

      toast.success(
      `✅ Horário agendado para: ${date.toLocaleDateString("pt-BR")} às ${time}`
    );

      const telefoneClinica = "5522996163877"; 
      const mensagem = `Olá, meu nome é ${nome}. 
    Quero confirmar meu agendamento para o dia ${date.toLocaleDateString("pt-BR")} às ${time}.
    / Email: ${email}
    / Telefone: ${tel}`;

    const url = `https://wa.me/${telefoneClinica}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");

    console.log(agendamento)

    setMensagem(true);
  };

  return (
    <div className='formSection'>
      <h2>Agende seu horário</h2>

      <form  className="form" autoComplete="off">
        <label>Nome</label>
      <input
        type="text"
        placeholder="Seu nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)
          
        }
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Informe um email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Telefone</label>
      <input
        type="tel"
        placeholder="Informe seu número..."
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />

      <Calendar onChange={setDate} value={date} className='calendar' />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/>

      <button onClick={agendar}>Confirmar horário</button>
      </form>

      {mensagem && (
        <p>
          Consulta marcada para o dia{" "}
          {date.toLocaleDateString("pt-BR")} às {time}
          
        </p>
      )}

       <ToastContainer
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
