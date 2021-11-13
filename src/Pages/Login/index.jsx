import React from 'react';
import siteIcon from '../../Images/Logo_startSuaBeleza.png'

import './styles.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';



const Login = () => {
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

  return(
    <div className="container">
    <div className="login-container">
      <div className="login-card">
        <form className="login-form">
          <h1 className="form-title">Login</h1>
          <input type="text" className="input-login" />
          <input type="password" className="input-login" />
          <a onClick={()=>{
                console.log('asda')
              }} href="#s" className="forget-password">Esqueceu sua senha ?</a>
          <button className="login-button">Entrar</button>
        </form>
      </div>
      <div className="showcase">
        <img src={siteIcon} alt="Icon" className="showcase-icon"/>
        <p className="showcase-content">Seja bem vindo(a) ao START SUA BELEZA</p>
        <p className="showcase-content">Não possui uma conta ?</p>
        <button className="showcase-button">Cadastrar</button>
      </div>
    </div>
    <Footer />
    </div>
  )
  }


export default Login;