import React from 'react';

const FormWizard = () => {
  return (
    <div>
      <div>
        {/* ============================================================== */}
        {/* Main wrapper - style you can find in pages.scss */}
        {/* ============================================================== */}
        <div
          id='main-wrapper'
          data-layout='vertical'
          data-navbarbg='skin5'
          data-sidebartype='full'
          data-sidebar-position='absolute'
          data-header-position='absolute'
          data-boxed-layout='full'>
          {/* ============================================================== */}
          {/* Topbar header - style you can find in pages.scss */}
          {/* ============================================================== */}

          {/* ============================================================== */}
          {/* End Topbar header */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}

          {/* ============================================================== */}
          {/* End Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Page wrapper  */}
          {/* ============================================================== */}
          <div className='page-wrapper'>
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className='page-breadcrumb'>
              <div className='row'>
                <div className='col-12 d-flex no-block align-items-center'>
                  <h4 className='page-title'>Form Wizard</h4>
                  <div className='ms-auto text-end'>
                    <nav aria-label='breadcrumb'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'>
                          <a href='#'>Home</a>
                        </li>
                        <li
                          className='breadcrumb-item active'
                          aria-current='page'>
                          Library
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Container fluid  */}
            {/* ============================================================== */}
            <div className='container-fluid'>
              {/* ============================================================== */}
              {/* Start Page Content */}
              {/* ============================================================== */}
              <div className='card'>
                <div className='card-body wizard-content'>
                  <h4 className='card-title'>Basic Form Example</h4>
                  <h6 className='card-subtitle' />
                  <form id='example-form' action='#' className='mt-5'>
                    <div>
                      <h3>Account</h3>
                      <section>
                        <label htmlFor='userName'>User name *</label>
                        <input
                          id='userName'
                          name='userName'
                          type='text'
                          className='required form-control'
                        />
                        <label htmlFor='password'>Password *</label>
                        <input
                          id='password'
                          name='password'
                          type='text'
                          className='required form-control'
                        />
                        <label htmlFor='confirm'>Confirm Password *</label>
                        <input
                          id='confirm'
                          name='confirm'
                          type='text'
                          className='required form-control'
                        />
                        <p>(*) Mandatory</p>
                      </section>
                      <h3>Profile</h3>
                      <section>
                        <label htmlFor='name'>First name *</label>
                        <input
                          id='name'
                          name='name'
                          type='text'
                          className='required form-control'
                        />
                        <label htmlFor='surname'>Last name *</label>
                        <input
                          id='surname'
                          name='surname'
                          type='text'
                          className='required form-control'
                        />
                        <label htmlFor='email'>Email *</label>
                        <input
                          id='email'
                          name='email'
                          type='text'
                          className='required email form-control'
                        />
                        <label htmlFor='address'>Address</label>
                        <input
                          id='address'
                          name='address'
                          type='text'
                          className='form-control'
                        />
                        <p>(*) Mandatory</p>
                      </section>
                      <h3>Hints</h3>
                      <section>
                        <ul>
                          <li>Foo</li>
                          <li>Bar</li>
                          <li>Foobar</li>
                        </ul>
                      </section>
                      <h3>Finish</h3>
                      <section>
                        <input
                          id='acceptTerms'
                          name='acceptTerms'
                          type='checkbox'
                          className='required'
                        />
                        <label htmlFor='acceptTerms'>
                          I agree with the Terms and Conditions.
                        </label>
                      </section>
                    </div>
                  </form>
                </div>
              </div>
              {/* ============================================================== */}
              {/* End PAge Content */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Right sidebar */}
              {/* ============================================================== */}
              {/* .right-sidebar */}
              {/* ============================================================== */}
              {/* End Right sidebar */}
              {/* ============================================================== */}
            </div>
            {/* ============================================================== */}
            {/* End Container fluid  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}

            {/* ============================================================== */}
            {/* End footer */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* End Page wrapper  */}
          {/* ============================================================== */}
        </div>
      </div>
    </div>
  );
};

export default FormWizard;
