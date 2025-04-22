export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/locataire')) {
    to.meta.layout = 'locataire'
  } else if (to.path.startsWith('/proprietaire')) {
    to.meta.layout = 'proprietaire'
  }  else {
    to.meta.layout = 'default'
  }
})
