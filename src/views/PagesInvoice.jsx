import React from 'react';

const PagesInvoice = () => {
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
                  <h4 className='page-title'>Invoice</h4>
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
                <div className='col-md-12'>
                  <div className='card card-body printableArea'>
                    <h3>
                      <b>INVOICE</b>{' '}
                      <span className='pull-right'>#5669626</span>
                    </h3>
                    <hr />
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='pull-left'>
                          <address>
                            <h3>
                              &nbsp;
                              <b className='text-danger'>Material Pro Admin</b>
                            </h3>
                            <p className='text-muted ms-1'>
                              E 104, Dharti-2, <br />
                              Nr' Viswakarma Temple, <br />
                              Talaja Road, <br />
                              Bhavnagar - 364002
                            </p>
                          </address>
                        </div>
                        <div className='pull-right text-end'>
                          <address>
                            <h3>To,</h3>
                            <h4 className='font-bold'>Gaala &amp; Sons,</h4>
                            <p className='text-muted ms-4'>
                              E 104, Dharti-2, <br />
                              Nr' Viswakarma Temple, <br />
                              Talaja Road, <br />
                              Bhavnagar - 364002
                            </p>
                            <p className='mt-4'>
                              <b>Invoice Date :</b>
                              <i className='mdi mdi-calendar' /> 23rd Jan 2018
                            </p>
                            <p>
                              <b>Due Date :</b>
                              <i className='mdi mdi-calendar' /> 25th Jan 2018
                            </p>
                          </address>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div
                          className='table-responsive mt-5'
                          style={{ clear: 'both' }}>
                          <table className='table table-hover'>
                            <thead>
                              <tr>
                                <th className='text-center'>#</th>
                                <th>Description</th>
                                <th className='text-end'>Quantity</th>
                                <th className='text-end'>Unit Cost</th>
                                <th className='text-end'>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className='text-center'>1</td>
                                <td>Milk Powder</td>
                                <td className='text-end'>2</td>
                                <td className='text-end'>$24</td>
                                <td className='text-end'>$48</td>
                              </tr>
                              <tr>
                                <td className='text-center'>2</td>
                                <td>Air Conditioner</td>
                                <td className='text-end'>3</td>
                                <td className='text-end'>$500</td>
                                <td className='text-end'>$1500</td>
                              </tr>
                              <tr>
                                <td className='text-center'>3</td>
                                <td>RC Cars</td>
                                <td className='text-end'>20</td>
                                <td className='text-end'>%600</td>
                                <td className='text-end'>$12000</td>
                              </tr>
                              <tr>
                                <td className='text-center'>4</td>
                                <td>Down Coat</td>
                                <td className='text-end'>60</td>
                                <td className='text-end'>$5</td>
                                <td className='text-end'>$300</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='pull-right mt-4 text-end'>
                          <p>Sub - Total amount: $13,848</p>
                          <p>vat (10%) : $138</p>
                          <hr />
                          <h3>
                            <b>Total :</b> $13,986
                          </h3>
                        </div>
                        <div className='clearfix' />
                        <hr />
                        <div className='text-end'>
                          <button
                            className='btn btn-danger text-white'
                            type='submit'>
                            Proceed to payment
                          </button>
                        </div>
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

export default PagesInvoice;