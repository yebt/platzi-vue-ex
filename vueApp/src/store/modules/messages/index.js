import getters from './getters.js'

const module = {
    namespaced: true,
    state(){
        return {
            messages: [
                {
                    id:1,
                    author: 1,
                    channelId : 1,
                    message: 'Hope 👀',
                    timestamp: new Date().toLocaleDateString(),
                    read: false
                },
                {
                    id:2,
                    author: 1,
                    channelId : 2,
                    message: 'WHatsup 😎',
                    timestamp: new Date().toLocaleDateString(),
                    read: false
                },
            ]
        }
    },
    getters
}

export default module