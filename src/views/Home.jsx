import React from 'react';

const Home = () => {
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
                  <h4 className='page-title'>Dashboard</h4>
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
              {/* Sales Cards  */}
              {/* ============================================================== */}
              <div className='row'>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-cyan text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-view-dashboard' />
                      </h1>
                      <h6 className='text-white'>Dashboard</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-4 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-success text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-chart-areaspline' />
                      </h1>
                      <h6 className='text-white'>Charts</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-warning text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-collage' />
                      </h1>
                      <h6 className='text-white'>Widgets</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-danger text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-border-outside' />
                      </h1>
                      <h6 className='text-white'>Tables</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-info text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-arrow-all' />
                      </h1>
                      <h6 className='text-white'>Full Width</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                {/* Column */}
                <div className='col-md-6 col-lg-4 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-danger text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-receipt' />
                      </h1>
                      <h6 className='text-white'>Forms</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-info text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-relative-scale' />
                      </h1>
                      <h6 className='text-white'>Buttons</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-cyan text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-pencil' />
                      </h1>
                      <h6 className='text-white'>Elements</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-success text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-calendar-check' />
                      </h1>
                      <h6 className='text-white'>Calnedar</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className='col-md-6 col-lg-2 col-xlg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-warning text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-alert' />
                      </h1>
                      <h6 className='text-white'>Errors</h6>
                    </div>
                  </div>
                </div>
                {/* Column */}
              </div>
              {/* ============================================================== */}
              {/* Sales chart */}
              {/* ============================================================== */}
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-md-flex align-items-center'>
                        <div>
                          <h4 className='card-title'>Site Analysis</h4>
                          <h5 className='card-subtitle'>
                            Overview of Latest Month
                          </h5>
                        </div>
                      </div>
                      <div className='row'>
                        {/* column */}
                        <div className='col-lg-9'>
                          <div className='flot-chart'>
                            <div
                              className='flot-chart-content'
                              id='flot-line-chart'
                            />
                          </div>
                        </div>
                        <div className='col-lg-3'>
                          <div className='row'>
                            <div className='col-6'>
                              <div className='bg-dark p-10 text-white text-center'>
                                <i className='mdi mdi-account fs-3 mb-1 font-16' />
                                <h5 className='mb-0 mt-1'>2540</h5>
                                <small className='font-light'>
                                  Total Users
                                </small>
                              </div>
                            </div>
                            <div className='col-6'>
                              <div className='bg-dark p-10 text-white text-center'>
                                <i className='mdi mdi-plus fs-3 font-16' />
                                <h5 className='mb-0 mt-1'>120</h5>
                                <small className='font-light'>New Users</small>
                              </div>
                            </div>
                            <div className='col-6 mt-3'>
                              <div className='bg-dark p-10 text-white text-center'>
                                <i className='mdi mdi-cart fs-3 mb-1 font-16' />
                                <h5 className='mb-0 mt-1'>656</h5>
                                <small className='font-light'>Total Shop</small>
                              </div>
                            </div>
                            <div className='col-6 mt-3'>
                              <div className='bg-dark p-10 text-white text-center'>
                                <i className='mdi mdi-tag fs-3 mb-1 font-16' />
                                <h5 className='mb-0 mt-1'>9540</h5>
                                <small className='font-light'>
                                  Total Orders
                                </small>
                              </div>
                            </div>
                            <div className='col-6 mt-3'>
                              <div className='bg-dark p-10 text-white text-center'>
                                <i className='mdi mdi-table fs-3 mb-1 font-16' />
                                <h5 className='mb-0 mt-1'>100</h5>
                                <small className='font-light'>
                                  Pending Orders
                                </small>
                              </div>
                            </div>
                            <div className='col-6 mt-3'>
                              <div className='bg-dark p-10 text-white text-center'>
                                <i className='mdi mdi-web fs-3 mb-1 font-16' />
                                <h5 className='mb-0 mt-1'>8540</h5>
                                <small className='font-light'>
                                  Online Orders
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* column */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* Sales chart */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Recent comment and chats */}
              {/* ============================================================== */}
              <div className='row'>
                {/* column */}
                <div className='col-lg-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Latest Posts</h4>
                    </div>
                    <div className='comment-widgets scrollable'>
                      {/* Comment Row */}
                      <div className='d-flex flex-row comment-row mt-0'>
                        <div className='p-2'>
                          <img
                            src='../assets/images/users/1.jpg'
                            alt='user'
                            width={50}
                            className='rounded-circle'
                          />
                        </div>
                        <div className='comment-text w-100'>
                          <h6 className='font-medium'>James Anderson</h6>
                          <span className='mb-3 d-block'>
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.
                          </span>
                          <div className='comment-footer'>
                            <span className='text-muted float-end'>
                              April 14, 2021
                            </span>
                            <button
                              type='button'
                              className='btn btn-cyan btn-sm text-white'>
                              Edit
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm text-white'>
                              Publish
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm text-white'>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Comment Row */}
                      <div className='d-flex flex-row comment-row'>
                        <div className='p-2'>
                          <img
                            src='../assets/images/users/4.jpg'
                            alt='user'
                            width={50}
                            className='rounded-circle'
                          />
                        </div>
                        <div className='comment-text active w-100'>
                          <h6 className='font-medium'>Michael Jorden</h6>
                          <span className='mb-3 d-block'>
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.
                          </span>
                          <div className='comment-footer'>
                            <span className='text-muted float-end'>
                              May 10, 2021
                            </span>
                            <button
                              type='button'
                              className='btn btn-cyan btn-sm text-white'>
                              Edit
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm text-white'>
                              Publish
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm text-white'>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Comment Row */}
                      <div className='d-flex flex-row comment-row'>
                        <div className='p-2'>
                          <img
                            src='../assets/images/users/5.jpg'
                            alt='user'
                            width={50}
                            className='rounded-circle'
                          />
                        </div>
                        <div className='comment-text w-100'>
                          <h6 className='font-medium'>Johnathan Doeting</h6>
                          <span className='mb-3 d-block'>
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.
                          </span>
                          <div className='comment-footer'>
                            <span className='text-muted float-end'>
                              August 1, 2021
                            </span>
                            <button
                              type='button'
                              className='btn btn-cyan btn-sm text-white'>
                              Edit
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm text-white'>
                              Publish
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm text-white'>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>To Do List</h4>
                      <div
                        className='todo-widget scrollable'
                        style={{ height: '450px' }}>
                        <ul
                          className='list-task todo-list list-group mb-0'
                          data-role='tasklist'>
                          <li
                            className='list-group-item todo-item'
                            data-role='task'>
                            <div className='form-check'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheck'
                              />
                              <label
                                className='form-check-label w-100 mb-0 todo-label'
                                htmlFor='customCheck'>
                                <span className='todo-desc fw-normal'>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </span>
                                <span className='badge rounded-pill bg-danger float-end'>
                                  Today
                                </span>
                              </label>
                            </div>
                            <ul className='list-style-none assignedto'>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/1.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Steave'
                                />
                              </li>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/2.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Jessica'
                                />
                              </li>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/3.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Priyanka'
                                />
                              </li>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/4.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Selina'
                                />
                              </li>
                            </ul>
                          </li>
                          <li
                            className='list-group-item todo-item'
                            data-role='task'>
                            <div className='form-check'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheck1'
                              />
                              <label
                                className='form-check-label w-100 mb-0 todo-label'
                                htmlFor='customCheck1'>
                                <span className='todo-desc fw-normal'>
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </span>
                                <span className='badge rounded-pill bg-primary float-end'>
                                  1 week
                                </span>
                              </label>
                            </div>
                            <div className='item-date'>26 jun 2021</div>
                          </li>
                          <li
                            className='list-group-item todo-item'
                            data-role='task'>
                            <div className='form-check'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheck2'
                              />
                              <label
                                className='form-check-label w-100 mb-0 todo-label'
                                htmlFor='customCheck2'>
                                <span className='todo-desc fw-normal'>
                                  Give Purchase report to
                                </span>
                                <span className='badge rounded-pill bg-info float-end'>
                                  Yesterday
                                </span>
                              </label>
                            </div>
                            <ul className='list-style-none assignedto'>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/3.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Priyanka'
                                />
                              </li>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/4.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Selina'
                                />
                              </li>
                            </ul>
                          </li>
                          <li
                            className='list-group-item todo-item'
                            data-role='task'>
                            <div className='form-check'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheck3'
                              />
                              <label
                                className='form-check-label w-100 mb-0 todo-label'
                                htmlFor='customCheck3'>
                                <span className='todo-desc fw-normal'>
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </span>
                                <span className='badge rounded-pill bg-warning float-end'>
                                  2 weeks
                                </span>
                              </label>
                            </div>
                            <div className='item-date'>26 jun 2021</div>
                          </li>
                          <li
                            className='list-group-item todo-item'
                            data-role='task'>
                            <div className='form-check'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheck4'
                              />
                              <label
                                className='form-check-label w-100 mb-0 todo-label'
                                htmlFor='customCheck4'>
                                <span className='todo-desc fw-normal'>
                                  Give Purchase report to
                                </span>
                                <span className='badge rounded-pill bg-info float-end'>
                                  Yesterday
                                </span>
                              </label>
                            </div>
                            <ul className='list-style-none assignedto'>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/3.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Priyanka'
                                />
                              </li>
                              <li className='assignee'>
                                <img
                                  className='rounded-circle'
                                  width={40}
                                  src='../assets/images/users/4.jpg'
                                  alt='user'
                                  data-toggle='tooltip'
                                  data-placement='top'
                                  title
                                  data-original-title='Selina'
                                />
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title mb-0'>Progress Box</h4>
                      <div className='mt-3'>
                        <div className='d-flex no-block align-items-center'>
                          <span>81% Clicks</span>
                          <div className='ms-auto'>
                            <span>125</span>
                          </div>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar progress-bar-striped'
                            role='progressbar'
                            style={{ width: '81%' }}
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='d-flex no-block align-items-center mt-4'>
                          <span>72% Uniquie Clicks</span>
                          <div className='ms-auto'>
                            <span>120</span>
                          </div>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar progress-bar-striped bg-success'
                            role='progressbar'
                            style={{ width: '72%' }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='d-flex no-block align-items-center mt-4'>
                          <span>53% Impressions</span>
                          <div className='ms-auto'>
                            <span>785</span>
                          </div>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar progress-bar-striped bg-info'
                            role='progressbar'
                            style={{ width: '53%' }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='d-flex no-block align-items-center mt-4'>
                          <span>3% Online Users</span>
                          <div className='ms-auto'>
                            <span>8</span>
                          </div>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar progress-bar-striped bg-danger'
                            role='progressbar'
                            style={{ width: '3%' }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card new */}
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title mb-0'>News Updates</h4>
                    </div>
                    <ul className='list-style-none'>
                      <li className='d-flex no-block card-body'>
                        <i className='mdi mdi-check-circle fs-4 w-30px mt-1' />
                        <div>
                          <a href='#' className='mb-0 font-medium p-0'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </a>
                          <span className='text-muted'>
                            dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                        <div className='ms-auto'>
                          <div className='tetx-right'>
                            <h5 className='text-muted mb-0'>20</h5>
                            <span className='text-muted font-16'>Jan</span>
                          </div>
                        </div>
                      </li>
                      <li className='d-flex no-block card-body border-top'>
                        <i className='mdi mdi-gift fs-4 w-30px mt-1' />
                        <div>
                          <a href='#' className='mb-0 font-medium p-0'>
                            Congratulation Maruti, Happy Birthday
                          </a>
                          <span className='text-muted'>
                            many many happy returns of the day
                          </span>
                        </div>
                        <div className='ms-auto'>
                          <div className='tetx-right'>
                            <h5 className='text-muted mb-0'>11</h5>
                            <span className='text-muted font-16'>Jan</span>
                          </div>
                        </div>
                      </li>
                      <li className='d-flex no-block card-body border-top'>
                        <i className='mdi mdi-plus fs-4 w-30px mt-1' />
                        <div>
                          <a href='#' className='mb-0 font-medium p-0'>
                            Maruti is a Responsive Admin theme
                          </a>
                          <span className='text-muted'>
                            But already everything was solved. It will ...
                          </span>
                        </div>
                        <div className='ms-auto'>
                          <div className='tetx-right'>
                            <h5 className='text-muted mb-0'>19</h5>
                            <span className='text-muted font-16'>Jan</span>
                          </div>
                        </div>
                      </li>
                      <li className='d-flex no-block card-body border-top'>
                        <i className='mdi mdi-leaf fs-4 w-30px mt-1' />
                        <div>
                          <a href='#' className='mb-0 font-medium p-0'>
                            Envato approved Maruti Admin template
                          </a>
                          <span className='text-muted'>
                            i am very happy to approved by TF
                          </span>
                        </div>
                        <div className='ms-auto'>
                          <div className='tetx-right'>
                            <h5 className='text-muted mb-0'>20</h5>
                            <span className='text-muted font-16'>Jan</span>
                          </div>
                        </div>
                      </li>
                      <li className='d-flex no-block card-body border-top'>
                        <i className='mdi mdi-comment-question-outline fs-4 w-30px mt-1' />
                        <div>
                          <a href='#' className='mb-0 font-medium p-0'>
                            I am alwayse here if you have any question
                          </a>
                          <span className='text-muted'>
                            we glad that you choose our template
                          </span>
                        </div>
                        <div className='ms-auto'>
                          <div className='tetx-right'>
                            <h5 className='text-muted mb-0'>15</h5>
                            <span className='text-muted font-16'>Jan</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* column */}
                <div className='col-lg-6'>
                  {/* Card */}
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Chat Option</h4>
                      <div
                        className='chat-box scrollable'
                        style={{ height: '475px' }}>
                        {/*chat Row */}
                        <ul className='chat-list'>
                          {/*chat Row */}
                          <li className='chat-item'>
                            <div className='chat-img'>
                              <img
                                src='../assets/images/users/1.jpg'
                                alt='user'
                              />
                            </div>
                            <div className='chat-content'>
                              <h6 className='font-medium'>James Anderson</h6>
                              <div className='box bg-light-info'>
                                Lorem Ipsum is simply dummy text of the printing
                                &amp; type setting industry.
                              </div>
                            </div>
                            <div className='chat-time'>10:56 am</div>
                          </li>
                          {/*chat Row */}
                          <li className='chat-item'>
                            <div className='chat-img'>
                              <img
                                src='../assets/images/users/2.jpg'
                                alt='user'
                              />
                            </div>
                            <div className='chat-content'>
                              <h6 className='font-medium'>Bianca Doe</h6>
                              <div className='box bg-light-info'>
                                It’s Great opportunity to work.
                              </div>
                            </div>
                            <div className='chat-time'>10:57 am</div>
                          </li>
                          {/*chat Row */}
                          <li className='odd chat-item'>
                            <div className='chat-content'>
                              <div className='box bg-light-inverse'>
                                I would love to join the team.
                              </div>
                              <br />
                            </div>
                          </li>
                          {/*chat Row */}
                          <li className='odd chat-item'>
                            <div className='chat-content'>
                              <div className='box bg-light-inverse'>
                                Whats budget of the new project.
                              </div>
                              <br />
                            </div>
                            <div className='chat-time'>10:59 am</div>
                          </li>
                          {/*chat Row */}
                          <li className='chat-item'>
                            <div className='chat-img'>
                              <img
                                src='../assets/images/users/3.jpg'
                                alt='user'
                              />
                            </div>
                            <div className='chat-content'>
                              <h6 className='font-medium'>Angelina Rhodes</h6>
                              <div className='box bg-light-info'>
                                Well we have good budget for the project
                              </div>
                            </div>
                            <div className='chat-time'>11:00 am</div>
                          </li>
                          {/*chat Row */}
                        </ul>
                      </div>
                    </div>
                    <div className='card-body border-top'>
                      <div className='row'>
                        <div className='col-9'>
                          <div className='input-field mt-0 mb-0'>
                            <textarea
                              id='textarea1'
                              placeholder='Type and enter'
                              className='form-control border-0'
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className='col-3'>
                          <a
                            className='btn-circle btn-lg btn-cyan float-end text-white'
                            href='javascript:void(0)'>
                            <i className='mdi mdi-send fs-3' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className='card'>
                    <div className='card-body'>
                      <h4 className='card-title'>
                        Our partner (Box with Fix height)
                      </h4>
                    </div>
                    <div
                      className='comment-widgets scrollable'
                      style={{ maxHeight: '130px' }}>
                      {/* Comment Row */}
                      <div className='d-flex flex-row comment-row mt-0'>
                        <div className='p-2'>
                          <img
                            src='../assets/images/users/1.jpg'
                            alt='user'
                            width={50}
                            className='rounded-circle'
                          />
                        </div>
                        <div className='comment-text w-100'>
                          <h6 className='font-medium'>James Anderson</h6>
                          <span className='mb-3 d-block'>
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.
                          </span>
                          <div className='comment-footer'>
                            <span className='text-muted float-end'>
                              April 14, 2021
                            </span>
                            <button
                              type='button'
                              className='btn btn-cyan btn-sm text-white'>
                              Edit
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm text-white'>
                              Publish
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm text-white'>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Comment Row */}
                      <div className='d-flex flex-row comment-row'>
                        <div className='p-2'>
                          <img
                            src='../assets/images/users/4.jpg'
                            alt='user'
                            width={50}
                            className='rounded-circle'
                          />
                        </div>
                        <div className='comment-text active w-100'>
                          <h6 className='font-medium'>Michael Jorden</h6>
                          <span className='mb-3 d-block'>
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.
                          </span>
                          <div className='comment-footer'>
                            <span className='text-muted float-end'>
                              May 10, 2021
                            </span>
                            <button
                              type='button'
                              className='btn btn-cyan btn-sm text-white'>
                              Edit
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm text-white'>
                              Publish
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm text-white'>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Comment Row */}
                      <div className='d-flex flex-row comment-row'>
                        <div className='p-2'>
                          <img
                            src='../assets/images/users/5.jpg'
                            alt='user'
                            width={50}
                            className='rounded-circle'
                          />
                        </div>
                        <div className='comment-text w-100'>
                          <h6 className='font-medium'>Johnathan Doeting</h6>
                          <span className='mb-3 d-block'>
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry.
                          </span>
                          <div className='comment-footer'>
                            <span className='text-muted float-end'>
                              August 1, 2021
                            </span>
                            <button
                              type='button'
                              className='btn btn-cyan btn-sm text-white'>
                              Edit
                            </button>
                            <button
                              type='button'
                              className='btn btn-success btn-sm text-white'>
                              Publish
                            </button>
                            <button
                              type='button'
                              className='btn btn-danger btn-sm text-white'>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* accoridan part */}
                  <div className='accordion' id='accordionExample'>
                    <div className='card mb-0'>
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            className='d-flex align-items-center'
                            data-toggle='collapse'
                            data-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'>
                            <i
                              className='me-1 mdi mdi-magnet fs-4'
                              aria-hidden='true'
                            />
                            <span>Accordion Example 1</span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id='collapseOne'
                        className='collapse show'
                        aria-labelledby='headingOne'
                        data-parent='#accordionExample'>
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card mb-0 border-top'>
                      <div className='card-header' id='headingTwo'>
                        <h5 className='mb-0'>
                          <a
                            className='collapsed d-flex align-items-center'
                            data-toggle='collapse'
                            data-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'>
                            <i
                              className='me-1 mdi mdi-magnet fs-4'
                              aria-hidden='true'
                            />
                            <span>Accordion Example 2</span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id='collapseTwo'
                        className='collapse'
                        aria-labelledby='headingTwo'
                        data-parent='#accordionExample'>
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className='card mb-0 border-top'>
                      <div className='card-header' id='headingThree'>
                        <h5 className='mb-0'>
                          <a
                            className='collapsed d-flex align-items-center'
                            data-toggle='collapse'
                            data-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'>
                            <i
                              className='me-1 mdi mdi-magnet fs-4'
                              aria-hidden='true'
                            />
                            <span>Accordion Example 3</span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id='collapseThree'
                        className='collapse'
                        aria-labelledby='headingThree'
                        data-parent='#accordionExample'>
                        <div className='card-body'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* toggle part */}
                  <div id='accordian-4'>
                    <div className='card mt-4'>
                      <a
                        className='card-header link'
                        data-toggle='collapse'
                        data-parent='#accordian-4'
                        href='#Toggle-1'
                        aria-expanded='true'
                        aria-controls='Toggle-1'>
                        <i
                          className='seticon mdi mdi-arrow-right-bold'
                          aria-hidden='true'
                        />
                        <span>Toggle, Open by default</span>
                      </a>
                      <div
                        id='Toggle-1'
                        className='collapse show multi-collapse'>
                        <div className='card-body widget-content'>
                          This box is opened by default, paragraphs and is full
                          of waffle to pad out the comment. Usually, you just
                          wish these sorts of comments would come to an end.
                        </div>
                      </div>
                      <a
                        className='card-header link border-top'
                        data-toggle='collapse'
                        data-parent='#accordian-4'
                        href='#Toggle-2'
                        aria-expanded='false'
                        aria-controls='Toggle-2'>
                        <i
                          className='seticon mdi mdi-close'
                          aria-hidden='true'
                        />
                        <span>Toggle, Closed by default</span>
                      </a>
                      <div
                        id='Toggle-2'
                        className='multi-collapse collapse'
                        style={{}}>
                        <div className='card-body widget-content'>
                          This box is now open
                        </div>
                      </div>
                      <a
                        className='card-header collapsed link border-top'
                        data-toggle='collapse'
                        data-parent='#accordian-4'
                        href='#Toggle-3'
                        aria-expanded='false'
                        aria-controls='Toggle-3'>
                        <i
                          className='seticon mdi mdi-close'
                          aria-hidden='true'
                        />
                        <span>Toggle, Closed by default</span>
                      </a>
                      <div id='Toggle-3' className='collapse multi-collapse'>
                        <div className='card-body widget-content'>
                          This box is now open
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className='card'>
                    {/* Nav tabs */}
                    <ul className='nav nav-tabs' role='tablist'>
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          data-bs-toggle='tab'
                          href='#home'
                          role='tab'>
                          <span className='hidden-sm-up' />
                          <span className='hidden-xs-down'>Tab1</span>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          data-bs-toggle='tab'
                          href='#profile'
                          role='tab'>
                          <span className='hidden-sm-up' />
                          <span className='hidden-xs-down'>Tab2</span>
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          data-bs-toggle='tab'
                          href='#messages'
                          role='tab'>
                          <span className='hidden-sm-up' />
                          <span className='hidden-xs-down'>Tab3</span>
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className='tab-content tabcontent-border'>
                      <div
                        className='tab-pane active'
                        id='home'
                        role='tabpanel'>
                        <div className='p-20'>
                          <p>
                            And is full of waffle to It has multiple paragraphs
                            and is full of waffle to pad out the comment.
                            Usually, you just wish these sorts of comments would
                            come to an end.multiple paragraphs and is full of
                            waffle to pad out the comment..
                          </p>
                          <img
                            src='../assets/images/background/img4.jpg'
                            className='img-fluid'
                          />
                        </div>
                      </div>
                      <div
                        className='tab-pane p-20'
                        id='profile'
                        role='tabpanel'>
                        <div className='p-20'>
                          <img
                            src='../assets/images/background/img4.jpg'
                            className='img-fluid'
                          />
                          <p className='mt-2'>
                            And is full of waffle to It has multiple paragraphs
                            and is full of waffle to pad out the comment.
                            Usually, you just wish these sorts of comments would
                            come to an end.multiple paragraphs and is full of
                            waffle to pad out the comment..
                          </p>
                        </div>
                      </div>
                      <div
                        className='tab-pane p-20'
                        id='messages'
                        role='tabpanel'>
                        <div className='p-20'>
                          <p>
                            And is full of waffle to It has multiple paragraphs
                            and is full of waffle to pad out the comment.
                            Usually, you just wish these sorts of comments would
                            come to an end.multiple paragraphs and is full of
                            waffle to pad out the comment..
                          </p>
                          <img
                            src='../assets/images/background/img4.jpg'
                            className='img-fluid'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* Recent comment and chats */}
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

export default Home;
