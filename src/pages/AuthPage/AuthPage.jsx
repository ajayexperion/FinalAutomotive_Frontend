import React, { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthPage.module.css';

function AuthPage() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true); 
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  function signuphandler() {
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    const url = 'http://127.0.0.1:8000/api/signup/';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        // returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then({
      setIsLoading(false);,
      setIsLogin(true);
    });
        
  }
  // code end**************************
  const submitHandler = (event) => {
    event.preventDefault();
    // const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // optional: Add validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
      'http://127.0.0.1:8000/api/login/';
        
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
           
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            setIsLoading(false);
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                
                throw new Error(errorMessage);
              });
            }
          })
          .then((data) => {
            
            authCtx.login(data.jwt);
            authCtx.setUser({userName:data.username})
            sessionStorage.setItem('jwt',JSON.stringify(data.jwt))
            // cookies.setItem('jwt',JSON.stringify(data.jwt))
            sessionStorage.setItem('name',JSON.stringify(data.username))
            sessionStorage.setItem('userID',JSON.stringify(data.userID))
            // history.replace('/profile');
          })
          .catch((err) => {
            alert(err.message);
          });
    } else {
      signuphandler()
      // url =
      //   'http://127.0.0.1:8000/api/signup/';
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign up'}</h1>
      <form onSubmit={submitHandler}>
      {!isLogin && <div className={classes.control}>
            <label htmlFor='name'>Your name</label>
          <input type='name' id='name' required ref={nameInputRef} />
        </div>}
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthPage;
