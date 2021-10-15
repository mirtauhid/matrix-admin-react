import React from 'react';

const PagesElements = () => {
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
                  <h4 className='page-title'>Elements</h4>
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
                      <h5 className='card-title mb-0'>Badges</h5>
                    </div>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Badges</th>
                          <th scope='col'>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className='badge bg-primary'>Primary</span>
                          </td>
                          <td>
                            <code>.badge .bg-primary</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-secondary'>
                              Secondary
                            </span>
                          </td>
                          <td>
                            <code>.badge .bg-secondary</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-success'>Success</span>
                          </td>
                          <td>
                            <code>.badge .bg-success</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-danger'>Danger</span>
                          </td>
                          <td>
                            <code>.badge .bg-danger</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-warning'>Warning</span>
                          </td>
                          <td>
                            <code>.badge .bg-warning</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-info'>Info</span>
                          </td>
                          <td>
                            <code>.badge .bg-info</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-light text-dark'>
                              Light
                            </span>
                          </td>
                          <td>
                            <code>.badge .bg-light</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge bg-dark'>Dark</span>
                          </td>
                          <td>
                            <code>.badge .bg-dark</code>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className='card-body'>
                      <h5 className='card-title mb-0'>Pills</h5>
                    </div>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Pills</th>
                          <th scope='col'>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-primary'>
                              Primary
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-primary</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-secondary'>
                              Secondary
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-secondary</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-success'>
                              Success
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-success</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-danger'>
                              Danger
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-danger</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-warning'>
                              Warning
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-warning</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-info'>
                              Info
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-info</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-light text-dark'>
                              Light
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-light</code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className='badge rounded-pill bg-dark'>
                              Dark
                            </span>
                          </td>
                          <td>
                            <code>badge rounded-pill bg-dark</code>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Notification</h5>
                      <div className='row'>
                        <div className='col-md-3 col-sm-12 d-grid'>
                          <button
                            type='button'
                            className='btn btn-lg btn-outline-success'
                            id='ts-success'>
                            Success
                          </button>
                        </div>
                        <div className='col-md-3 col-sm-12 d-grid'>
                          <button
                            type='button'
                            className='btn btn-lg btn-outline-info'
                            id='ts-info'>
                            Info
                          </button>
                        </div>
                        <div className='col-md-3 col-sm-12 d-grid'>
                          <button
                            type='button'
                            className='btn btn-lg btn-outline-warning'
                            id='ts-warning'>
                            Warning
                          </button>
                        </div>
                        <div className='col-md-3 col-sm-12 d-grid'>
                          <button
                            type='button'
                            className='btn btn-lg btn-outline-danger'
                            id='ts-error'>
                            Error
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* Sales Cards  */}
              {/* ============================================================== */}
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Icon Box</h5>
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
                        <div className='col-md-6 col-lg-2 col-xlg-3'>
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
                        <div className='col-md-6 col-lg-2 col-xlg-3'>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Progressbar</h5>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{ width: '25%' }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar bg-success'
                          role='progressbar'
                          style={{ width: '25%' }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar bg-info'
                          role='progressbar'
                          style={{ width: '50%' }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar bg-warning'
                          role='progressbar'
                          style={{ width: '75%' }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar bg-danger'
                          role='progressbar'
                          style={{ width: '100%' }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='mt-3'>
                        <code>
                          &lt;div class="progress mt-3"&gt;
                          <br />
                          &lt;div class="progress-bar" role="progressbar"
                          style="width: 25%" aria-valuenow="25"
                          aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                          <br />
                          &lt;/div&gt;
                        </code>
                      </div>
                    </div>
                    <div className='card-body border-top'>
                      <h5 className='card-title'>Striped Progressbar</h5>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar progress-bar-striped'
                          role='progressbar'
                          style={{ width: '10%' }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar progress-bar-striped bg-success'
                          role='progressbar'
                          style={{ width: '25%' }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar progress-bar-striped bg-info'
                          role='progressbar'
                          style={{ width: '50%' }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar progress-bar-striped bg-warning'
                          role='progressbar'
                          style={{ width: '75%' }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar progress-bar-striped bg-danger'
                          role='progressbar'
                          style={{ width: '100%' }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='mt-3'>
                        <code>
                          &lt;div class="progress mt-3"&gt;
                          <br />
                          &lt;div class="progress-bar progress-bar-striped
                          bg-success" role="progressbar" style="width: 25%"
                          aria-valuenow="25" aria-valuemin="0"
                          aria-valuemax="100"&gt;&lt;/div&gt;
                          <br />
                          &lt;/div&gt;
                        </code>
                      </div>
                    </div>
                    <div className='card-body border-top'>
                      <h5 className='card-title'>Multiple Bars</h5>
                      <div className='progress mt-3'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{ width: '15%' }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className='progress-bar bg-success'
                          role='progressbar'
                          style={{ width: '30%' }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className='progress-bar bg-info'
                          role='progressbar'
                          style={{ width: '20%' }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className='mt-3'>
                        <code>
                          &lt;div class="progress mt-3"&gt;
                          <br />
                          &lt;div class="progress-bar" role="progressbar"
                          style="width: 15%" aria-valuenow="15"
                          aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
                          <br />
                          &lt;div class="progress-bar bg-success"
                          role="progressbar" style="width: 30%"
                          aria-valuenow="30" aria-valuemin="0"
                          aria-valuemax="100"&gt;&lt;/div&gt;
                          <br />
                          &lt;div class="progress-bar bg-info"
                          role="progressbar" style="width: 20%"
                          aria-valuenow="20" aria-valuemin="0"
                          aria-valuemax="100"&gt;&lt;/div&gt;
                          <br />
                          &lt;/div&gt;
                        </code>
                      </div>
                    </div>
                    <div className='card-body border-top'>
                      <h5 className='card-title'>Animated Progress</h5>
                      <div className='progress mt-3'>
                        <div
                          className='
                  progress-bar progress-bar-striped progress-bar-animated
                '
                          style={{ width: '40%' }}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-warning
                '
                          style={{ width: '50%' }}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-success
                '
                          style={{ width: '60%' }}
                        />
                      </div>
                      <div className='progress mt-3'>
                        <div
                          className='
                  progress-bar progress-bar-striped progress-bar-animated
                  bg-cyan
                '
                          style={{ width: '70%' }}
                        />
                      </div>
                      <div className='mt-3'>
                        <code>
                          &lt;div class="progress mt-3"&gt;
                          <br />
                          &lt;div class="progress-bar progress-bar-striped
                          progress-bar-animated bg-cyan"
                          style="width:70%"&gt;&lt;/div&gt;
                          <br />
                          &lt;/div&gt;
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Different Models</h5>
                      {/* Button trigger modal */}
                      <button
                        type='button'
                        className='btn btn-success margin-5 text-white'
                        data-toggle='modal'
                        data-target='#Modal1'>
                        View Popup
                      </button>
                      {/* Button trigger modal */}
                      <button
                        type='button'
                        className='btn btn-warning margin-5 text-white'
                        data-toggle='modal'
                        data-target='#Modal2'>
                        Alert
                      </button>
                      {/* Button trigger modal */}
                      <button
                        type='button'
                        className='btn btn-info margin-5'
                        data-toggle='modal'
                        data-target='#Modal3'>
                        Image Popup
                      </button>
                      {/* Modal */}
                      <div
                        className='modal fade'
                        id='Modal1'
                        tabIndex={-1}
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true '>
                        <div className='modal-dialog' role='document '>
                          <div className='modal-content'>
                            <div className='modal-header'>
                              <h5
                                className='modal-title'
                                id='exampleModalLabel'>
                                Popup Header
                              </h5>
                              <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true '>×</span>
                              </button>
                            </div>
                            <div className='modal-body'>
                              Here is the text coming you can put also image if
                              you want…
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Modal */}
                      <div
                        className='modal fade'
                        id='Modal2'
                        tabIndex={-1}
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'>
                        <div className='modal-dialog' role='document'>
                          <div className='modal-content'>
                            <div className='modal-header'>
                              <h5
                                className='modal-title'
                                id='exampleModalLabel'>
                                Alert Model
                              </h5>
                              <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>×</span>
                              </button>
                            </div>
                            <div className='modal-body'>
                              Lorem ipsum dolor sit amet...
                            </div>
                            <div className='modal-footer'>
                              <button
                                type='button'
                                className='btn btn-secondary'
                                data-dismiss='modal'>
                                Close
                              </button>
                              <button type='button' className='btn btn-primary'>
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Modal */}
                      <div
                        className='modal fade'
                        id='Modal3'
                        tabIndex={-1}
                        role='dialog'
                        aria-labelledby='exampleModalLabel'
                        aria-hidden='true'>
                        <div className='modal-dialog' role='document'>
                          <div className='modal-content'>
                            <div className='modal-header'>
                              <h5
                                className='modal-title'
                                id='exampleModalLabel'>
                                Image Header
                              </h5>
                              <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'>
                                <span aria-hidden='true'>×</span>
                              </button>
                            </div>
                            <div className='modal-body'>
                              <img
                                src='../assets/images/background/img5.jpg'
                                width='100% '
                              />
                            </div>
                            <div className='modal-footer'>
                              <button
                                type='button'
                                className='btn btn-secondary'
                                data-dismiss='modal'>
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Tooltips</h5>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        title='Tooltip on top'>
                        Tooltip on top
                      </button>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-toggle='tooltip'
                        data-bs-placement='right'
                        title='Tooltip on right'>
                        Tooltip on right
                      </button>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-toggle='tooltip'
                        data-bs-placement='bottom'
                        title='Tooltip on bottom'>
                        Tooltip on bottom
                      </button>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-toggle='tooltip'
                        data-bs-placement='left'
                        title='Tooltip on left'>
                        Tooltip on left
                      </button>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-md-4'>
                          <h5 className='card-title'>Default Pagination</h5>
                          <nav aria-label='Page navigation example'>
                            <ul className='pagination'>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  Previous
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  1
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  2
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  3
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className='col-md-4'>
                          <h5 className='card-title'>Pagination with icons</h5>
                          <nav aria-label='Page navigation example'>
                            <ul className='pagination'>
                              <li className='page-item'>
                                <a
                                  className='page-link'
                                  href='#'
                                  aria-label='Previous'>
                                  <span aria-hidden='true'>«</span>
                                  <span className='sr-only'>Previous</span>
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  1
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  2
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  3
                                </a>
                              </li>
                              <li className='page-item'>
                                <a
                                  className='page-link'
                                  href='#'
                                  aria-label='Next'>
                                  <span aria-hidden='true'>»</span>
                                  <span className='sr-only'>Next</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className='col-md-4'>
                          <h5 className='card-title'>
                            Disabled &amp; Active States
                          </h5>
                          <nav aria-label='...'>
                            <ul className='pagination'>
                              <li className='page-item disabled'>
                                <a className='page-link' href='#' tabIndex={-1}>
                                  Previous
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  1
                                </a>
                              </li>
                              <li className='page-item active'>
                                <a className='page-link' href='#'>
                                  2 <span className='sr-only'>(current)</span>
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  3
                                </a>
                              </li>
                              <li className='page-item'>
                                <a className='page-link' href='#'>
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Popovers</h5>
                      <div className='mt-3'>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-container='body'
                          data-toggle='popover'
                          data-placement='top'
                          data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'>
                          Popover on top
                        </button>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-container='body'
                          data-toggle='popover'
                          data-placement='right'
                          data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'>
                          Popover on right
                        </button>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-container='body'
                          data-toggle='popover'
                          data-placement='bottom'
                          data-content='Vivamus
                              sagittis lacus vel augue laoreet rutrum faucibus.'>
                          Popover on bottom
                        </button>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-container='body'
                          data-toggle='popover'
                          data-placement='left'
                          data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'>
                          Popover on left
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Notificaion</h5>
                      <div className='alert alert-primary' role='alert'>
                        A simple primary alert—check it out!
                      </div>
                      <div className='alert alert-secondary' role='alert'>
                        A simple secondary alert—check it out!
                      </div>
                      <div className='alert alert-success' role='alert'>
                        A simple success alert—check it out!
                      </div>
                      <div className='alert alert-danger' role='alert'>
                        A simple danger alert—check it out!
                      </div>
                      <div className='alert alert-warning' role='alert'>
                        A simple warning alert—check it out!
                      </div>
                      <div className='alert alert-info' role='alert'>
                        A simple info alert—check it out!
                      </div>
                    </div>
                    <div className='card-body border-top'>
                      <h5 className='card-title'>Additional Content</h5>
                      <div className='alert alert-success' role='alert'>
                        <h4 className='alert-heading'>Well done!</h4>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message. This example text is going to run a bit
                          longer so that you can see how spacing within an alert
                          works with this kind of content.
                        </p>
                        <hr />
                        <p className='mb-0'>
                          Whenever you need to, be sure to use margin utilities
                          to keep things nice and tidy.
                        </p>
                      </div>
                      <div className='alert alert-warning' role='alert'>
                        <h4 className='alert-heading'>Well done!</h4>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message. This example text is going to run a bit
                          longer so that you can see how spacing within an alert
                          works with this kind of content.
                        </p>
                        <hr />
                        <p className='mb-0'>
                          Whenever you need to, be sure to use margin utilities
                          to keep things nice and tidy.
                        </p>
                      </div>
                      <div className='alert alert-danger' role='alert'>
                        <h4 className='alert-heading'>Well done!</h4>
                        <p>
                          Aww yeah, you successfully read this important alert
                          message. This example text is going to run a bit
                          longer so that you can see how spacing within an alert
                          works with this kind of content.
                        </p>
                        <hr />
                        <p className='mb-0'>
                          Whenever you need to, be sure to use margin utilities
                          to keep things nice and tidy.
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

export default PagesElements;
