/**
 * Root reducer.
 * @module reducers/root
 */

// import defaultReducers from '@plone/volto/reducers';
import { cartItemsReducer } from './cart/cart_reducer';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  // ...defaultReducers,
  // Add your reducers here
  cart_items: cartItemsReducer,
};

export default reducers;
