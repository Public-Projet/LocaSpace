<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Tableau de bord</h1>
    
    <!-- Statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Locations actives</h3>
        <p class="text-3xl font-bold text-primary">2</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Paiements en attente</h3>
        <p class="text-3xl font-bold text-primary">1</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Messages non lus</h3>
        <p class="text-3xl font-bold text-primary">3</p>
      </div>
    </div>

    <!-- Mes locations -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Mes locations</h2>
      <div class="space-y-4">
        <div class="border rounded-lg p-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Appartement Cotonou Centre</h3>
              <p class="text-sm text-gray-500">2 chambres, salon, cuisine équipée</p>
              <p class="text-sm font-medium text-primary mt-2">150.000 FCFA/mois</p>
            </div>
            <button class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
              Voir détails
            </button>
          </div>
        </div>
        <div class="border rounded-lg p-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Studio Meublé Akpakpa</h3>
              <p class="text-sm text-gray-500">Studio tout confort avec balcon</p>
              <p class="text-sm font-medium text-primary mt-2">80.000 FCFA/mois</p>
            </div>
            <button class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
              Voir détails
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Derniers paiements -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Derniers paiements</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between py-3 border-b">
          <div>
            <p class="text-sm font-medium text-gray-900">Loyer Appartement Cotonou Centre</p>
            <p class="text-sm text-gray-500">Janvier 2024</p>
          </div>
          <span class="text-sm font-medium text-green-600">150.000 FCFA</span>
        </div>
        <div class="flex items-center justify-between py-3 border-b">
          <div>
            <p class="text-sm font-medium text-gray-900">Loyer Studio Meublé Akpakpa</p>
            <p class="text-sm text-gray-500">Janvier 2024</p>
          </div>
          <span class="text-sm font-medium text-green-600">80.000 FCFA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">  
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

const store = useAuthStore()
const { user } = storeToRefs(store)

// Rediriger si l'utilisateur n'est pas locataire
onMounted(() => {
  const router = useRouter()
  if (!user.value || user.value.role !== 'locataire') {
    router.push('/auth/login')
  }
})
</script>