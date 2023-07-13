/**
 * Cart items actions.
 * @module actions/getCartItems
 */
import { CART_SESSION_KEY } from '../../cart/useCartState';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';
/**
 * Set Cart items.
 * @function setCartItems
 * @returns {Object} Set extra items action.
 */
export const setCartItems = (items) => {
  return async (dispatch) => {
    dispatch({
      type: `${SET_CART_ITEMS}_PENDING`,
    });
    try {
      dispatch({
        type: `${SET_CART_ITEMS}_SUCCESS`,
        items: items,
      });
    } catch (error) {
      dispatch({
        type: `${SET_CART_ITEMS}_ERROR`,
        error: error,
      });
    }
  };
};

/**
 * Get Cart items.
 * @function getCartItems
 * @returns {Object} Get extra items action.
 */

export const getCartItems = (user_id) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_CART_ITEMS}_PENDING`,
    });
    try {
      const CART_SESSION_USER_KEY = user_id
        ? CART_SESSION_KEY.concat(`_${user_id}`)
        : CART_SESSION_KEY;
      const items =
        (await JSON.parse(localStorage.getItem(CART_SESSION_USER_KEY))) || [];
      dispatch({
        type: `${GET_CART_ITEMS}_SUCCESS`,
        items: items,
      });
    } catch (error) {
      dispatch({
        type: `${GET_CART_ITEMS}_ERROR`,
        error: error,
      });
    }
  };
};
