/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Header from '../nav/Navbar';
//  import Footer from '../../components/Footer/footer';
// import Slick from '../../components/Slick/slick';
 import Register from '../register/Register';
// import Edit from '../../components/registaration/editpf';
import Login from '../login/login.js';
import Home from '../home/home';
// import Profile from "../../components/registaration/Profile";
 import Students from "../admin/studenddetails";
 import Userupdate from "../users/userupdate";
 import Studentupdate from "../admin/studentdailyUpdates";
// import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

export default function App() {
  return (
    <Router>
   
      <Switch>
      <Route path='/' exact render={props =>
          <div>
          <Login />
  {/* <Slick /> */}
  </div>
  } />  
  
    
        <Route path='/home' exact render={props =>
          <div>
          <Header />
<Home/>
  {/* <Slick /> */}
  </div>
  } />  
  <Route path='/register' exact render={props =>
          <div>
          <Header />
          <Register/>
  {/* <Slick /> */}
  </div>
  } />  
  <Route path='/studentupdate' exact render={props =>
          <div>
          <Header />
          <Studentupdate/>
  {/* <Slick /> */}
  </div>
  } />  
  <Route path='/userupdate' exact render={props =>
          <div>
          <Header />
          <Userupdate/>
  {/* <Slick /> */}
  </div>
  } />  
  <Route path='/students' exact render={props =>
          <div>
          <Header />
          <Students/>
  {/* <Slick /> */}
  </div>
  } />  
  
{/* <Route path='/edit' component={Edit} /> */}
{/* <Route path='/register' component={Register}/> */}
{/* <Route path='/studentupdate' component={Studentupdate}/>
<Route path='/userupdate' component={Userupdate}/>
<Route path='/students' component={Studends}/>
<Route path='/' component={Login}/> */}
{/* <Route exact path="/profile" component={Profile} /> */}
  </Switch>
 
  </Router>
  );
}