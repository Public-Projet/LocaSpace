<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Réinitialisation du mot de passe
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Entrez votre adresse email pour recevoir un lien de réinitialisation
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50"
            >
              <span v-if="loading">Envoi en cours...</span>
              <span v-else>Envoyer le lien</span>
            </button>
          </div>
        </form>

        <div v-if="error" class="mt-4 text-sm text-red-600">
          {{ error }}
        </div>

        <div v-if="success" class="mt-4 text-sm text-green-600">
          {{ success }}
        </div>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>

          <div class="mt-6 text-center">
            <NuxtLink
              to="/auth/login"
              class="font-medium text-primary hover:text-secondary"
            >
              Retour à la connexion
            </NuxtLink>
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

const email = ref('')
const success = ref('')
const store = useAuthStore()
const { loading, error } = storeToRefs(store)

const handleSubmit = async () => {
  try {
    // Reset messages
    success.value = ''
    
    // Call the reset password function from the store
    await store.forgotPassword(email.value)
    
    // Show success message
    success.value = 'Un email de réinitialisation vous a été envoyé.'
    
    // Clear the form
    email.value = ''
  } catch (err) {
    console.error('Error during password reset:', err)
  }
}
</script>