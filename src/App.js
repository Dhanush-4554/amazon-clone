import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
import "firebase/compat/auth";
import { auth } from './components/firebase';
import Payment from './components/Payment';
import Alert from './components/Alert';
import Order from './components/Order';
import Orders from './components/Orders';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
          <Route path="/payment" element={[<Header />, <Payment/>]}/>
          <Route path="/alert" element={[<Header />, <Alert/>]}/>
          <Route path="/orders" element={[<Header />, <Orders/>]}/>
          <Route path="/login" element={[<Header />, <Login/>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;