import React from 'react';

const Home2 = () => {
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
