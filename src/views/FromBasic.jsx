import React from 'react';

const FromBasic = () => {
  return (
    <div>
      <div>
        <div className='preloader'>
          <div className='lds-ripple'>
            <div className='lds-pos' />
            <div className='lds-pos' />
          </div>
        </div>
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
          <header className='topbar' data-navbarbg='skin5'>
            <nav className='navbar top-navbar navbar-expand-md navbar-dark'>
              <div className='navbar-header' data-logobg='skin5'>
                {/* ============================================================== */}
                {/* Logo */}
                {/* ============================================================== */}
                <a className='navbar-brand' href='index.html'>
                  {/* Logo icon */}
                  <b className='logo-icon ps-2'>
                    {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                    {/* Dark Logo icon */}
                    <img
                      src='../assets/images/logo-icon.png'
                      alt='homepage'
                      className='light-logo'
                      width={25}
                    />
                  </b>
                  {/*End Logo icon */}
                  {/* Logo text */}
                  <span className='logo-text ms-2'>
                    {/* dark Logo text */}
                    <img
                      src='../assets/images/logo-text.png'
                      alt='homepage'
                      className='light-logo'
                    />
                  </span>
                  {/* Logo icon */}
                  {/* <b class="logo-icon"> */}
                  {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                  {/* Dark Logo icon */}
                  {/* <img src="../assets/images/logo-text.png" alt="homepage" class="light-logo" /> */}
                  {/* </b> */}
                  {/*End Logo icon */}
                </a>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Toggle which is visible on mobile only */}
                {/* ============================================================== */}
                <a
                  className='nav-toggler waves-effect waves-light d-block d-md-none'
                  href='javascript:void(0)'>
                  <i className='ti-menu ti-close' />
                </a>
              </div>
              {/* ============================================================== */}
              {/* End Logo */}
              {/* ============================================================== */}
              <div
                className='navbar-collapse collapse'
                id='navbarSupportedContent'
                data-navbarbg='skin5'>
                {/* ============================================================== */}
                {/* toggle and nav items */}
                {/* ============================================================== */}
                <ul className='navbar-nav float-start me-auto'>
                  <li className='nav-item d-none d-lg-block'>
                    <a
                      className='nav-link sidebartoggler waves-effect waves-light'
                      href='javascript:void(0)'
                      data-sidebartype='mini-sidebar'>
                      <i className='mdi mdi-menu font-24' />
                    </a>
                  </li>
                  {/* ============================================================== */}
                  {/* create new */}
                  {/* ============================================================== */}
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      <span className='d-none d-md-block'>
                        Create New <i className='fa fa-angle-down' />
                      </span>
                      <span className='d-block d-md-none'>
                        <i className='fa fa-plus' />
                      </span>
                    </a>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Action
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* ============================================================== */}
                  {/* Search */}
                  {/* ============================================================== */}
                  <li className='nav-item search-box'>
                    <a
                      className='nav-link waves-effect waves-dark'
                      href='javascript:void(0)'>
                      <i className='mdi mdi-magnify fs-4' />
                    </a>
                    <form className='app-search position-absolute'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search & enter'
                      />
                      <a className='srh-btn'>
                        <i className='mdi mdi-window-close' />
                      </a>
                    </form>
                  </li>
                </ul>
                {/* ============================================================== */}
                {/* Right side toggle and nav items */}
                {/* ============================================================== */}
                <ul className='navbar-nav float-end'>
                  {/* ============================================================== */}
                  {/* Comment */}
                  {/* ============================================================== */}
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      <i className='mdi mdi-bell font-24' />
                    </a>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Action
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <a className='dropdown-item' href='#'>
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* ============================================================== */}
                  {/* End Comment */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* Messages */}
                  {/* ============================================================== */}
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle waves-effect waves-dark'
                      href='#'
                      id={2}
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      <i className='font-24 mdi mdi-comment-processing' />
                    </a>
                    <ul
                      className='
              dropdown-menu dropdown-menu-end
              mailbox
              animated
              bounceInDown
            '
                      aria-labelledby={2}>
                      <ul className='list-style-none'>
                        <li>
                          <div className>
                            {/* Message */}
                            <a
                              href='javascript:void(0)'
                              className='link border-top'>
                              <div className='d-flex no-block align-items-center p-10'>
                                <span
                                  className='
                          btn btn-success btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        '>
                                  <i className='mdi mdi-calendar text-white fs-4' />
                                </span>
                                <div className='ms-2'>
                                  <h5 className='mb-0'>Event today</h5>
                                  <span className='mail-desc'>
                                    Just a reminder that event
                                  </span>
                                </div>
                              </div>
                            </a>
                            {/* Message */}
                            <a
                              href='javascript:void(0)'
                              className='link border-top'>
                              <div className='d-flex no-block align-items-center p-10'>
                                <span
                                  className='
                          btn btn-info btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        '>
                                  <i className='mdi mdi-settings fs-4' />
                                </span>
                                <div className='ms-2'>
                                  <h5 className='mb-0'>Settings</h5>
                                  <span className='mail-desc'>
                                    You can customize this template
                                  </span>
                                </div>
                              </div>
                            </a>
                            {/* Message */}
                            <a
                              href='javascript:void(0)'
                              className='link border-top'>
                              <div className='d-flex no-block align-items-center p-10'>
                                <span
                                  className='
                          btn btn-primary btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        '>
                                  <i className='mdi mdi-account fs-4' />
                                </span>
                                <div className='ms-2'>
                                  <h5 className='mb-0'>Pavan kumar</h5>
                                  <span className='mail-desc'>
                                    Just see the my admin!
                                  </span>
                                </div>
                              </div>
                            </a>
                            {/* Message */}
                            <a
                              href='javascript:void(0)'
                              className='link border-top'>
                              <div className='d-flex no-block align-items-center p-10'>
                                <span
                                  className='
                          btn btn-danger btn-circle
                          d-flex
                          align-items-center
                          justify-content-center
                        '>
                                  <i className='mdi mdi-link fs-4' />
                                </span>
                                <div className='ms-2'>
                                  <h5 className='mb-0'>Luanch Admin</h5>
                                  <span className='mail-desc'>
                                    Just see the my new admin!
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  {/* ============================================================== */}
                  {/* End Messages */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* User profile and search */}
                  {/* ============================================================== */}
                  <li className='nav-item dropdown'>
                    <a
                      className='
              nav-link
              dropdown-toggle
              text-muted
              waves-effect waves-dark
              pro-pic
            '
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      <img
                        src='../assets/images/users/1.jpg'
                        alt='user'
                        className='rounded-circle'
                        width={31}
                      />
                    </a>
                    <ul
                      className='dropdown-menu dropdown-menu-end user-dd animated'
                      aria-labelledby='navbarDropdown'>
                      <a className='dropdown-item' href='javascript:void(0)'>
                        <i className='mdi mdi-account me-1 ms-1' /> My Profile
                      </a>
                      <a className='dropdown-item' href='javascript:void(0)'>
                        <i className='mdi mdi-wallet me-1 ms-1' /> My Balance
                      </a>
                      <a className='dropdown-item' href='javascript:void(0)'>
                        <i className='mdi mdi-email me-1 ms-1' /> Inbox
                      </a>
                      <div className='dropdown-divider' />
                      <a className='dropdown-item' href='javascript:void(0)'>
                        <i className='mdi mdi-settings me-1 ms-1' /> Account
                        Setting
                      </a>
                      <div className='dropdown-divider' />
                      <a className='dropdown-item' href='javascript:void(0)'>
                        <i className='fa fa-power-off me-1 ms-1' /> Logout
                      </a>
                      <div className='dropdown-divider' />
                      <div className='ps-4 p-10'>
                        <a
                          href='javascript:void(0)'
                          className='btn btn-sm btn-success btn-rounded text-white'>
                          View Profile
                        </a>
                      </div>
                    </ul>
                  </li>
                  {/* ============================================================== */}
                  {/* User profile and search */}
                  {/* ============================================================== */}
                </ul>
              </div>
            </nav>
          </header>
          {/* ============================================================== */}
          {/* End Topbar header */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          <aside className='left-sidebar' data-sidebarbg='skin5'>
            {/* Sidebar scroll*/}
            <div className='scroll-sidebar'>
              {/* Sidebar navigation*/}
              <nav className='sidebar-nav'>
                <ul id='sidebarnav' className='pt-4'>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='index.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-view-dashboard' />
                      <span className='hide-menu'>Dashboard</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='charts.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-chart-bar' />
                      <span className='hide-menu'>Charts</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='widgets.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-chart-bubble' />
                      <span className='hide-menu'>Widgets</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='tables.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-border-inside' />
                      <span className='hide-menu'>Tables</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='grid.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-blur-linear' />
                      <span className='hide-menu'>Full Width</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link has-arrow waves-effect waves-dark'
                      href='javascript:void(0)'
                      aria-expanded='false'>
                      <i className='mdi mdi-receipt' />
                      <span className='hide-menu'>Forms </span>
                    </a>
                    <ul aria-expanded='false' className='collapse first-level'>
                      <li className='sidebar-item'>
                        <a href='form-basic.html' className='sidebar-link'>
                          <i className='mdi mdi-note-outline' />
                          <span className='hide-menu'> Form Basic </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='form-wizard.html' className='sidebar-link'>
                          <i className='mdi mdi-note-plus' />
                          <span className='hide-menu'> Form Wizard </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='pages-buttons.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-relative-scale' />
                      <span className='hide-menu'>Buttons</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link has-arrow waves-effect waves-dark'
                      href='javascript:void(0)'
                      aria-expanded='false'>
                      <i className='mdi mdi-face' />
                      <span className='hide-menu'>Icons </span>
                    </a>
                    <ul aria-expanded='false' className='collapse first-level'>
                      <li className='sidebar-item'>
                        <a href='icon-material.html' className='sidebar-link'>
                          <i className='mdi mdi-emoticon' />
                          <span className='hide-menu'> Material Icons </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a
                          href='icon-fontawesome.html'
                          className='sidebar-link'>
                          <i className='mdi mdi-emoticon-cool' />
                          <span className='hide-menu'>
                            {' '}
                            Font Awesome Icons{' '}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link waves-effect waves-dark sidebar-link'
                      href='pages-elements.html'
                      aria-expanded='false'>
                      <i className='mdi mdi-pencil' />
                      <span className='hide-menu'>Elements</span>
                    </a>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link has-arrow waves-effect waves-dark'
                      href='javascript:void(0)'
                      aria-expanded='false'>
                      <i className='mdi mdi-move-resize-variant' />
                      <span className='hide-menu'>Addons </span>
                    </a>
                    <ul aria-expanded='false' className='collapse first-level'>
                      <li className='sidebar-item'>
                        <a href='index2.html' className='sidebar-link'>
                          <i className='mdi mdi-view-dashboard' />
                          <span className='hide-menu'> Dashboard-2 </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='pages-gallery.html' className='sidebar-link'>
                          <i className='mdi mdi-multiplication-box' />
                          <span className='hide-menu'> Gallery </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='pages-calendar.html' className='sidebar-link'>
                          <i className='mdi mdi-calendar-check' />
                          <span className='hide-menu'> Calendar </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='pages-invoice.html' className='sidebar-link'>
                          <i className='mdi mdi-bulletin-board' />
                          <span className='hide-menu'> Invoice </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='pages-chat.html' className='sidebar-link'>
                          <i className='mdi mdi-message-outline' />
                          <span className='hide-menu'> Chat Option </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link has-arrow waves-effect waves-dark'
                      href='javascript:void(0)'
                      aria-expanded='false'>
                      <i className='mdi mdi-account-key' />
                      <span className='hide-menu'>Authentication </span>
                    </a>
                    <ul aria-expanded='false' className='collapse first-level'>
                      <li className='sidebar-item'>
                        <a
                          href='authentication-login.html'
                          className='sidebar-link'>
                          <i className='mdi mdi-all-inclusive' />
                          <span className='hide-menu'> Login </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a
                          href='authentication-register.html'
                          className='sidebar-link'>
                          <i className='mdi mdi-all-inclusive' />
                          <span className='hide-menu'> Register </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sidebar-item'>
                    <a
                      className='sidebar-link has-arrow waves-effect waves-dark'
                      href='javascript:void(0)'
                      aria-expanded='false'>
                      <i className='mdi mdi-alert' />
                      <span className='hide-menu'>Errors </span>
                    </a>
                    <ul aria-expanded='false' className='collapse first-level'>
                      <li className='sidebar-item'>
                        <a href='error-403.html' className='sidebar-link'>
                          <i className='mdi mdi-alert-octagon' />
                          <span className='hide-menu'> Error 403 </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='error-404.html' className='sidebar-link'>
                          <i className='mdi mdi-alert-octagon' />
                          <span className='hide-menu'> Error 404 </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='error-405.html' className='sidebar-link'>
                          <i className='mdi mdi-alert-octagon' />
                          <span className='hide-menu'> Error 405 </span>
                        </a>
                      </li>
                      <li className='sidebar-item'>
                        <a href='error-500.html' className='sidebar-link'>
                          <i className='mdi mdi-alert-octagon' />
                          <span className='hide-menu'> Error 500 </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sidebar-item p-3'>
                    <a
                      href='https://github.com/wrappixel/matrix-admin-bt5'
                      target='_blank'
                      className='
              w-100
              btn btn-cyan
              d-flex
              align-items-center
              text-white
            '>
                      <i className='mdi mdi-cloud-download font-20 me-2' />
                      Download Free
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
          </aside>
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
                  <h4 className='page-title'>Form Basic</h4>
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
                <div className='col-md-6'>
                  <div className='card'>
                    <form className='form-horizontal'>
                      <div className='card-body'>
                        <h4 className='card-title'>Personal Info</h4>
                        <div className='form-group row'>
                          <label
                            htmlFor='fname'
                            className='col-sm-3 text-end control-label col-form-label'>
                            First Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              id='fname'
                              placeholder='First Name Here'
                            />
                          </div>
                        </div>
                        <div className='form-group row'>
                          <label
                            htmlFor='lname'
                            className='col-sm-3 text-end control-label col-form-label'>
                            Last Name
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              id='lname'
                              placeholder='Last Name Here'
                            />
                          </div>
                        </div>
                        <div className='form-group row'>
                          <label
                            htmlFor='lname'
                            className='col-sm-3 text-end control-label col-form-label'>
                            Password
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='password'
                              className='form-control'
                              id='lname'
                              placeholder='Password Here'
                            />
                          </div>
                        </div>
                        <div className='form-group row'>
                          <label
                            htmlFor='email1'
                            className='col-sm-3 text-end control-label col-form-label'>
                            Company
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              id='email1'
                              placeholder='Company Name Here'
                            />
                          </div>
                        </div>
                        <div className='form-group row'>
                          <label
                            htmlFor='cono1'
                            className='col-sm-3 text-end control-label col-form-label'>
                            Contact No
                          </label>
                          <div className='col-sm-9'>
                            <input
                              type='text'
                              className='form-control'
                              id='cono1'
                              placeholder='Contact No Here'
                            />
                          </div>
                        </div>
                        <div className='form-group row'>
                          <label
                            htmlFor='cono1'
                            className='col-sm-3 text-end control-label col-form-label'>
                            Message
                          </label>
                          <div className='col-sm-9'>
                            <textarea
                              className='form-control'
                              defaultValue={''}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='border-top'>
                        <div className='card-body'>
                          <button type='button' className='btn btn-primary'>
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Form Elements</h5>
                      <div className='form-group row'>
                        <label className='col-md-3 mt-3'>Single Select</label>
                        <div className='col-md-9'>
                          <select
                            className='select2 form-select shadow-none'
                            style={{ width: '100%', height: '36px' }}>
                            <option>Select</option>
                            <optgroup label='Alaskan/Hawaiian Time Zone'>
                              <option value='AK'>Alaska</option>
                              <option value='HI'>Hawaii</option>
                            </optgroup>
                            <optgroup label='Pacific Time Zone'>
                              <option value='CA'>California</option>
                              <option value='NV'>Nevada</option>
                              <option value='OR'>Oregon</option>
                              <option value='WA'>Washington</option>
                            </optgroup>
                            <optgroup label='Mountain Time Zone'>
                              <option value='AZ'>Arizona</option>
                              <option value='CO'>Colorado</option>
                              <option value='ID'>Idaho</option>
                              <option value='MT'>Montana</option>
                              <option value='NE'>Nebraska</option>
                              <option value='NM'>New Mexico</option>
                              <option value='ND'>North Dakota</option>
                              <option value='UT'>Utah</option>
                              <option value='WY'>Wyoming</option>
                            </optgroup>
                            <optgroup label='Central Time Zone'>
                              <option value='AL'>Alabama</option>
                              <option value='AR'>Arkansas</option>
                              <option value='IL'>Illinois</option>
                              <option value='IA'>Iowa</option>
                              <option value='KS'>Kansas</option>
                              <option value='KY'>Kentucky</option>
                              <option value='LA'>Louisiana</option>
                              <option value='MN'>Minnesota</option>
                              <option value='MS'>Mississippi</option>
                              <option value='MO'>Missouri</option>
                              <option value='OK'>Oklahoma</option>
                              <option value='SD'>South Dakota</option>
                              <option value='TX'>Texas</option>
                              <option value='TN'>Tennessee</option>
                              <option value='WI'>Wisconsin</option>
                            </optgroup>
                            <optgroup label='Eastern Time Zone'>
                              <option value='CT'>Connecticut</option>
                              <option value='DE'>Delaware</option>
                              <option value='FL'>Florida</option>
                              <option value='GA'>Georgia</option>
                              <option value='IN'>Indiana</option>
                              <option value='ME'>Maine</option>
                              <option value='MD'>Maryland</option>
                              <option value='MA'>Massachusetts</option>
                              <option value='MI'>Michigan</option>
                              <option value='NH'>New Hampshire</option>
                              <option value='NJ'>New Jersey</option>
                              <option value='NY'>New York</option>
                              <option value='NC'>North Carolina</option>
                              <option value='OH'>Ohio</option>
                              <option value='PA'>Pennsylvania</option>
                              <option value='RI'>Rhode Island</option>
                              <option value='SC'>South Carolina</option>
                              <option value='VT'>Vermont</option>
                              <option value='VA'>Virginia</option>
                              <option value='WV'>West Virginia</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className='form-group row'>
                        <label className='col-md-3 mt-3'>Multiple Select</label>
                        <div className='col-md-9'>
                          <select
                            className='select2 form-select shadow-none mt-3'
                            multiple='multiple'
                            style={{ height: '36px', width: '100%' }}>
                            <optgroup label='Alaskan/Hawaiian Time Zone'>
                              <option value='AK'>Alaska</option>
                              <option value='HI'>Hawaii</option>
                            </optgroup>
                            <optgroup label='Pacific Time Zone'>
                              <option value='CA'>California</option>
                              <option value='NV'>Nevada</option>
                              <option value='OR'>Oregon</option>
                              <option value='WA'>Washington</option>
                            </optgroup>
                            <optgroup label='Mountain Time Zone'>
                              <option value='AZ'>Arizona</option>
                              <option value='CO'>Colorado</option>
                              <option value='ID'>Idaho</option>
                              <option value='MT'>Montana</option>
                              <option value='NE'>Nebraska</option>
                              <option value='NM' selected>
                                New Mexico
                              </option>
                              <option value='ND'>North Dakota</option>
                              <option value='UT'>Utah</option>
                              <option value='WY'>Wyoming</option>
                            </optgroup>
                            <optgroup label='Central Time Zone'>
                              <option value='AL'>Alabama</option>
                              <option value='AR'>Arkansas</option>
                              <option value='IL'>Illinois</option>
                              <option value='IA'>Iowa</option>
                              <option value='KS'>Kansas</option>
                              <option value='KY'>Kentucky</option>
                              <option value='LA'>Louisiana</option>
                              <option value='MN'>Minnesota</option>
                              <option value='MS'>Mississippi</option>
                              <option value='MO'>Missouri</option>
                              <option value='OK'>Oklahoma</option>
                              <option value='SD' selected>
                                South Dakota
                              </option>
                              <option value='TX'>Texas</option>
                              <option value='TN'>Tennessee</option>
                              <option value='WI'>Wisconsin</option>
                            </optgroup>
                            <optgroup label='Eastern Time Zone'>
                              <option value='CT'>Connecticut</option>
                              <option value='DE'>Delaware</option>
                              <option value='FL'>Florida</option>
                              <option value='GA'>Georgia</option>
                              <option value='IN'>Indiana</option>
                              <option value='ME'>Maine</option>
                              <option value='MD'>Maryland</option>
                              <option value='MA'>Massachusetts</option>
                              <option value='MI'>Michigan</option>
                              <option value='NH'>New Hampshire</option>
                              <option value='NJ'>New Jersey</option>
                              <option value='NY'>New York</option>
                              <option value='NC'>North Carolina</option>
                              <option value='OH'>Ohio</option>
                              <option value='PA'>Pennsylvania</option>
                              <option value='RI'>Rhode Island</option>
                              <option value='SC'>South Carolina</option>
                              <option value='VT'>Vermont</option>
                              <option value='VA'>Virginia</option>
                              <option value='WV'>West Virginia</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className='form-group row'>
                        <label className='col-md-3'>Radio Buttons</label>
                        <div className='col-md-9'>
                          <div className='form-check'>
                            <input
                              type='radio'
                              className='form-check-input'
                              id='customControlValidation1'
                              name='radio-stacked'
                              required
                            />
                            <label
                              className='form-check-label mb-0'
                              htmlFor='customControlValidation1'>
                              First One
                            </label>
                          </div>
                          <div className='form-check'>
                            <input
                              type='radio'
                              className='form-check-input'
                              id='customControlValidation2'
                              name='radio-stacked'
                              required
                            />
                            <label
                              className='form-check-label mb-0'
                              htmlFor='customControlValidation2'>
                              Second One
                            </label>
                          </div>
                          <div className='form-check'>
                            <input
                              type='radio'
                              className='form-check-input'
                              id='customControlValidation3'
                              name='radio-stacked'
                              required
                            />
                            <label
                              className='form-check-label mb-0'
                              htmlFor='customControlValidation3'>
                              Third One
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className='form-group row'>
                        <label className='col-md-3'>Checkboxes</label>
                        <div className='col-md-9'>
                          <div className='form-check mr-sm-2'>
                            <input
                              type='checkbox'
                              className='form-check-input'
                              id='customControlAutosizing1'
                            />
                            <label
                              className='form-check-label mb-0'
                              htmlFor='customControlAutosizing1'>
                              First One
                            </label>
                          </div>
                          <div className='form-check mr-sm-2'>
                            <input
                              type='checkbox'
                              className='form-check-input'
                              id='customControlAutosizing2'
                            />
                            <label
                              className='form-check-label mb-0'
                              htmlFor='customControlAutosizing2'>
                              Second One
                            </label>
                          </div>
                          <div className='form-check mr-sm-2'>
                            <input
                              type='checkbox'
                              className='form-check-input'
                              id='customControlAutosizing3'
                            />
                            <label
                              className='form-check-label mb-0'
                              htmlFor='customControlAutosizing3'>
                              Third One
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className='form-group row'>
                        <label className='col-md-3'>File Upload</label>
                        <div className='col-md-9'>
                          <div className='custom-file'>
                            <input
                              type='file'
                              className='custom-file-input'
                              id='validatedCustomFile'
                              required
                            />
                            <label
                              className='custom-file-label'
                              htmlFor='validatedCustomFile'>
                              Choose file...
                            </label>
                            <div className='invalid-feedback'>
                              Example invalid custom file feedback
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='form-group row'>
                        <label className='col-md-3' htmlFor='disabledTextInput'>
                          Disabled input
                        </label>
                        <div className='col-md-9'>
                          <input
                            type='text'
                            id='disabledTextInput'
                            className='form-control'
                            placeholder='Disabled input'
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className='border-top'>
                      <div className='card-body'>
                        <button type='button' className='btn btn-primary'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Forms Control</h4>
                      <div className='form-group'>
                        <label htmlFor='hue-demo'>Hue</label>
                        <input
                          type='text'
                          id='hue-demo'
                          className='form-control demo'
                          data-control='hue'
                          defaultValue='#ff6161'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='position-bottom-left'>
                          Bottom left (default)
                        </label>
                        <input
                          type='text'
                          id='position-bottom-left'
                          className='form-control demo'
                          data-position='bottom left'
                          defaultValue='#0088cc'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='position-top-right'>Top right</label>
                        <input
                          type='text'
                          id='position-top-right'
                          className='form-control demo'
                          data-position='top right'
                          defaultValue='#0088cc'
                        />
                      </div>
                      <label>Datepicker</label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control mydatepicker'
                          placeholder='mm/dd/yyyy'
                        />
                        <div className='input-group-append'>
                          <span className='input-group-text h-100'>
                            <i className='mdi mdi-calendar' />
                          </span>
                        </div>
                      </div>
                      <label className='mt-3'>Autoclose Datepicker</label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          id='datepicker-autoclose'
                          placeholder='mm/dd/yyyy'
                        />
                        <div className='input-group-append'>
                          <span className='input-group-text h-100'>
                            <i className='mdi mdi-calendar' />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='border-top'>
                      <div className='card-body'>
                        <button
                          type='submit'
                          className='btn btn-success text-white'>
                          Save
                        </button>
                        <button type='submit' className='btn btn-primary'>
                          Reset
                        </button>
                        <button type='submit' className='btn btn-info'>
                          Edit
                        </button>
                        <button
                          type='submit'
                          className='btn btn-danger text-white'>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title mb-0'>Form Elements</h5>
                      <div className='form-group mt-3'>
                        <label>
                          Date Mask
                          <small className='text-muted'>dd/mm/yyyy</small>
                        </label>
                        <input
                          type='text'
                          className='form-control date-inputmask'
                          id='date-mask'
                          placeholder='Enter Date'
                        />
                      </div>
                      <div className='form-group'>
                        <label>
                          Phone
                          <small className='text-muted'>(999) 999-9999</small>
                        </label>
                        <input
                          type='text'
                          className='form-control phone-inputmask'
                          id='phone-mask'
                          placeholder='Enter Phone Number'
                        />
                      </div>
                      <div className='form-group'>
                        <label>
                          International Number
                          <small className='text-muted'>+19 999 999 999</small>
                        </label>
                        <input
                          type='text'
                          className='form-control international-inputmask'
                          id='international-mask'
                          placeholder='International Phone Number'
                        />
                      </div>
                      <div className='form-group'>
                        <label>
                          Phone / xEx
                          <small className='text-muted'>
                            (999) 999-9999 / x999999
                          </small>
                        </label>
                        <input
                          type='text'
                          className='form-control xphone-inputmask'
                          id='xphone-mask'
                          placeholder='Enter Phone Number'
                        />
                      </div>
                      <div className='form-group'>
                        <label>
                          Purchase Order
                          <small className='text-muted'>aaaa 9999-****</small>
                        </label>
                        <input
                          type='text'
                          className='form-control purchase-inputmask'
                          id='purchase-mask'
                          placeholder='Enter Purchase Order'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Form Elements</h5>
                      <div className='row mb-3 align-items-center'>
                        <div className='col-lg-4 col-md-12 text-end'>
                          <span>Tooltip Input</span>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                          <input
                            type='text'
                            data-toggle='tooltip'
                            title='A Tooltip for the input !'
                            className='form-control'
                            id='validationDefault05'
                            placeholder='Hover For tooltip'
                            required
                          />
                        </div>
                      </div>
                      <div className='row mb-3 align-items-center'>
                        <div className='col-lg-4 col-md-12 text-end'>
                          <span>Type Ahead Input</span>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Type here for auto complete..'
                            required
                          />
                        </div>
                      </div>
                      <div className='row mb-3 align-items-center'>
                        <div className='col-lg-4 col-md-12 text-end'>
                          <span>Prepended Input</span>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                          <div className='input-group'>
                            <div className='input-group-prepend'>
                              <span
                                className='input-group-text'
                                id='basic-addon1'>
                                #
                              </span>
                            </div>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Prepend'
                              aria-label='Username'
                              aria-describedby='basic-addon1'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row mb-3 align-items-center'>
                        <div className='col-lg-4 col-md-12 text-end'>
                          <span>Appended Input</span>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                          <div className='input-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder={5.0}
                              aria-label="Recipient 's username"
                              aria-describedby='basic-addon2'
                            />
                            <div className='input-group-append'>
                              <span
                                className='input-group-text'
                                id='basic-addon2'>
                                $
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row mb-3 align-items-center'>
                        <div className='col-lg-4 col-md-12 text-end'>
                          <span className='text-success'>
                            Input with Sccess
                          </span>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                          <input
                            type='text'
                            className='form-control is-valid'
                            id='validationServer01'
                          />
                          <div className='valid-feedback'>Woohoo!</div>
                        </div>
                      </div>
                      <div className='row mb-3 align-items-center'>
                        <div className='col-lg-4 col-md-12 text-end'>
                          <span className='text-danger'>Input with Error</span>
                        </div>
                        <div className='col-lg-8 col-md-12'>
                          <input
                            type='text'
                            className='form-control is-invalid'
                            id='validationServer01'
                          />
                          <div className='invalid-feedback'>
                            Please correct the error
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='row mb-3'>
                        <div className='col-lg-12'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-12'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-11'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-11'
                          />
                        </div>
                        <div className='col-lg-1 ps-0'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-1'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-10'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-10'
                          />
                        </div>
                        <div className='col-lg-2'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-2'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-9'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-9'
                          />
                        </div>
                        <div className='col-lg-3'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-3'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-8'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-8'
                          />
                        </div>
                        <div className='col-lg-4'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-4'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-7'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-7'
                          />
                        </div>
                        <div className='col-lg-5'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-5'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-6'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-6'
                          />
                        </div>
                        <div className='col-lg-6'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-6'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-5'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-5'
                          />
                        </div>
                        <div className='col-lg-7'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-7'
                          />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-lg-2'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-2'
                          />
                        </div>
                        <div className='col-lg-3'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-3'
                          />
                        </div>
                        <div className='col-lg-4'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-4'
                          />
                        </div>
                        <div className='col-lg-2'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-2'
                          />
                        </div>
                        <div className='col-lg-1 ps-0'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='col-md-1'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* editor */}
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Quill Editor</h4>
                      {/* Create the editor container */}
                      <div id='editor' style={{ height: '300px' }}>
                        <p>Hello World!</p>
                        <p>
                          Some initial <strong>bold</strong> text
                        </p>
                        <p>
                          <br />
                        </p>
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
            <footer className='footer text-center'>
              All Rights Reserved by Matrix-admin. Designed and Developed by
              <a href='https://www.wrappixel.com'>WrapPixel</a>.
            </footer>
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

export default FromBasic;
