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
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home2'>
          <Home2 />
        </Route>
        <Route path='/charts'>
          <Charts />
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
        <Route path='/form_wizard'>
          <FormWizard />
        </Route>
        <Route path='/form_basic'>
          <FromBasic />
        </Route>
        <Route path='/grid'>
          <Grid />
        </Route>
        <Route path='/icon_fontawesome'>
          <IconFontAwesome />
        </Route>
        <Route path='/icon_material'>
          <IconMaterial />
        </Route>
        <Route path='/pages_buttons'>
          <PagesButtons />
        </Route>
        <Route path='/pages_calender'>
          <PagesCalender />
        </Route>
        <Route path='/pages_chat'>
          <PagesChat />
        </Route>
        <Route path='/pages_elements'>
          <PagesElements />
        </Route>
        <Route path='/pages_gallery'>
          <PagesGallery />
        </Route>
        <Route path='/pages_invoice'>
          <PagesInvoice />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/tables'>
          <Tables />
        </Route>
        <Route path='/widgets'>
          <Widgets />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
