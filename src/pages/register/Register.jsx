import { useState, useRef } from 'react'

import LogoImage from '../../images/netflix-82871.png'

import './register.scss'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={LogoImage}
            alt="Logo"
          />

          <button className="login-button">
            Sign In
          </button>
        </div>
      </div>

      <div className="container">
        <h1>
          Unlimited movies. TV shows. and more.
        </h1>

        <h2>
          Watch anywhere. Cancel anytime.
        </h2>

        <p>
          Ready to watch? Enter your email to create
          or restart your membership.
        </p>
        {
          !email ? (
            <div className="input">
              <input
                type="email"
                placeholder="Email address"
                ref={emailRef}
              />

              <button
                onClick={handleStart}
                className="register-button"
              >
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />

              <button
                onClick={handleFinish}
                className="register-button"
              >
                Start
              </button>
            </form>
          )
        }

      </div>
    </div>
  )
}
