export default function ({store, redirect}) {
    !store.getters['user/userLogInStatus'] ? redirect('/') : '';
}