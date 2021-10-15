import React from 'react';

const SignIn = () => {
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
          className='
    auth-wrapper
    d-flex
    no-block
    justify-content-center
    align-items-center
    bg-dark
  '>
          <div className='auth-box bg-dark border-top border-secondary'>
            <div id='loginform'>
              <div className='text-center pt-3 pb-3'>
                <span className='db'>
                  <img src='../assets/images/logo.png' alt='logo' />
                </span>
              </div>
              {/* Form */}
              <form
                className='form-horizontal mt-3'
                id='loginform'
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
                      />
                    </div>
                  </div>
                </div>
                <div className='row border-top border-secondary'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <div className='pt-3'>
                        <button
                          className='btn btn-info'
                          id='to-recover'
                          type='button'>
                          <i className='mdi mdi-lock fs-4 me-1' /> Lost
                          password?
                        </button>
                        <button
                          className='btn btn-success float-end text-white'
                          type='submit'>
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id='recoverform'>
              <div className='text-center'>
                <span className='text-white'>
                  Enter your e-mail address below and we will send you
                  instructions how to recover a password.
                </span>
              </div>
              <div className='row mt-3'>
                {/* Form */}
                <form className='col-12' action='index.html'>
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
                    />
                  </div>
                  {/* pwd */}
                  <div className='row mt-3 pt-3 border-top border-secondary'>
                    <div className='col-12'>
                      <a
                        className='btn btn-success text-white'
                        href='#'
                        id='to-login'
                        name='action'>
                        Back To Login
                      </a>
                      <button
                        className='btn btn-info float-end'
                        type='button'
                        name='action'>
                        Recover
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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

export default SignIn;
