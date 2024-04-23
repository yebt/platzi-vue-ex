import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
        username : 'walo.dd'
    }
  },
  getters: {
    firstName(state) {
        return state.username.split('.')[0]
    },
    reverseName: (state) =>(c) =>{
        return state.username.split('').reverse().join(c)
    }
  },
  // This just must be sync function
  mutations: {
    updateUserNameMut(state, newUsername) {
        state.username = newUsername
    }
  },
  // This could be async functions for call in balckend etc.
  actions: {
    updateUserName(ctx, username){  
        console.log('Update username action!!') 
        console.log('Old username', ctx.state.username)
        console.log('new username', username)
        ctx.commit('updateUserNameMut', username)
    },
    updateUserName2({commit}, username){
        commit('updateUserNameMut', username)
    }
  }
})

export default store