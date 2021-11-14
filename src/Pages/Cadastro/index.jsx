import React from 'react';
import siteIcon from '../../Images/Logo_startSuaBeleza.png'

import './styles.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';



const Cadastro = () => {
  const { register, handleSubmit } = useForm();

  let history = useHistory();

  const dataSubmit = data => {
    const { login, password } = data;
    if (!login && !password) {
      alert('Por favor insira o login e o password')
    } else if (!login) {
      alert('Por favor insira o login')
    } else if (!password) {
      alert('Por favor insira o password')
    } else {
      localStorage.setItem('login', login)
      history.push('/home')
    }
  }

  // function cadastro(){
  //   console.log('adsd')
  // }
  function changeToLogin(){
    // history.push('/')
  }
  return(
    <div className="container">
    <div className="register-container">
      <div className="register-card">
        <form className="register-form">
          <h1 className="form-title-register">Cadastro</h1>
          <input type="text" className="input-register" />
          <input type="text" className="input-register" />
          <input type="password" className="input-register" />
          <button className="register-button">Cadastrar</button>
        </form>
      </div>
      <div className="showcase-register">
        <img src={siteIcon} alt="Icon" className="showcase-icon"/>
        <p className="showcase-content">Seja bem vindo(a) ao START SUA BELEZA</p>
        <p className="showcase-content">Já possui uma conta ?</p>
        <button className="showcase-button" onClick={changeToLogin()}>Logar</button>
      </div>
    </div>
    <Footer />
    </div>
  )
  }


export default Cadastro;