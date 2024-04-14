// CartContext.tsx

import React from 'react';
import {Cosmetic} from '../../ui/Item/DetailProduct.tsx';

type CartContextType = {
  cartItems: Cosmetic[];
  addToCart: (item: Cosmetic) => void;
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  setCartItems: (items: Cosmetic[]) => void;
};

const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  isCartVisible: false,
  setIsCartVisible: () => {},
  setCartItems: () => {},
});

export default CartContext;
