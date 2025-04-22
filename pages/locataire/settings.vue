<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Paramètres</h1>

    <div class="bg-white rounded-lg shadow-md">
      <!-- Préférences de notification -->
      <div class="p-6 border-b">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Préférences de notification</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-gray-900">Notifications par email</p>
              <p class="text-sm text-gray-600">Recevoir des notifications par email</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.emailNotifications" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-gray-900">Notifications SMS</p>
              <p class="text-sm text-gray-600">Recevoir des notifications par SMS</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.smsNotifications" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      <!-- Sécurité -->
      <div class="p-6 border-b">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Sécurité</h3>
        <form @submit.prevent="updatePassword" class="space-y-4 max-w-2xl">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
            <input 
              type="password" 
              v-model="passwordData.current"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
            <input 
              type="password" 
              v-model="passwordData.new"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirmer le nouveau mot de passe</label>
            <input 
              type="password" 
              v-model="passwordData.confirm"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
            >
          </div>
          <div class="flex justify-end">
            <button 
              type="submit"
              class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
            >
              Mettre à jour le mot de passe
            </button>
          </div>
        </form>
      </div>

      <!-- Langue et région -->
      <div class="p-6 border-b">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Langue et région</h3>
        <div class="max-w-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Langue</label>
              <select 
                v-model="settings.language"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Fuseau horaire</label>
              <select 
                v-model="settings.timezone"
                class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              >
                <option value="UTC+1">UTC+1 (Cotonou)</option>
                <option value="UTC">UTC (Londres)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Suppression du compte -->
      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Suppression du compte</h3>
        <p class="text-gray-600 mb-4">
          La suppression de votre compte est définitive et irréversible. Toutes vos données seront supprimées.
        </p>
        <button 
          @click="confirmDeleteAccount"
          class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Supprimer mon compte
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const settings = ref({
  emailNotifications: true,
  smsNotifications: false,
  language: 'fr',
  timezone: 'UTC+1'
})

const passwordData = ref({
  current: '',
  new: '',
  confirm: ''
})

const updatePassword = () => {
  console.log('Password update:', passwordData.value)
}

const confirmDeleteAccount = () => {
  console.log('Account deletion requested')
}
</script>