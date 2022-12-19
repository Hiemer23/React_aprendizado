import './App.css';
import { useState } from 'react';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const[nome,setNome] = useState()
  const meusItens = ['React', 'Vue', 'Angular']
  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}></SeuNome>
      <Saudacao nome ={nome}></Saudacao>
    </div>
  );
}

export default App;
