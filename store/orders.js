export const state = () => ({
    orders: [],
    currentOrder: null,
    orderMessage: '',
    showOrderAlert: false
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
    },
    setOrderMessage(state, orderMessage) {
        state.orderMessage = orderMessage
    },
    showAlert(state) {
        state.showOrderAlert = true
    },
    hideAlert(state) {
        state.showOrderAlert = false
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
    },
    completeOrder({commit, getters}) {
        commit('setOrderMessage', `You order of ${getters.totalOrdersPrice} UAH is complete!`)
        this.$router.replace('/')
        commit('showAlert')
        setTimeout(function(){
            commit('hideAlert')
        }, 15000)
        commit('cleanOrders')
    }
}

export const getters = {
    orderCount: state => {
        return state.orders.length
    },
    totalOrdersPrice: state => {
        let price = 0;
        state.orders.forEach(function(book) {
          book.saleInfo.retailPrice
            ? (price += book.saleInfo.retailPrice.amount)
            : (price += 20);
        });
        return price;
      }
}