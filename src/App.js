import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'

import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/routes/shop/shop.component';
import CheckoutCart from './components/routes/checkout-cart/checkout-cart.component';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });

    // return unsubscribe;
    dispatch(checkUserSession());
  }, []);

  return ( 
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='check-out' element={<CheckoutCart />} />
      </Route>
    </Routes>
  )
};

export default App;
