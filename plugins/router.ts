import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  // Add a global navigation guard
  router.beforeEach((to, from, next) => {
    // Add any navigation guards here
    next()
  })
})