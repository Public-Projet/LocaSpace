<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>

    <div class="bg-white rounded-lg shadow-md">
      <!-- Filtres -->
      <div class="p-4 border-b">
        <div class="flex space-x-4">
          <button class="px-3 py-2 text-sm font-medium bg-primary text-white rounded-md">
            Toutes
          </button>
          <button class="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-primary/20 rounded-md">
            Non lues
          </button>
          <button class="px-3 py-2 text-sm font-medium text-gray-600 hover:bg-primary/20 rounded-md">
            Importantes
          </button>
        </div>
      </div>

      <!-- Liste des notifications -->
      <div class="divide-y divide-gray-200">
        <div class="p-4 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <div class="ml-4 flex-1">
              <p class="text-sm font-medium text-gray-900">Nouveau paiement reçu</p>
              <p class="mt-1 text-sm text-gray-500">Le paiement de 150.000 FCFA pour l'Appartement Cotonou Centre a été reçu.</p>
              <p class="mt-2 text-xs text-gray-400">Il y a 2 heures</p>
            </div>
          </div>
        </div>

        <div class="p-4 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <div class="ml-4 flex-1">
              <p class="text-sm font-medium text-gray-900">Nouvelle demande de visite</p>
              <p class="mt-1 text-sm text-gray-500">Un locataire potentiel souhaite visiter la Villa Calavi.</p>
              <p class="mt-2 text-xs text-gray-400">Il y a 5 heures</p>
            </div>
          </div>
        </div>

        <div class="p-4 hover:bg-gray-50 cursor-pointer bg-gray-50">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
            <div class="ml-4 flex-1">
              <p class="text-sm font-medium text-gray-900">Contrat signé</p>
              <p class="mt-1 text-sm text-gray-500">Le contrat pour le Studio Meublé Akpakpa a été signé par le locataire.</p>
              <p class="mt-2 text-xs text-gray-400">Hier</p>
            </div>
          </div>
        </div>

        <div class="p-4 hover:bg-gray-50 cursor-pointer bg-gray-50">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
            <div class="ml-4 flex-1">
              <p class="text-sm font-medium text-gray-900">Rappel de maintenance</p>
              <p class="mt-1 text-sm text-gray-500">La maintenance annuelle de la climatisation est prévue pour la semaine prochaine.</p>
              <p class="mt-2 text-xs text-gray-400">Il y a 2 jours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>