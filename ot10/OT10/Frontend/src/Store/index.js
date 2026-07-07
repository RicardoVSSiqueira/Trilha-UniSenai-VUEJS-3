import { createStore } from 'vuex';

import auth from './auth';
import products from './produtos';

export default createStore({
  modules: {
    auth,
    products
  }
});