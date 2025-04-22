<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header pour visiteurs -->
    <header class="bg-white shadow fixed top-0 w-full z-50" :class="{ 'blurred-disabled': isSoonPage }">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between items-center">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <img class="h-16 w-auto" src="/img/logo.png" alt="LOGO LOCASPACE" />
              <span class="text-2xl font-bold text-primary hover:text-secondary">LocaSpace</span>
            </NuxtLink>
          </div>

          <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <NuxtLink to="/properties" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              Biens disponibles
            </NuxtLink>
            <NuxtLink to="/about" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              À propos
            </NuxtLink>
            <NuxtLink to="/blog" class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              Blog
            </NuxtLink>
            <NuxtLink to="/auth/login" class="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-md">
              Connexion
            </NuxtLink>
            <NuxtLink to="/auth/register" class="px-4 py-2 text-sm font-medium text-primary bg-white border border-primary hover:bg-primary hover:text-white rounded-md">
              Inscription
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <TheFooter :class="{ 'blurred-disabled': isSoonPage }" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const route = useRoute()
const isSoonPage = computed(() => route.path === '/soon')

// Rediriger vers le layout approprié si l'utilisateur est connecté
if (authStore.isAuthenticated) {
  const layout = authStore.isProprietaire ? 'proprietaire' : 'locataire'
  definePageLayout(layout)
}
</script>



<style scoped>
.blurred-disabled {
  filter: blur(1px);
  pointer-events: none;
  user-select: none;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
}
</style>
