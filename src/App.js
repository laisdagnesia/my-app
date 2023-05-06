import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import InputText from './components/InputText';
import SelectField from './components/SelectField';

function App (){
  var selectField=[
    'Feminino',
    'Masculino',
    'Outro'
  ]
  const salvarForm = (e)=>{
    e.preventDefault();
    console.log('Salvo')
  }
    return (
      <div className='App'>
        <Header/>
        <h3> Trabalho desenvolvido utilizando React.</h3>
        <h4>Objetivos:</h4>
          <li>
            Criar componente estatico;
          </li>
          <li>
            Desenvolver componente reutilizável com props;
          </li>
          <form onSubmit={salvarForm}>
          <h3>Realizar Cadastro:</h3>
          <InputText label='Digite seu nome:   ' placeholder='Nome'/>
          <InputText label='Digite seu sobrenome:   ' placeholder='Sobrenome'/>
          <InputText label='Digite sua idade:     ' placeholder='Idade '/>
          <span>Gênero:  </span>
          <SelectField options={selectField}/>
          <br></br>
          <button>
            Salvar
          </button>
          </form>
        <Footer/>
      </div>
    )
  }


export default App;
