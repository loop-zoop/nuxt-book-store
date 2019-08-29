export const state = () => ({
    books: {}
})

export const mutations = {
    setBooks(state, books) {
        state.books = books
    }
}

export const actions = {

}

export const getters = {
    allBooks: state => {
        return state.books
    }
}