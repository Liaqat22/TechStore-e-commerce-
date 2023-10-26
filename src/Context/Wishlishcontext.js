// WishlistProvider component
import { createContext, useContext, useState, useEffect } from 'react';
import { shopdata } from '../Pages/productdata/ProductData';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Load wishlist data from localStorage when the component mounts
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);

  const addToWishlist = (product, selectedColor, selectedProductSize) => {
    const newWishlistItem = {
      product,
      selectedColor,
      selectedProductSize,
    };
    const newWishlist = [...wishlist, newWishlistItem];
    
    // Save the updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));

    setWishlist(newWishlist);
  };

  const contextValue = {
    wishlist,
    addToWishlist,

  };
//   const searchPost = (search) =>{
// shopdata
//   }

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
