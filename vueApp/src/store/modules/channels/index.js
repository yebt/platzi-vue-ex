const module = {
    namespaced:true,
    state(){
        return {
            channel: null,
            channels: [
                {id:1, name: 'Canal 1', messages: null},
                {id:2, name: 'Canal 2', messages: null},
                {id:3, name: 'Canal 3', messages: null},
                {id:4, name: 'Canal 4', messages: null},
            ]
        }
    },
    getters: {
        getChannels: (state, getters, rootState, rootGetters) => (query) => {
            // if (! query){
            //     return state.channels
            // }
            return state.channels.filter(
                (chnl) => chnl.name.toLowerCase().includes(query.toLowerCase())
            ).map((chnl)=> {
                const mssgs = rootGetters['messages/getUnreadMessages'](chnl.id)
                return {
                    ...chnl,
                    messages: mssgs
                }
            })
        }
    },
    mutations: {
        setChannel: (ctx, chanel) => {
            ctx.state.chanel = chanel
        }
    }

    
}

export default module