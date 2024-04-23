const module = {
  namespaced: true,
  state() {
    return {
      contacts: [
        { id: 2, name: "Jason", avatar: "/avatars/avatar-02.jpg" },
        { id: 3, name: "Janet", avatar: "/avatars/avatar-03.jpg" },
      ],
    };
  },
  getters: {
    getContacts: (state) => {
      return state.contacts;
    },
    getContactById: (state, getters, rootState) => (contactId) =>{
        const profileId = rootState.profile.id
        if (profileId === contactId) return {
          id:rootState.profile.id,
          name: rootState.profile.name,
          avatar: rootState.profile.avatar,
        }
        return state.contacts.find(ctct => ctct.id === contactId)
    }
  },
};

export default module;
