import React, { useState } from "react";
import './App.css'

function App() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

  const addUser = async e => {
    e.preventDefault();

    if(!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        name: '',
        email: '',
        password: ''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }

  function validate(){
    if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
    if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
    if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
    if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});

    return true;
  }

  return (
    <div className="container-form">
      <h1 className="tituloForm">Cadastrar Usuário</h1>

      {status.type === 'success' ? <p className="msgSuccess">{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p className="msgError">{status.mensagem}</p> : ""}

      <form onSubmit={addUser}>
        <div className="form">
         <div> 
        <label className="label">Nome <strong className="obrigatorio">*</strong></label>
        <input type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} /><br /><br />

        <label className="label">E-mail <strong className="obrigatorio">*</strong> </label>
        <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={valueInput}  value={user.email} /><br /><br />

        <label className="label">Senha <strong className="obrigatorio">*</strong></label>
        <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />
        </div>
        <div className="botao">
        <button  type="submit">Cadastrar</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default App;
