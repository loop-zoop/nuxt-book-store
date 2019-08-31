import firebase from '~/plugins/firebase';

export const state = () => ({
    user: {}
})

export const mutations = {
    signIn(state, user){
        state.user = JSON.parse(JSON.stringify(user))
    },
    signOut(state){
        state.user = {}
    },
}

export const actions = {
    signOut({commit}) {
        firebase.auth().signOut().then(function() {
            commit('orders/cleanOrders')
            commit('signOut')
        })
    }
}

export const getters = {
    userLogInStatus: state => {
        if (Object.keys(state.user).length) {
            return true
        } else {
            return false
        }
    }
}