<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Tableau de bord</h1>
    
    <!-- Statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Biens en location</h3>
        <p class="text-3xl font-bold text-primary">12</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Revenus mensuels</h3>
        <p class="text-3xl font-bold text-primary">850.000 FCFA</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Taux d'occupation</h3>
        <p class="text-3xl font-bold text-primary">92%</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Demandes en attente</h3>
        <p class="text-3xl font-bold text-primary">5</p>
      </div>
    </div>

    <!-- Actions rapides -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Actions rapides</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary">
          Ajouter un bien
        </button>
        <button class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary">
          Gérer les paiements
        </button>
        <button class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary">
          Voir les demandes
        </button>
      </div>
    </div>

    <!-- Dernières activités -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Dernières activités</h2>
      <div class="space-y-4">
        <div class="flex items-center justify-between py-3 border-b">
          <div>
            <p class="text-sm font-medium text-gray-900">Nouveau paiement reçu</p>
            <p class="text-sm text-gray-500">Appartement Cotonou Centre</p>
          </div>
          <span class="text-sm text-gray-500">Il y a 2 heures</span>
        </div>
        <div class="flex items-center justify-between py-3 border-b">
          <div>
            <p class="text-sm font-medium text-gray-900">Nouvelle demande de visite</p>
            <p class="text-sm text-gray-500">Villa Calavi</p>
          </div>
          <span class="text-sm text-gray-500">Il y a 5 heures</span>
        </div>
        <div class="flex items-center justify-between py-3">
          <div>
            <p class="text-sm font-medium text-gray-900">Contrat signé</p>
            <p class="text-sm text-gray-500">Studio Meublé Akpakpa</p>
          </div>
          <span class="text-sm text-gray-500">Hier</span>
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

// Rediriger si l'utilisateur n'est pas propriétaire
onMounted(() => {
  const router = useRouter()
  if (!user.value || user.value.role !== 'proprietaire') {
    router.push('/auth/login')
  }
})
</script>