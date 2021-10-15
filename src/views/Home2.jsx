import React from 'react';

const Home2 = () => {
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
                  <h4 className='page-title'>Dashboard-2</h4>
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
                {/* Column */}
                <div className='col-md-6 col-lg-3'>
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
                <div className='col-md-6 col-lg-3'>
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
                <div className='col-md-6 col-lg-3'>
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
                <div className='col-md-6 col-lg-3'>
                  <div className='card card-hover'>
                    <div className='box bg-danger text-center'>
                      <h1 className='font-light text-white'>
                        <i className='mdi mdi-border-outside' />
                      </h1>
                      <h6 className='text-white'>Tables</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
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
                                className='form-check-label mb-0 w-100 todo-label'
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
                                className='form-check-label mb-0 w-100 todo-label'
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
                                className='form-check-label mb-0 w-100 todo-label'
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
                                className='form-check-label mb-0 w-100 todo-label'
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
                                className='form-check-label mb-0 w-100 todo-label'
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
                </div>
                <div className='col-md-6'>
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
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h5 className='card-title'>Calender</h5>
                  <div className='card'>
                    <div className>
                      <div className='row'>
                        <div className='col-lg-3 border-right pe-0'>
                          <div className='card-body border-bottom'>
                            <h4 className='card-title mt-2'>
                              Drag &amp; Drop Event
                            </h4>
                          </div>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col-md-12'>
                                <div id='calendar-events' className>
                                  <div
                                    className='calendar-events mb-3'
                                    data-class='bg-info'>
                                    <i className='fa fa-circle text-info me-2' />
                                    Event One
                                  </div>
                                  <div
                                    className='calendar-events mb-3'
                                    data-class='bg-success'>
                                    <i className='fa fa-circle text-success me-2' />
                                    Event Two
                                  </div>
                                  <div
                                    className='calendar-events mb-3'
                                    data-class='bg-danger'>
                                    <i className='fa fa-circle text-danger me-2' />
                                    Event Three
                                  </div>
                                  <div
                                    className='calendar-events mb-3'
                                    data-class='bg-warning'>
                                    <i className='fa fa-circle text-warning me-2' />
                                    Event Four
                                  </div>
                                </div>
                                {/* checkbox */}
                                <div className='form-check'>
                                  <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='drop-remove'
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='drop-remove'>
                                    Remove after drop
                                  </label>
                                </div>
                                <a
                                  href='javascript:void(0)'
                                  data-toggle='modal'
                                  data-target='#add-new-event'
                                  className='
                          d-flex
                          align-items-center
                          justify-content-center
                          btn
                          mt-3
                          btn-info
                          d-block
                          waves-effect waves-light
                        '>
                                  <i className='mdi mdi-plus fs-4 me-1' /> Add
                                  New Event
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-9'>
                          <div className='card-body b-l calender-sidebar'>
                            <div id='calendar' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* BEGIN MODAL */}
              <div className='modal none-border' id='my-event'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h4 className='modal-title'>
                        <strong>Add Event</strong>
                      </h4>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-hidden='true'>
                        ×
                      </button>
                    </div>
                    <div className='modal-body' />
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary waves-effect'
                        data-dismiss='modal'>
                        Close
                      </button>
                      <button
                        type='button'
                        className='btn btn-success save-event waves-effect waves-light'>
                        Create event
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger delete-event waves-effect waves-light'
                        data-dismiss='modal'>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Add Category */}
              <div className='modal fade none-border' id='add-new-event'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h4 className='modal-title'>
                        <strong>Add</strong> a category
                      </h4>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-hidden='true'>
                        ×
                      </button>
                    </div>
                    <div className='modal-body'>
                      <form>
                        <div className='row'>
                          <div className='col-md-6'>
                            <label className='control-label'>
                              Category Name
                            </label>
                            <input
                              className='form-control form-white'
                              placeholder='Enter name'
                              type='text'
                              name='category-name'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label className='control-label'>
                              Choose Category Color
                            </label>
                            <select
                              className='form-select shadow-none form-white'
                              data-placeholder='Choose a color...'
                              name='category-color'>
                              <option value='success'>Success</option>
                              <option value='danger'>Danger</option>
                              <option value='info'>Info</option>
                              <option value='primary'>Primary</option>
                              <option value='warning'>Warning</option>
                              <option value='inverse'>Inverse</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='
                btn btn-danger
                waves-effect waves-light
                save-category
              '
                        data-dismiss='modal'>
                        Save
                      </button>
                      <button
                        type='button'
                        className='btn btn-secondary waves-effect'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* END MODAL */}
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

export default Home2;
