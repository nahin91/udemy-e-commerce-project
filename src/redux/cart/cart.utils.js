// Utility functions allow us to keep our files clean
// and organize functions that we may need in multiple  files in one location.
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //now we check whether the item already exists in out 'cartItems'
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
