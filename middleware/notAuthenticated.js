// 验证是否登录的中间件, 如果已经登录，跳转首页
export default function({ store, redirect }) {
  if (store.state.user) {
    return redirect('/')
  }
}
