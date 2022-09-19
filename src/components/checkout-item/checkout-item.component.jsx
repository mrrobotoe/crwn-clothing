import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
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

  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const handleAddItem = () => {
    addItemToCart(cartItem);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };

  const handleClearCartItem = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <RemoveButton onClick={handleRemoveItem}>
          &#10094;
        </RemoveButton>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan className="price">{price}</BaseSpan>
      <RemoveButton onClick={handleClearCartItem}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
