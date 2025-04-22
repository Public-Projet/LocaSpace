<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Messages</h1>

    <div class="bg-white rounded-lg shadow-md flex h-[600px]">
      <!-- Liste des conversations -->
      <div class="w-1/3 border-r">
        <div class="p-4 border-b">
          <input type="text" placeholder="Rechercher une conversation..." class="w-full px-3 py-2 border rounded-md">
        </div>
        <div class="overflow-y-auto h-[calc(100%-73px)]">
          <div class="p-4 hover:bg-gray-50 cursor-pointer border-b">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
              <div class="ml-4 flex-1">
                <p class="text-sm font-medium text-gray-900">Elisée ATONDE</p>
                <p class="text-sm text-gray-500 truncate">Bonjour, Votre contrat vous sera envoyé par...</p>
              </div>
              <div class="ml-2">
                <span class="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-primary rounded-full">1</span>
              </div>
            </div>
          </div>

          <div class="p-4 hover:bg-gray-50 cursor-pointer border-b">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
              </div>
              <div class="ml-4 flex-1">
                <p class="text-sm font-medium text-gray-900">Christelle AKIOLA</p>
                <p class="text-sm text-gray-500 truncate">J'enverrai le peintre pour vous chnager le dé...</p>
              </div>
              <div class="ml-2">
                <span class="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-primary rounded-full">2</span>
              </div>
            </div>
          </div>
          <!-- Autres conversations... -->
        </div>
      </div>

      <!-- Zone de chat -->
      <div class="flex-1 flex flex-col">
        <div class="p-4 border-b">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-900">Elisée ATONDE</p>
              <p class="text-xs text-gray-500">En ligne</p>
            </div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          <div class="flex justify-end">
            <div class="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">
              <p class="text-sm">Bonjour, Votre contrat vous sera envoyé par mon agence bientôt...</p>
            </div>
          </div>
          <div class="flex justify-start">
            <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
              <p class="text-sm">D'accord, Merci bien.</p>
            </div>
          </div>
          <div class="flex justify-start">
            <div class="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
              <p class="text-sm">...</p>
            </div>
          </div>
        </div>

        <div class="p-4 border-t">
          <div class="flex space-x-4">
            <input type="text" placeholder="Écrivez votre message..." class="flex-1 px-3 py-2 border rounded-md">
            <button class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>