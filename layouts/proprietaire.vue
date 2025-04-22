<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-md">
      <div class="flex flex-col h-16 items-center justify-center border-b">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">LocaSpace</NuxtLink>
        <span class="text-xs bg-primary/10 px-2 rounded">Espace Propritaire</span>
      </div>
      <nav class="mt-6">
        <div class="px-4 space-y-2">
          <NuxtLink to="/proprietaire/dashboard"
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
            :class="$route.path.startsWith('/proprietaire/dashboard') ? 'bg-primary/20 text-primary' : ''">
            <span>Tableau de bord</span>
          </NuxtLink>
          <NuxtLink to="/proprietaire/properties"
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
            :class="$route.path.startsWith('/proprietaire/properties') ? 'bg-primary/20 text-primary' : ''">
            <span>Mes biens</span>
          </NuxtLink>
          <NuxtLink to="/proprietaire/messages"
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md"
            :class="$route.path.startsWith('/proprietaire/messages') ? 'bg-primary/20 text-primary' : ''">
            <span>Messages</span>
          </NuxtLink>
        </div>
      </nav>
    </div>

    <!-- Main -->
    <div class="flex-1">
      <!-- Navigation -->
      <div class="bg-white shadow">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-end">
            <div class="flex items-center space-x-4">
              <button @click="$router.push('/proprietaire/notifications')"
                class="relative p-1 text-gray-400 transform transition duration-200 hover:scale-110 hover:rotate-6">
                <span
                  class="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  3
                </span>
                <span>🔔</span>
              </button>

              <div class="relative">
                <button @click="showProfileMenu = !showProfileMenu"
                  class="flex items-center space-x-3 focus:outline-none">
                  <div class="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                    {{ user?.name[0] }}
                  </div>
                  <span class="text-sm font-medium text-gray-700">{{ user?.name }}</span>
                </button>
                <div v-if="showProfileMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mon profil</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>
                  <button @click="handleLogout"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Déconnexion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="py-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

const showProfileMenu = ref(false)
const store = useAuthStore()
const { user } = storeToRefs(store)

const handleLogout = () => {
  store.logout()
}
</script>