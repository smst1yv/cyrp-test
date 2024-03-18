import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [showChanges, setShowChanges] = useState(false);

  const togglePasswordVisibility = (type) => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else if (type === 'passwordRepeat') {
      setShowPasswordRepeat(!showPasswordRepeat);
    }
  };

  const toggleChangesVisibility = () => {
    setShowChanges(!showChanges);
  };
  return (
    <>
      <div className="ceyt" >
        <div className="login-container">
            <h1>Giris Yap</h1>
            <form action="#" className="form-login">
                <div className="textfield">
                    <label htmlFor="email"> E-mail</label>
                    <input type="email" name="email" placeholder="E-mail" />
                </div>
                <div className="textfield">
                    <label htmlFor="senha"> Password</label>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <button className="btn-login">Login </button>
            </form>
            </div>
    </div>


    <section style={{textAlign:'center'}} className='container'>
        <div className='profile-photo'>
          <img src="/images/pp.jpg" alt="" />
        </div>
        <div className='email'>
          <span>user@gmail.com</span>
        </div>
        <div className='price'>
          <span>Bakiye :</span> <span>500$</span>
        </div>
        <div className='changeps'>
          <button onClick={toggleChangesVisibility} className='btn btn-text-blue' style={{border:'none'}} >Şifreyi Değiştir</button>
        </div>
    </section>



    <div className={showChanges ? 'changes' : 'changes hidden'}>
        <div className='password-in'>
          <span onClick={toggleChangesVisibility} className='xmark'><i class="fa-solid fa-xmark"></i></span>
          <form action="">
            <div className='cp' style={{marginBottom:'1rem'}}>
              <label htmlFor="">Yeni Şifre</label>
              <input style={{height:'28px'}} type={showPassword ? 'text' : 'password'}/> <span onClick={() => togglePasswordVisibility('password')}><i className="fa-solid fa-eye" style={{color:'#ed1b0c',cursor:'pointer'}}></i></span>
            </div>
            <div className='cp'>
              <label htmlFor="">Şifre Tekrar</label>
              <input style={{height:'28px'}} type={showPasswordRepeat ? 'text' : 'password'}/> <span onClick={() => togglePasswordVisibility('passwordRepeat')}> <i className="fa-solid fa-eye" style={{color:'#ed1b0c',cursor:'pointer'}}></i></span>
            </div>
            <input className='btn' type="submit" value={'Şifreyi Yenile'} style={{cursor:'pointer',border:'none',height:'3rem',marginTop:'1rem'}} />
          </form>
        </div>
    </div>
    </>
  )
}

export default Login
