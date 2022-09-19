import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import {CartDropDownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";
import { CartItemContainer } from '../cart-item/cart-item.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckHandler = () => {
    navigate("/check-out");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </CartItems>
      <Button onClick={goToCheckHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
