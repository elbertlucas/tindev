import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.svg'
import api from '../services/api'

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      username,
    });

    console.log(response);
    history.push('/main');
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo Tindev" />
        <input
          placeholder="Digite o seu login do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}