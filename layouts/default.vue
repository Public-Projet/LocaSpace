<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header pour visiteurs -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <img class="h-16 w-auto" src="/img/logo.png" alt="LOGO LOCASPACE" />
              <span class="text-2xl font-bold text-primary hover:text-secondary">LocaSpace</span>
            </NuxtLink>
          </div>

          <!-- Desktop navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link"
                :class="{ 'router-link-active': $route.path === item.path }">
                {{ item.label }}
              </NuxtLink>
              <NuxtLink to="/auth/login"
                class="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-md">
                Connexion
              </NuxtLink>
              <NuxtLink to="/auth/register"
                class="px-4 py-2 text-sm font-medium text-primary bg-white border border-primary hover:bg-primary hover:text-white rounded-md">
                Inscription
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile hamburger -->
          <button @click="isOpen = !isOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition"
            :aria-expanded="isOpen" aria-label="Toggle navigation">
            <IconMenu v-if="!isOpen" class="h-6 w-6" />
            <IconX v-else class="h-6 w-6" />
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <transition name="slide-fade">
        <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" @click="close" class="mobile-link"
              :class="{ 'router-link-active': $route.path === item.path }">
              {{ item.label }}
            </NuxtLink>

            <NuxtLink to="/auth/login"
              class="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-md">
              Connexion
            </NuxtLink>
            <NuxtLink to="/auth/register"
              class="px-4 py-2 text-sm font-medium text-primary bg-white border border-primary hover:bg-primary hover:text-white rounded-md">
              Inscription
            </NuxtLink>
          </div>
        </div>
      </transition>
    </header>





    <!-- <header class="bg-white shadow fixed top-0 w-full z-50" :class="{ 'blurred-disabled': isSoonPage }">
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
            <NuxtLink to="/auth/login"
              class="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-md">
              Connexion
            </NuxtLink>
            <NuxtLink to="/auth/register"
              class="px-4 py-2 text-sm font-medium text-primary bg-white border border-primary hover:bg-primary hover:text-white rounded-md">
              Inscription
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header> -->

    <main class="flex-grow">
      <slot />
    </main>

    <TheFooter :class="{ 'blurred-disabled': isSoonPage }" />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { ref } from 'vue'
import { IconMenu, IconX } from '@tabler/icons-vue'

const isOpen = ref(false)

// Navigation items centralisée
const navItems = [
  { path: '/properties', label: 'Biens disponibles' },
  { path: '/about', label: 'À propos' },
  { path: '/blog', label: 'Blog' },
]

const close = () => {
  isOpen.value = false
}

const authStore = useAuthStore()

// const route = useRoute()
// const isSoonPage = computed(() => route.path === '/soon')

// Rediriger vers le layout approprié si l'utilisateur est connecté
if (authStore.isAuthenticated) {
  const layout = authStore.isProprietaire ? 'proprietaire' : 'locataire'
  definePageLayout(layout)
}
</script>

<style scoped>
/* .blurred-disabled {
  filter: blur(1px);
  pointer-events: none;
  user-select: none;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
} */

.nav-link {
  @apply text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200;
}

.mobile-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors duration-200;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.router-link-active {
  @apply text-primary font-semibold;
}
</style>
