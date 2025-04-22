export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/soon') {
    return
  }

  return navigateTo('/soon')
})