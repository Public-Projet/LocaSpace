<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Mes biens</h1>
      <div class="flex space-x-4">
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
          Filtres
        </button>
        <button class="px-4 py-2 bg-primary border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-secondary">
          Ajouter un bien
        </button>
      </div>
    </div>

    <!-- Filtres -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
          <select class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary/80 focus:ring-primary/80">
            <option>Tous</option>
            <option>Appartement</option>
            <option>Villa</option>
            <option>Maison</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
          <select class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary/80 focus:ring-primary/80">
            <option>Toutes</option>
            <option>Cotonou</option>
            <option>Calavi</option>
            <option>Porto-Novo</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Budget max</label>
          <input type="number" class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary/80 focus:ring-primary/80" placeholder="Prix maximum">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Surface min</label>
          <input type="number" class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary/80 focus:ring-primary/80" placeholder="Surface minimum">
        </div>
      </div>
    </div>

    <!-- Liste des propriétés -->
    <div v-if="loading" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border- mx-auto"></div>
      <p class="mt-4 text-gray-600">Chargement des biens...</p>
    </div>

    <div v-else-if="error" class="bg-red-50 p-4 rounded-md">
      <p class="text-red-700">{{ error }}</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="property in properties" :key="property.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="property.images[0]" :alt="property.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ property.title }}</h3>
          <p class="text-gray-600 mb-4">{{ property.description }}</p>
          <div class="flex justify-between items-center mb-4">
            <span class="text-2xl font-bold text-">{{ property.price.toLocaleString() }} FCFA</span>
            <span class="text-sm text-gray-500">{{ property.surface }}m²</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="feature in property.features" :key="feature" class="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
              {{ feature }}
            </span>
          </div>
          <div class="flex space-x-4">
            <button class="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
              Voir détails
            </button>
            <button class="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
              Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePropertiesStore } from '~/stores/properties'

const store = usePropertiesStore()
const { properties, loading, error } = storeToRefs(store)

onMounted(async () => {
  await store.fetchProperties()
})
</script>