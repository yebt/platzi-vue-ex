import { createStore } from 'vuex'
import profile from './modules/profile'
import { COMMIT_SET_STATUS_MUT } from '@/common/mutation-types'


const store = createStore({
  state:{
    status: null,
  },
  getters: {
    firstName: (state,getters, rootState) => (c)=>{
      // return state.username.split(".")[0];
      return rootState.profile.username.split('').join(c)
    },
  },
  mutations: {
    [COMMIT_SET_STATUS_MUT](state, newStatus){
      state.status = newStatus
    } 
  },
  modules: {
    profile
  }
})

export default store