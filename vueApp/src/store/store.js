import { reactive } from 'vue'

const store = reactive({
    username: 'yebt.walo',
    updateUsername(username) {
        this.username = username
    }
})

export default store