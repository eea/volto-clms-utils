/**
 * Cart items reducer.
 * @module reducers/cartItemsReducer
 */

import { SET_CART_ITEMS, GET_CART_ITEMS } from '../../actions/cart/cart';

const initialState = {
  items: [],
  get: {
    loading: false,
    loaded: false,
    error: null,
  },
  set: {
    loading: false,
    loaded: false,
    error: null,
  },
};

export const cartItemsReducer = (state = initialState, action = {}) => {
  switch (action?.type) {
    case `${SET_CART_ITEMS}_PENDING`:
      return {
        ...state,
        set: {
          ...state.set,
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case `${SET_CART_ITEMS}_SUCCESS`:
      return {
        ...state,
        items: action.items || [],
        set: {
          ...state.set,
          loading: false,
          loaded: true,
        },
      };
    case `${SET_CART_ITEMS}_ERROR`:
      return {
        ...state,
        set: {
          ...state.set,
          loading: false,
          loaded: false,
          error: action.error,
        },
      };
    case `${GET_CART_ITEMS}_PENDING`:
      return {
        ...state,
        get: {
          ...state.get,
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case `${GET_CART_ITEMS}_SUCCESS`:
      return {
        ...state,
        items: action.items || [],
        get: {
          ...state.get,
          loading: false,
          loaded: true,
        },
      };
    case `${GET_CART_ITEMS}_ERROR`:
      return {
        ...state,
        get: {
          ...state.get,
          loading: false,
          loaded: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};
