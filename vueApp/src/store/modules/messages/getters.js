const getters = {
    getMessages: (state) => (channelId) =>{
        return state.messages.filter(mssg => mssg.channelId === channelId)
    }
}

export default getters