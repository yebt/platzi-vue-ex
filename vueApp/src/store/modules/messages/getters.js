const getters = {
    getMessages: (state) => (channelId) =>{
        return state.messages.filter(mssg => mssg.channelId === channelId)
    },
    getUnreadMessages:(state, getters, rootState, rootGetters) => (channelId) => {
        return getters.getMessages(channelId).filter(mssg => !mssg.read ).length
    },
}

export default getters