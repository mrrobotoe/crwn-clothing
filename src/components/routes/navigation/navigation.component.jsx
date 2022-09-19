import { useContext } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";

import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { connectFirestoreEmulator } from "firebase/firestore";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser();
  }

  console.log('navigation component', currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo>Logo</CrwnLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
              ) : (
                <NavLink to='/auth'>
                  SIGN-IN
                </NavLink>
              )
          }
          <CartIcon/>
        </NavLinks>
        {
          isCartOpen && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;