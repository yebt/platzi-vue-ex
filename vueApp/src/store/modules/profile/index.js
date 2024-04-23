import { COMMIT_UPDATE_USERNAME_MUT } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
  state() {
    return {
      username: "Lucas",
    };
  },
  getters: {
    firstNameP(state) {
      return state.username.split(".")[0];
    },
    reverseName: (state) => (c) => {
      return state.username.split("").reverse().join(c);
    },
  },
  // This just must be sync function
  mutations: {
    [COMMIT_UPDATE_USERNAME_MUT](state, newUsername) {
      state.username = newUsername;
    },
  },
  // This could be async functions for call in balckend etc.
  actions: {
    async updateUserName(ctx, username) {
      console.log("Update username action!!");
      console.log("Old username", ctx.state.username);
      console.log("new username", username);
      const user = await getUser(1);
      console.log(user);
      ctx.commit("updateUserNameMut", user.username);
    },
    updateUserName2({ commit }, username) {
      commit(COMMIT_UPDATE_USERNAME_MUT, username);
    },
  },
};

export default module;
