import React from 'react';
import person_icon from '../../Images/IconsLogin/person-icon.png'
import showcase from '../../Images/IconsLogin/showcase.png';
import './styles.css'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'



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
      history.push('/')
    }
  }

  // function cadastro(){
  //   console.log('adsd')
  // }

  return (
    <div className="App">
      <div className="login-container">
        <img className="showcase" src={showcase} alt="Logo" />
        <form onSubmit={handleSubmit(dataSubmit)}>
          <div className="card">
            <img className="person_icon" src={person_icon} alt="Logo" />
            <h2 className="title">Bem vindo ao '**'*'</h2>

            <input placeholder="Login" type="text" id="Login" name="login" {...register("login")} />
            <input placeholder="Password" type="password" id="password" name="password" {...register("password")} />

            <h6 className="forget_password" onClick={() => {
              alert('Por favor consulte a administração para alterar a senha')
            }}>Esqueci minha senha</h6>
            <button className="btn">Login</button>
            <span className="btn-cadastro" onClick={() => {
              console.log('ads')
            }}>Cadastro</span>
          </div>
        </form>

      </div>
    </div>
  );
}


export default Login;