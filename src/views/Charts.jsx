import React from 'react';
import { Bar, Line, Scatter } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const rand4 = () => Math.round(Math.random() * 20 - 10);

const data4 = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
        { x: rand4(), y: rand4() },
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options4 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const data3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};

const data1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const Charts = () => {
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
                  <h4 className='page-title'>Charts</h4>
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
              {/* Chart-1 */}
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Real Time Chart</h5>
                      <div id='real-time' style={{ height: '400px' }} />
                      <p>
                        Time between updates:
                        <input
                          id='updateInterval'
                          type='text'
                          defaultValue
                          style={{ textAlign: 'right', width: '5em' }}
                        />
                        milliseconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ENd chart-1 */}
              {/* Chart-2 */}
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Scatter Plot</h5>
                      <p id='choices' className='mt-3' />
                      <Scatter data={data4} options={options4} />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Chart-2 */}
              {/* Cards */}
              <div className='row'>
                <div className='col-md-3'>
                  <div className='card mt-0'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='peity_line_neutral left text-center mt-2'>
                          <span>
                            <span style={{ display: 'none' }}>
                              10,15,8,14,13,10,10
                            </span>
                            <canvas width={50} height={24} />
                          </span>
                          <h6>10%</h6>
                        </div>
                      </div>
                      <div className='col-md-6 border-left text-center pt-2'>
                        <h3 className='mb-0 fw-bold'>150</h3>
                        <span className='text-muted'>New Users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mt-0'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='peity_bar_bad left text-center mt-2'>
                          <span>
                            <span style={{ display: 'none' }}>
                              3,5,6,16,8,10,6
                            </span>
                            <canvas width={50} height={24} />
                          </span>
                          <h6>-40%</h6>
                        </div>
                      </div>
                      <div className='col-md-6 border-left text-center pt-2'>
                        <h3 className='mb-0 fw-bold'>4560</h3>
                        <span className='text-muted'>Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mt-0'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='peity_line_good left text-center mt-2'>
                          <span>
                            <span style={{ display: 'none' }}>
                              12,6,9,23,14,10,17
                            </span>
                            <canvas width={50} height={24} />
                          </span>
                          <h6>+60%</h6>
                        </div>
                      </div>
                      <div className='col-md-6 border-left text-center pt-2'>
                        <h3 className='mb-0'>5672</h3>
                        <span className='text-muted'>Active Users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mt-0'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='peity_bar_good left text-center mt-2'>
                          <span>12,6,9,23,14,10,13</span>
                          <h6>+30%</h6>
                        </div>
                      </div>
                      <div className='col-md-6 border-left text-center pt-2'>
                        <h3 className='mb-0 fw-bold'>2560</h3>
                        <span className='text-muted'>Register</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End cards */}
              {/* Chart-3 */}
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Bar Chart</h5>
                      <Bar data={data3} />
                    </div>
                  </div>
                </div>
              </div>
              {/* End chart-3 */}
              {/* Charts */}
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Bar Chart</h5>
                      <Bar data={data} options={options} />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>Line Chart</h5>
                      <Line data={data} options={options} />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Charts */}
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

export default Charts;
