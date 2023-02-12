export default function ({ store, redirect, app }) {
  if (app.$cookies.get('token') || store.state.auth.isLoggedIn) {
    return redirect('/')
  }
}
