import {
  COMMIT_SET_STATUS_MUT,
  COMMIT_UPDATE_USERNAME_MUT,
} from "@/common/mutation-types.js";
import { getUser } from "@/api";

const module = {
  namespaced: true,
  state() {
    return {
      username: "",
    };
  },
  getters: {
    // firstNameP(state) {
    //   return state.username.split(".")[0];
    // },
    firstNameP: (state, getters, rootState) => (c) => {
      // return state.username.split(".")[0];
      return state.username;
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
      const user = await getUser(1);
      ctx.commit(COMMIT_UPDATE_USERNAME_MUT, user.username);
      if (ctx.state.username) {
        ctx.commit(COMMIT_SET_STATUS_MUT, "active", { root: true });
      }
    },
    updateUserName2({ commit }, username) {
      commit(COMMIT_UPDATE_USERNAME_MUT, username);
    },
  },
};

export default module;
