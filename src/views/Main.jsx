import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Preloader from '../components/Preloader';
import SideBar from '../components/SideBar';
import MainRouter from '../utils/MainRouter';

const Main = () => {
  return (
    <div id='container'>
      <div id='preloader'>
        <Preloader />
      </div>
      <div id='header'>
        <Header />
      </div>
      <div id='main'>
        <div id='sidebar'>
          <SideBar />
        </div>
        <div id='views'>
          <MainRouter />
        </div>
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
