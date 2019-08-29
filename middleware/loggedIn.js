export default function ({store, route, redirect}) {
    store.user.state.userLogInStatus && route.name == 'login' ? redirect('/') : '';
    store.user.state.userLogInStatus && route.name == 'signup' ? redirect('/'): '';
}