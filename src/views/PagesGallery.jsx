import React from 'react';

const PagesGallery = () => {
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
                  <h4 className='page-title'>Full Width</h4>
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
              <div className='row el-element-overlay'>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img1.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img1.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img2.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img2.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img3.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img3.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img4.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img4.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img3.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img3.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img5.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img5.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img6.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img6.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img1.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img1.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img1.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img1.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img2.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img2.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img3.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img3.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                  <div className='card'>
                    <div className='el-card-item'>
                      <div className='el-card-avatar el-overlay-1'>
                        <img src='../assets/images/big/img4.jpg' alt='user' />
                        <div className='el-overlay'>
                          <ul className='list-style-none el-info'>
                            <li className='el-item'>
                              <a
                                className='
                        btn
                        default
                        btn-outline
                        image-popup-vertical-fit
                        el-link
                      '
                                href='../assets/images/big/img4.jpg'>
                                <i className='mdi mdi-magnify-plus' />
                              </a>
                            </li>
                            <li className='el-item'>
                              <a
                                className='btn default btn-outline el-link'
                                href='javascript:void(0);'>
                                <i className='mdi mdi-link' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='el-card-content'>
                        <h4 className='mb-0'>Project title</h4>
                        <span className='text-muted'>subtitle of project</span>
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

export default PagesGallery;
