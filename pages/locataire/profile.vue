<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Mon Profil</h1>

    <div class="bg-white rounded-lg shadow-md">
      <!-- En-tête du profil -->
      <div class="p-6 border-b">
        <div class="flex items-center gap-6">
          <div class="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl">
            {{ user?.name[0] }}
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">{{ user?.name }}</h2>
            <p class="text-gray-600">{{ user?.email }}</p>
            <p class="text-sm text-primary mt-1">Locataire depuis janvier 2024</p>
          </div>
        </div>
      </div>

      <!-- Informations personnelles -->
      <div class="p-6 border-b">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
        <form @submit.prevent="updateProfile" class="space-y-4 max-w-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input 
                type="text" 
                v-model="profileData.name"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                v-model="profileData.email"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input 
                type="tel" 
                v-model="profileData.phone"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
              <input 
                type="date" 
                v-model="profileData.birthdate"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              >
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
            <textarea 
              v-model="profileData.address"
              rows="3"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button 
              type="submit"
              class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>

      <!-- Documents -->
      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 border rounded-lg">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-gray-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Carte d'identité</p>
                <p class="text-sm text-gray-600">PDF • Ajouté le 15/01/2024</p>
              </div>
            </div>
            <button class="text-primary hover:text-secondary">
              Télécharger
            </button>
          </div>

          <div class="flex items-center justify-between p-4 border rounded-lg">
            <div class="flex items-center gap-4">
              <div class="p-2 bg-gray-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Justificatif de domicile</p>
                <p class="text-sm text-gray-600">PDF • Ajouté le 15/01/2024</p>
              </div>
            </div>
            <button class="text-primary hover:text-secondary">
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

const store = useAuthStore()
const { user } = storeToRefs(store)

const profileData = ref({
  name: user.value?.name || '',
  email: user.value?.email || '',
  phone: '',
  birthdate: '',
  address: ''
})

const updateProfile = () => {
  // Implement profile update logic here
  console.log('Profile updated:', profileData.value)
}
</script>