import getters from "./getters.js";

const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 3,
          channelId: 1,
          message: "Hope 👀",
          timestamp: new Date().toLocaleDateString(),
          read: false,
        },
        {
          id: 2,
          author: 2,
          channelId: 2,
          message: "WHatsup 😎",
          timestamp: new Date().toLocaleDateString(),
          read: false,
        },
        {
          id: 3,
          author: 2,
          channelId: 2,
          message: "See our new database 📊",
          timestamp: new Date().toLocaleDateString(),
          read: false,
        },
        {
            id: 4,
            author: 1,
            channelId: 2,
            message: "I need fix the bug 🐛, of the trigger error 🔥.",
            timestamp: new Date().toLocaleDateString(),
            read: false,
          },
      ],
    };
  },
  getters,
};

export default module;
