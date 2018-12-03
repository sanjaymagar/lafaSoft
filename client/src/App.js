import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, clearCurrentProfile } from './actions/authActions';


import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NotFound from './components/not-found/NotFound';

// Load from NavItem
import Blog from './components/NavItem/Blog';
import Career from './components/NavItem/Career';
import Contact from './components/NavItem/Contact';
import Desktop from './components/NavItem/Desktop-app';
import Mobile from './components/NavItem/Mobile-app';
import Web from './components/NavItem/Web-app';
import Others from './components/NavItem/Others';


import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/not-found" component={NotFound} />

              <Route exact path="/blog" component={Blog} />
              <Route exact path="/career" component={Career} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/desktop-app" component={Desktop} />
              <Route exact path="/mobile-app" component={Mobile} />
              <Route exact path="/web-app" component={Web} />
              <Route exact path="/others" component={Others} />

            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
