import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Preloader from '../components/Preloader';
import SideBar from '../components/SideBar';
import MainRouter from '../utils/MainRouter';

const Main = () => {
  const check = window.sessionStorage.getItem('token');
  return (
    <>
      {check ? <div></div> : <Preloader />}
      <Header />
      <SideBar />
      <MainRouter />
      <Footer />
    </>
  );
};

export default Main;
