import React from 'react';

const PagesCalender = () => {
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
                  <h4 className='page-title'>Calendar</h4>
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
                                    className='cform-check-label'
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

export default PagesCalender;
