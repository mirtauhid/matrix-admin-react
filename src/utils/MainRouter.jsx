import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Charts from '../views/Charts';
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
import Tables from '../views/Tables';
import Widgets from '../views/Widgets';

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
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
        <Route path='/pages_calendar'>
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
        <Route path='/tables'>
          <Tables />
        </Route>
      </Switch>
      <Switch>
        <Route path='/widgets'>
          <Widgets />
        </Route>
      </Switch>
    </>
  );
};

export default MainRouter;
