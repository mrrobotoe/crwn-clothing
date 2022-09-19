import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({cartItem}) => {
  const { name, quantity, price, imageUrl} = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetails className='item-details'>
        <span className='name'>{name}</span>
        <span>{quantity} x ${quantity * price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;