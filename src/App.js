import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { getCep } from './services/api'
import './style.css';


function App() {
  // verificar se foi acrescentado algo no input
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  const handlerSearch = () => {
    getCep(input)
      .then((response) => response.json())
      .then((data) => setCep(data));
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>
      <div className='subcontainer'>
        <input type="text"
          placeholder="Digite seu cep"
          value={input}
          // passando um evento para o novo valor do input
          onChange={(event) => setInput(event.target.value)}>
        </input>

        <button
          className="buttonSearch"
          onClick={handlerSearch}><FiSearch size={20} color='white' /></button>
      </div>

      {/* Renderização condicional */}
      {Object.keys(cep).length > 0 && (
        <main className='container-main'>
          <h3>Cep: {cep.cep}</h3>
          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
