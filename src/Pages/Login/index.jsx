import React from 'react';
import siteIcon from '../../Images/Logo_startSuaBeleza.png'

import './styles.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Login = () => {
  const { register, handleSubmit } = useForm();

  let history = useHistory();

  const dataSubmit = data => {
    const { login, password } = data;
    if (!login && !password) {
      Swal.fire({
        icon: 'error',
        text: 'Insira o login e a senha para acessar!',
      })
    } else if (!login) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor insira o login',
      })
    } else if (!password) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor insira a senha',
      })
    } else {
      localStorage.setItem('login', login)
      history.push('/home')
    }
  }

  // function cadastro(){
  //   console.log('adsd')
  // }
  async function changeToRegister() {
    // history.push('/cadastro')
    const { value: formValues } = await Swal.fire({
      title: 'Cadastro',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Login">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Email" type="email">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Senha" type="password">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value
        ]
      }
    })

    const form = JSON.stringify(formValues)
    if (form === undefined) {

    } else {
      if (formValues[0] !== '' && formValues[1] !== '' && formValues[2] !== '') {
        Swal.fire({
          icon: 'success',
          text: 'Cadastro feito com sucesso',
        })
        localStorage.setItem('login', formValues[0])
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Todos os campos de cadastro devem ser preenchidos',
        })
      }
    }
  }
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit(dataSubmit)}>
            <h1 className="form-title">Login</h1>
            <input type="text" className="input-login" placeholder="Login" {...register("login")} />
            <input type="password" className="input-login" placeholder="Senha" {...register("password")} />
            <a onClick={async () => {

              const { value: email } = await Swal.fire({
                title: 'Insira seu email',
                input: 'email',
                inputLabel: 'Informe seu email para realizarmos a recupera????o',
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                inputValidator: (value) => {
                  if (!value) {
                    return 'Por favor insira um email valido!'
                  }
                }
              })

              if (email) {
                Swal.fire(`Sua requisi????o para altera????o de senha foi enviada`)
              }
            }} className="forget-password" >Esqueceu sua senha ?</a>
            <button className="login-button">Entrar</button>
          </form>
        </div>
        <div className="showcase">
          <img src={siteIcon} alt="Icon" className="showcase-icon" />
          <p className="showcase-content">Seja bem vindo(a) ao START SUA BELEZA</p>
          <p className="showcase-content">N??o possui uma conta ?</p>
          <button className="showcase-button" onClick={() => { changeToRegister() }}>Cadastrar</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Login;