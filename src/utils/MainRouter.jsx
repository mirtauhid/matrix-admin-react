import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Charts from '../views/Charts';
import Error403 from '../views/Error403';
import Error404 from '../views/Error404';
import Error405 from '../views/Error405';
import Error500 from '../views/Error500';
import FormWizard from '../views/FormWizard';
import FromBasic from '../views/FromBasic';
import Grid from '../views/Grid';
import Home from '../views/Home';
import Home2 from '../views/Home2';
import IconFontAwesome from '../views/IconFontAwesome';
import IconMaterial from '../views/IconMaterial';
import PagesButtons from '../views/PagesButtons';
import PagesCalender from '../views/PagesCalender';
import PagesChat from '../views/PagesChat';
import PagesElements from '../views/PagesElements';
import PagesGallery from '../views/PagesGallery';
import PagesInvoice from '../views/PagesInvoice';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Tables from '../views/Tables';
import Widgets from '../views/Widgets';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path='/home2'>
          <Home2 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/charts'>
          <Charts />
        </Route>
      </Switch>
      <Switch>
        <Route path='/error403'>
          <Error403 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/error404'>
          <Error404 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/error405'>
          <Error405 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/error500'>
          <Error500 />
        </Route>
      </Switch>
      <Switch>
        <Route path='/form_wizard'>
          <FormWizard />
        </Route>
      </Switch>
      <Switch>
        <Route path='/form_basic'>
          <FromBasic />
        </Route>
      </Switch>
      <Switch>
        <Route path='/grid'>
          <Grid />
        </Route>
      </Switch>
      <Switch>
        <Route path='/icon_fontawesome'>
          <IconFontAwesome />
        </Route>
      </Switch>
      <Switch>
        <Route path='/icon_material'>
          <IconMaterial />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pages_buttons'>
          <PagesButtons />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pages_calender'>
          <PagesCalender />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pages_chat'>
          <PagesChat />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pages_elements'>
          <PagesElements />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pages_gallery'>
          <PagesGallery />
        </Route>
      </Switch>
      <Switch>
        <Route path='/pages_invoice'>
          <PagesInvoice />
        </Route>
      </Switch>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Switch>
      <Switch>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
      <Switch>
        <Route path='/tables'>
          <Tables />
        </Route>
      </Switch>
      <Switch>
        <Route path='/widgets'>
          <Widgets />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
