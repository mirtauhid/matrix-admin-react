import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../services/api';

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return setNewUser({ ...newUser, email: mail });
    }
    alert('You have entered an invalid email address!');
    return false;
  }

  const addUser = (e) => {
    e.preventDefault();
    if (newUser.username.length >= 8) {
      if (newUser.password.length >= 8) {
        if (newUser.password === newUser.confirm) {
          register(newUser);
          document.getElementById('registerForm').reset();
          setNewUser({
            username: '',
            email: '',
            password: '',
            confirm: '',
          });
        } else {
          alert('Confirm password should be matched');
        }
      } else {
        alert('Password should be 8 characters minimum.');
      }
    } else {
      alert('Username should be 8 characters minimum.');
    }
  };

  return (
    <div>
      <div className='main-wrapper'>
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}

        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Login box.scss */}
        {/* ============================================================== */}
        <div
          style={{ minHeight: '100vh' }}
          className='
    auth-wrapper
    d-flex
    no-block
    justify-content-center
    align-items-center
    bg-dark
  '>
          <div className='auth-box bg-dark border-top border-secondary'>
            <div>
              <div className='text-center pt-3 pb-3'>
                <span className='db'>
                  <img src='../assets/images/logo.png' alt='logo' />
                </span>
              </div>
              {/* Form */}
              <form
                id='registerForm'
                className='form-horizontal mt-3'
                action='index.html'>
                <div className='row pb-4'>
                  <div className='col-12'>
                    <div className='input-group mb-3'>
                      <div className='input-group-prepend'>
                        <span
                          className='input-group-text bg-success text-white h-100'
                          id='basic-addon1'>
                          <i className='mdi mdi-account fs-4' />
                        </span>
                      </div>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        required
                        onBlur={(e) =>
                          setNewUser({ ...newUser, username: e.target.value })
                        }
                      />
                    </div>
                    {/* email */}
                    <div className='input-group mb-3'>
                      <div className='input-group-prepend'>
                        <span
                          className='input-group-text bg-danger text-white h-100'
                          id='basic-addon1'>
                          <i className='mdi mdi-email fs-4' />
                        </span>
                      </div>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Email Address'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        required
                        onBlur={(e) => ValidateEmail(e.target.value)}
                      />
                    </div>
                    <div className='input-group mb-3'>
                      <div className='input-group-prepend'>
                        <span
                          className='input-group-text bg-warning text-white h-100'
                          id='basic-addon2'>
                          <i className='mdi mdi-lock fs-4' />
                        </span>
                      </div>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Password'
                        aria-label='Password'
                        aria-describedby='basic-addon1'
                        required
                        onBlur={(e) =>
                          setNewUser({ ...newUser, password: e.target.value })
                        }
                      />
                    </div>
                    <div className='input-group mb-3'>
                      <div className='input-group-prepend'>
                        <span
                          className='input-group-text bg-info text-white h-100'
                          id='basic-addon2'>
                          <i className='mdi mdi-lock fs-4' />
                        </span>
                      </div>
                      <input
                        type='text'
                        className='form-control form-control-lg'
                        placeholder=' Confirm Password'
                        aria-label='Password'
                        aria-describedby='basic-addon1'
                        required
                        onBlur={(e) =>
                          setNewUser({ ...newUser, confirm: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='row border-top border-secondary'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <div className='pt-3 d-grid'>
                        <button
                          onClick={(e) => addUser(e)}
                          className='btn btn-block btn-lg btn-info'
                          type='submit'>
                          Sign Up
                        </button>
                        <h4
                          style={{
                            textAlign: 'center',
                            marginTop: '10px',
                            color: '#fff',
                          }}>
                          Or
                        </h4>
                        <Link
                          to='/signin'
                          className='btn btn-block btn-lg btn-info'
                          type='submit'>
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* Login box.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper scss in scafholding.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper scss in scafholding.scss */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Right Sidebar */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Right Sidebar */}
        {/* ============================================================== */}
      </div>
    </div>
  );
};

export default SignUp;
