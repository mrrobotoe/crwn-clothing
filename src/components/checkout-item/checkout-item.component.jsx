import { useDispatch, useSelector } from "react-redux";

import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Arrow,
  Quantity,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handleClearCartItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <RemoveButton onClick={handleRemoveItem}>&#10094;</RemoveButton>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan className="price">{price}</BaseSpan>
      <RemoveButton onClick={handleClearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
