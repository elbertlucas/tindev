import React/* { useState } */from 'react';
import './Login.css';
import logo from '../assets/logo.svg'

export default function Login() {
//const username = useState('');

  return (
    <div className='login-container'>
      <form>
        <img src={logo} alt="Logo Tindev" />
        <input 
        type="text" 
        placeholder="Digite o seu login do Github"
       // value={username}
       // onchange
         />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}