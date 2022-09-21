import { ReactComponent as ShoppIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

import { useSelector, useDispatch } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const cartQuantity = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
