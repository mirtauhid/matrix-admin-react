import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../App';

const SideBar = () => {
  const [nav, setNav] = useContext(NavContext);
  return (
    <div>
      {nav ? (
        <aside
          style={{ backgroundColor: '#1e262d', maxWidth: '100%' }}
          className='left-sidebar'
          data-sidebarbg='skin5'>
          {/* Sidebar scroll*/}
          <div className='scroll-sidebar'>
            {/* Sidebar navigation*/}
            <nav className='sidebar-nav'>
              <ul id='sidebarnav' className='pt-4'>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/'
                    aria-expanded='false'>
                    <i className='mdi mdi-view-dashboard' />
                    <span className='hide-menu'>Dashboard</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/charts'
                    aria-expanded='false'>
                    <i className='mdi mdi-chart-bar' />
                    <span className='hide-menu'>Charts</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/widgets'
                    aria-expanded='false'>
                    <i className='mdi mdi-chart-bubble' />
                    <span className='hide-menu'>Widgets</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/tables'
                    aria-expanded='false'>
                    <i className='mdi mdi-border-inside' />
                    <span className='hide-menu'>Tables</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/grid'
                    aria-expanded='false'>
                    <i className='mdi mdi-blur-linear' />
                    <span className='hide-menu'>Full Width</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    to='/forms'
                    aria-expanded='false'>
                    <i className='mdi mdi-receipt' />
                    <span className='hide-menu'>Forms </span>
                  </Link>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <Link to='/form_basic' className='sidebar-link'>
                        <i className='mdi mdi-note-outline' />
                        <span className='hide-menu'> Form Basic </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/form_wizard' className='sidebar-link'>
                        <i className='mdi mdi-note-plus' />
                        <span className='hide-menu'> Form Wizard </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/pages_buttons'
                    aria-expanded='false'>
                    <i className='mdi mdi-relative-scale' />
                    <span className='hide-menu'>Buttons</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    to='/icons'
                    aria-expanded='false'>
                    <i className='mdi mdi-face' />
                    <span className='hide-menu'>Icons </span>
                  </Link>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <Link to='/icon_material' className='sidebar-link'>
                        <i className='mdi mdi-emoticon' />
                        <span className='hide-menu'> Material Icons </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/icon_fontawesome' className='sidebar-link'>
                        <i className='mdi mdi-emoticon-cool' />
                        <span className='hide-menu'> Font Awesome Icons </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link waves-effect waves-dark sidebar-link'
                    to='/pages_elements'
                    aria-expanded='false'>
                    <i className='mdi mdi-pencil' />
                    <span className='hide-menu'>Elements</span>
                  </Link>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    to='/addons'
                    aria-expanded='false'>
                    <i className='mdi mdi-move-resize-variant' />
                    <span className='hide-menu'>Addons </span>
                  </Link>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <Link to='/home2' className='sidebar-link'>
                        <i className='mdi mdi-view-dashboard' />
                        <span className='hide-menu'> Dashboard-2 </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/pages_gallery' className='sidebar-link'>
                        <i className='mdi mdi-multiplication-box' />
                        <span className='hide-menu'> Gallery </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/pages_calendar' className='sidebar-link'>
                        <i className='mdi mdi-calendar-check' />
                        <span className='hide-menu'> Calendar </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/pages_invoice' className='sidebar-link'>
                        <i className='mdi mdi-bulletin-board' />
                        <span className='hide-menu'> Invoice </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/pages_chat' className='sidebar-link'>
                        <i className='mdi mdi-message-outline' />
                        <span className='hide-menu'> Chat Option </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    to='javascript:void(0)'
                    aria-expanded='false'>
                    <i className='mdi mdi-account-key' />
                    <span className='hide-menu'>Authentication </span>
                  </Link>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <Link to='/signin' className='sidebar-link'>
                        <i className='mdi mdi-all-inclusive' />
                        <span className='hide-menu'> Login </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/signup' className='sidebar-link'>
                        <i className='mdi mdi-all-inclusive' />
                        <span className='hide-menu'> Register </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='sidebar-item'>
                  <Link
                    className='sidebar-link has-arrow waves-effect waves-dark'
                    to='javascript:void(0)'
                    aria-expanded='false'>
                    <i className='mdi mdi-alert' />
                    <span className='hide-menu'>Errors </span>
                  </Link>
                  <ul aria-expanded='false' className='collapse first-level'>
                    <li className='sidebar-item'>
                      <Link to='/error403' className='sidebar-link'>
                        <i className='mdi mdi-alert-octagon' />
                        <span className='hide-menu'> Error 403 </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/error404' className='sidebar-link'>
                        <i className='mdi mdi-alert-octagon' />
                        <span className='hide-menu'> Error 404 </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/error405' className='sidebar-link'>
                        <i className='mdi mdi-alert-octagon' />
                        <span className='hide-menu'> Error 405 </span>
                      </Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to='/error500' className='sidebar-link'>
                        <i className='mdi mdi-alert-octagon' />
                        <span className='hide-menu'> Error 500 </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SideBar;
