import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/home-screen';
import Login from './components/login';
import Profile from './components/profile';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        console.log('use effect app',userAuth);
      } else {
        dispatch(logout());
      }
    })
    return unsubcribe
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? <Login />: 
        (
          <Router>
            <Switch>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/'>
                <HomeScreen />
              </Route>
            </Switch>
          </Router>
        )
      }
    </div>
  );
}

export default App;
