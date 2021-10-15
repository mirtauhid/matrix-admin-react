import React from 'react';

const PagesInvoice = () => {
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
