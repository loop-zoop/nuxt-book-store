export const state = () => ({
    orders: [],
    currentOrder: null
});

export const mutations = {
    addBookToOrders(state, book) {
        state.orders.push(book)
    },
    setCurrentOrder(state, book) {
        state.currentOrder = book
    },
    removeCurrentOrder(state) {
        state.currentOrder = null
    },
    cleanOrders(state) {
        state.orders = []
    }
}

export const actions = {
    async order({ commit, rootState }, bookIndex) {
        commit('setCurrentOrder', rootState.books.books[bookIndex])
        if (!Object.keys(rootState.user.user).length) {
            this.$router.push('/login')
        } else {
            commit('addBookToOrders', rootState.books.books[bookIndex])
        }
    }
}

export const getters = {
    orderCount: state => {
        return state.orders.length
    }
}