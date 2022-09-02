import { createStore } from 'vuex'
import moduloLancamentos from './modules/lancamentos';

export default createStore({
  modules: {
    moduloLancamentos
  },
})