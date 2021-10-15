import React from 'react';

const PagesChat = () => {
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
                  <h4 className='page-title'>Chat Option</h4>
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

export default PagesChat;
