export default function ({ store, redirect, app }) {
  if (app.$cookies.get('token') && app.$cookies.get('expires_in')) {
    app.$axios.setToken(
      app.$cookies.get('token'),
      app.$cookies.get('token_type')
    )
  } else if (store.state.auth.isLoggedIn) {
    app.$axios.setToken(store.state.auth.token, 'Bearer')
  } else {
    return redirect('/login')
  }
}
