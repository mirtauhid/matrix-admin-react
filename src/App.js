import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRouter from './utils/PrivateRouter';
import Error403 from './views/Error403';
import Error404 from './views/Error404';
import Error405 from './views/Error405';
import Error500 from './views/Error500';
import Main from './views/Main';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

export const NavContext = createContext();
export const UserContext = createContext();

const App = () => {
  const [nav, setNav] = useState(true);
  const [user, setUser] = useState({
    username: '',
    email: '',
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <NavContext.Provider value={[nav, setNav]}>
        <Router>
          <Switch>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/error403'>
              <Error403 />
            </Route>
            <Route path='/error404'>
              <Error404 />
            </Route>
            <Route path='/error405'>
              <Error405 />
            </Route>
            <Route path='/error500'>
              <Error500 />
            </Route>
            <PrivateRouter>
              <Main />
            </PrivateRouter>
          </Switch>
        </Router>
      </NavContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
