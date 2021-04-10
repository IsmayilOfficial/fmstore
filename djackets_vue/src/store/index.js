import { createStore } from 'vuex'

export default createStore({
  state: {
    cart:{
      items: []
    },
    isAuthentifacated: false,
    token: '',
    isLoading: false

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
