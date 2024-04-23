import { createStore } from 'vuex'
import profile from './modules/profile'


const store = createStore({
  getters: {
    firstName: (state,getters, rootState) => (c)=>{
      // return state.username.split(".")[0];
      return rootState.profile.username.split('').join(c)
    },
  },
  modules: {
    profile
  }
})

export default store