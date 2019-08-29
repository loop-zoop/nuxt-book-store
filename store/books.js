export const state = () => ({
    books: {}
})

export const mutations = {
    setBooks(state, books) {
        state.books = books
    }
}

export const actions = {
    async fireBooksRequest({ commit }, search) {
        let { data } = await this.$axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`
        );
        commit('setBooks', data.items)
    }
}

export const getters = {
    allBooks: state => {
        return state.books
    }
}