import React, { useEffect, useState } from 'react';

import { Message } from 'semantic-ui-react';
import { cleanDuplicatesUniqueIds } from '@eeacms/volto-clms-utils/utils';
import jwtDecode from 'jwt-decode';
import { setCartItems } from '@eeacms/volto-clms-utils/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const CART_SESSION_KEY = 'cart_session';

const useCartState = () => {
  // const [cart, setCart] = useState([]);
  const [savedToCard, setSavedToCard] = useState(false);
  const [toasTime, setToastTime] = useState(3000);
  const [CART_SESSION_USER_KEY, SET_CART_SESSION_USER_KEY] = useState();
  const isLoggedIn = useSelector((state) =>
    state.userSession.token ? jwtDecode(state.userSession.token).sub : '',
  )
    ? true
    : false;

  const user_id = useSelector((state) => state.users.user.id);
  const cartState = useSelector((state) => state.cart_items.items);
  useEffect(() => {
    if (user_id) {
      SET_CART_SESSION_USER_KEY(CART_SESSION_KEY.concat(`_${user_id}`));
      getCartSessionStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CART_SESSION_USER_KEY, user_id]);
  const dispatch = useDispatch();

  const saveItems = (values) => {
    let items = cleanDuplicatesUniqueIds(values);
    localStorage.setItem(CART_SESSION_USER_KEY, JSON.stringify(items));
    dispatch(setCartItems(items ?? []));
    setSavedToCard(true);
    setTimeout(() => setSavedToCard(false), toasTime);
  };

  const removeAllCart = () => {
    localStorage.removeItem(CART_SESSION_USER_KEY);
    dispatch(setCartItems([]));
  };

  const getCartSessionStorage = () => {
    CART_SESSION_USER_KEY &&
      dispatch(
        setCartItems(
          JSON.parse(localStorage.getItem(CART_SESSION_USER_KEY)) || [],
        ),
      );
  };

  const addCartItem = async (value) => {
    await getCartSessionStorage();
    if (cartState) {
      saveItems(cartState.concat(value));
    } else {
      saveItems(value);
    }
  };

  const removeCartItem = async (id) => {
    await getCartSessionStorage();
    let newcart = cartState.slice();
    await newcart.forEach((item) => {
      if (item.unique_id === id) {
        newcart.splice(newcart.indexOf(item), 1);
      }
    });

    saveItems(newcart);
  };

  const Toast = ({ message, time = toasTime }) => {
    return (
      <>
        {setToastTime(time)}
        {savedToCard ? (
          <Message positive compact floating size="big">
            {message ? message : 'Added to card'}
          </Message>
        ) : (
          <></>
        )}
      </>
    );
  };

  return {
    cart: cartState,
    addCartItem: addCartItem,
    removeAllCart: removeAllCart,
    removeCartItem: removeCartItem,
    Toast: Toast,
    isLoggedIn: isLoggedIn,
  };
};

export default useCartState;
