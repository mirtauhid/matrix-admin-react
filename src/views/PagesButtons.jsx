import React from 'react';

const PagesButtons = () => {
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
                  <h4 className='page-title'>Widgets</h4>
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
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Small Buttons</h5>
                      <button type='button' className='btn btn-primary btn-sm'>
                        Primary
                      </button>
                      <button
                        type='button'
                        className='btn btn-secondary btn-sm'>
                        Secondary
                      </button>
                      <button
                        type='button'
                        className='btn btn-success btn-sm text-white'>
                        Success
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger btn-sm text-white'>
                        Danger
                      </button>
                      <button type='button' className='btn btn-warning btn-sm'>
                        Warning
                      </button>
                      <button type='button' className='btn btn-info btn-sm'>
                        Info
                      </button>
                      <button type='button' className='btn btn-light btn-sm'>
                        Light
                      </button>
                      <button type='button' className='btn btn-dark btn-sm'>
                        Dark
                      </button>
                      <button
                        type='button'
                        className='btn btn-link btn-sm text-decoration-none'>
                        Link
                      </button>
                    </div>
                    <div className='border-top'>
                      <div className='card-body'>
                        <h5 className='card-title'>Medium Buttons</h5>
                        <button type='button' className='btn btn-primary'>
                          Primary
                        </button>
                        <button type='button' className='btn btn-secondary'>
                          Secondary
                        </button>
                        <button
                          type='button'
                          className='btn btn-success text-white'>
                          Success
                        </button>
                        <button
                          type='button'
                          className='btn btn-danger text-white'>
                          Danger
                        </button>
                        <button type='button' className='btn btn-warning'>
                          Warning
                        </button>
                        <button type='button' className='btn btn-info'>
                          Info
                        </button>
                        <button type='button' className='btn btn-light'>
                          Light
                        </button>
                        <button type='button' className='btn btn-dark'>
                          Dark
                        </button>
                        <button
                          type='button'
                          className='btn btn-link text-decoration-none'>
                          Link
                        </button>
                      </div>
                    </div>
                    <div className='border-top'>
                      <div className='card-body'>
                        <h5 className='card-title'>Large Buttons</h5>
                        <button
                          type='button'
                          className='btn btn-primary btn-lg'>
                          Primary
                        </button>
                        <button
                          type='button'
                          className='btn btn-secondary btn-lg'>
                          Secondary
                        </button>
                        <button
                          type='button'
                          className='btn btn-success btn-lg text-white'>
                          Success
                        </button>
                        <button
                          type='button'
                          className='btn btn-danger btn-lg text-white'>
                          Danger
                        </button>
                        <button
                          type='button'
                          className='btn btn-warning btn-lg'>
                          Warning
                        </button>
                        <button type='button' className='btn btn-info btn-lg'>
                          Info
                        </button>
                        <button type='button' className='btn btn-light btn-lg'>
                          Light
                        </button>
                        <button type='button' className='btn btn-dark btn-lg'>
                          Dark
                        </button>
                        <button
                          type='button'
                          className='btn btn-link btn-lg text-decoration-none'>
                          Link
                        </button>
                      </div>
                    </div>
                    <div className='border-top'>
                      <div className='card-body'>
                        <h5 className='card-title'>Outline Buttons</h5>
                        <button
                          type='button'
                          className='btn btn-outline-primary'>
                          Primary
                        </button>
                        <button
                          type='button'
                          className='btn btn-outline-secondary'>
                          Secondary
                        </button>
                        <button
                          type='button'
                          className='btn btn-outline-success'>
                          Success
                        </button>
                        <button
                          type='button'
                          className='btn btn-outline-danger'>
                          Danger
                        </button>
                        <button
                          type='button'
                          className='btn btn-outline-warning'>
                          Warning
                        </button>
                        <button type='button' className='btn btn-outline-info'>
                          Info
                        </button>
                        <button type='button' className='btn btn-outline-light'>
                          Light
                        </button>
                        <button type='button' className='btn btn-outline-dark'>
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* drop down */}
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Dropdown Buttons</h5>
                      <div className='bd-example'>
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-primary dropdown-toggle'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Primary
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-secondary dropdown-toggle'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Secondary
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-success dropdown-toggle text-white'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Success
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-info dropdown-toggle'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Info
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-warning dropdown-toggle'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Warning
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-danger dropdown-toggle text-white'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            Danger
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                      </div>
                    </div>
                    <div className='card-body border-top'>
                      <h5 className='card-title'>Split Buttons</h5>
                      <div className='bd-example'>
                        <div className='btn-group'>
                          <button type='button' className='btn btn-primary'>
                            Primary
                          </button>
                          <button
                            type='button'
                            className='
                    btn btn-primary
                    dropdown-toggle dropdown-toggle-split
                  '
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle Dropdown</span>
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button type='button' className='btn btn-secondary'>
                            Secondary
                          </button>
                          <button
                            type='button'
                            className='
                    btn btn-secondary
                    dropdown-toggle dropdown-toggle-split
                  '
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle Dropdown</span>
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-success text-white'>
                            Success
                          </button>
                          <button
                            type='button'
                            className='
                    btn btn-success
                    dropdown-toggle dropdown-toggle-split
                    text-white
                  '
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle Dropdown</span>
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button type='button' className='btn btn-info'>
                            Info
                          </button>
                          <button
                            type='button'
                            className='
                    btn btn-info
                    dropdown-toggle dropdown-toggle-split
                  '
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle Dropdown</span>
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button type='button' className='btn btn-warning'>
                            Warning
                          </button>
                          <button
                            type='button'
                            className='
                    btn btn-warning
                    dropdown-toggle dropdown-toggle-split
                  '
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle Dropdown</span>
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                        <div className='btn-group'>
                          <button
                            type='button'
                            className='btn btn-danger text-white'>
                            Danger
                          </button>
                          <button
                            type='button'
                            className='
                    btn btn-danger
                    dropdown-toggle dropdown-toggle-split
                    text-white
                  '
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <span className='sr-only'>Toggle Dropdown</span>
                          </button>
                          <div className='dropdown-menu'>
                            <a className='dropdown-item' href='#'>
                              Action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Another action
                            </a>
                            <a className='dropdown-item' href='#'>
                              Something else here
                            </a>
                            <div className='dropdown-divider' />
                            <a className='dropdown-item' href='#'>
                              Separated link
                            </a>
                          </div>
                        </div>
                        {/* /btn-group */}
                      </div>
                    </div>
                  </div>
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

export default PagesButtons;
