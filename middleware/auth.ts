export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  
  // Si l'utilisateur n'est pas authentifié et essaie d'accéder à une route protégée
  if (!authStore.isAuthenticated && to.path.startsWith('/dashboard')) {
    return navigateTo('/auth/login')
  }

  // Si l'utilisateur est authentifié mais essaie d'accéder au mauvais dashboard
  if (authStore.isAuthenticated && to.path.startsWith('/dashboard')) {
    const role = authStore.user?.role
    if (to.path === '/proprietaire/dashboard' && role !== 'proprietaire') {
      return navigateTo('/locataire/dashboard')
    }
    if (to.path === '/locataire/dashboard' && role !== 'locataire') {
      return navigateTo('/proprietaire/dashboard')
    }
  }
})