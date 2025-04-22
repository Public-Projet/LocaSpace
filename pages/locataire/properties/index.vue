<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Mes locations</h1>

    <!-- Statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Locations actives</h3>
        <p class="text-3xl font-bold text-primary">2</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Total mensuel</h3>
        <p class="text-3xl font-bold text-primary">230.000 FCFA</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Demandes en cours</h3>
        <p class="text-3xl font-bold text-primary">3</p>
      </div>
    </div>

    <!-- Liste des locations -->
    <div class="space-y-6">
      <div v-for="property in rentedProperties" :key="property.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-4">
                <img :src="property.image" :alt="property.title" class="w-24 h-24 object-cover rounded-lg">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">{{ property.title }}</h3>
                  <p class="text-gray-600">{{ property.address }}</p>
                  <div class="mt-2 flex items-center gap-4">
                    <span class="text-sm font-medium text-gray-600">{{ property.price }} FCFA/mois</span>
                    <span class="text-sm text-gray-500">|</span>
                    <span class="text-sm font-medium" :class="property.status === 'active' ? 'text-green-600' : 'text-orange-600'">
                      {{ property.status === 'active' ? 'Contrat actif' : 'En attente de renouvellement' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button @click="property.showDetails = !property.showDetails" class="text-primary hover:text-secondary">
                {{ property.showDetails ? 'Masquer les détails' : 'Voir les détails' }}
              </button>
            </div>
          </div>

          <!-- Détails du contrat -->
          <div v-if="property.showDetails" class="mt-6 border-t pt-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Informations du contrat -->
              <div>
                <h4 class="text-lg font-medium text-gray-900 mb-4">Informations du contrat</h4>
                <div class="space-y-3">
                  <div>
                    <span class="text-sm text-gray-500">Date de début:</span>
                    <p class="text-sm font-medium">{{ property.contract.startDate }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">Date de fin:</span>
                    <p class="text-sm font-medium">{{ property.contract.endDate }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">Durée:</span>
                    <p class="text-sm font-medium">{{ property.contract.duration }}</p>
                  </div>
                  <div>
                    <span class="text-sm text-gray-500">Prochain paiement:</span>
                    <p class="text-sm font-medium">{{ property.contract.nextPayment }}</p>
                  </div>
                </div>

                <div class="mt-6 flex gap-4">
                  <button 
                    v-if="property.status === 'renewal'"
                    @click="handleRenewal(property.id)"
                    class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
                  >
                    Renouveler le contrat
                  </button>
                  <button 
                    @click="handleTermination(property.id)"
                    class="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50"
                  >
                    Résilier le contrat
                  </button>
                </div>
              </div>

              <!-- Maintenance -->
              <div>
                <h4 class="text-lg font-medium text-gray-900 mb-4">Maintenance</h4>
                
                <!-- Formulaire de demande -->
                <form @submit.prevent="submitMaintenanceRequest(property.id)" class="mb-6">
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Type de maintenance</label>
                      <select 
                        v-model="maintenanceForm.type"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      >
                        <option value="plumbing">Plomberie</option>
                        <option value="electrical">Électricité</option>
                        <option value="carpentry">Menuiserie</option>
                        <option value="painting">Peinture</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        v-model="maintenanceForm.description"
                        rows="3"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      ></textarea>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Urgence</label>
                      <select 
                        v-model="maintenanceForm.urgency"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      >
                        <option value="low">Faible</option>
                        <option value="medium">Moyenne</option>
                        <option value="high">Haute</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
                    >
                      Soumettre la demande
                    </button>
                  </div>
                </form>

                <!-- Historique des demandes -->
                <div>
                  <h5 class="text-sm font-medium text-gray-900 mb-3">Historique des demandes</h5>
                  <div class="space-y-3">
                    <div v-for="request in property.maintenanceHistory" :key="request.id" class="bg-gray-50 p-3 rounded-md">
                      <div class="flex justify-between items-start">
                        <div>
                          <p class="text-sm font-medium">{{ request.type }}</p>
                          <p class="text-xs text-gray-500">{{ request.date }}</p>
                        </div>
                        <span :class="{
                          'bg-yellow-100 text-yellow-800': request.status === 'pending',
                          'bg-green-100 text-green-800': request.status === 'completed',
                          'bg-blue-100 text-blue-800': request.status === 'in_progress'
                        }" class="px-2 py-1 text-xs rounded-full">
                          {{ request.status === 'pending' ? 'En attente' : request.status === 'in_progress' ? 'En cours' : 'Terminé' }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">{{ request.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface MaintenanceRequest {
  id: string
  type: string
  description: string
  date: string
  status: 'pending' | 'in_progress' | 'completed'
}

interface Contract {
  startDate: string
  endDate: string
  duration: string
  nextPayment: string
}

interface RentedProperty {
  id: string
  title: string
  address: string
  price: number
  status: 'active' | 'renewal'
  image: string
  contract: Contract
  maintenanceHistory: MaintenanceRequest[]
  showDetails: boolean
}

const maintenanceForm = reactive({
  type: 'plumbing',
  description: '',
  urgency: 'medium'
})

const rentedProperties = ref<RentedProperty[]>([
  {
    id: '1',
    title: 'Appartement Cotonou Centre',
    address: 'Rue 123, Quartier Centre, Cotonou',
    price: 150000,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    showDetails: false,
    contract: {
      startDate: '01/01/2024',
      endDate: '31/12/2024',
      duration: '12 mois',
      nextPayment: '01/05/2024'
    },
    maintenanceHistory: [
      {
        id: '1',
        type: 'Plomberie',
        description: 'Fuite dans la salle de bain',
        date: '15/03/2024',
        status: 'completed'
      },
      {
        id: '2',
        type: 'Électricité',
        description: 'Prise défectueuse dans la chambre',
        date: '01/04/2024',
        status: 'in_progress'
      }
    ]
  },
  {
    id: '2',
    title: 'Studio Meublé Akpakpa',
    address: 'Rue 456, Quartier Akpakpa, Cotonou',
    price: 80000,
    status: 'renewal',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    showDetails: false,
    contract: {
      startDate: '01/05/2023',
      endDate: '30/04/2024',
      duration: '12 mois',
      nextPayment: '01/05/2024'
    },
    maintenanceHistory: [
      {
        id: '3',
        type: 'Menuiserie',
        description: 'Réparation placard cuisine',
        date: '20/03/2024',
        status: 'pending'
      }
    ]
  }
])

const handleRenewal = (propertyId: string) => {
  // Implement renewal logic
  console.log('Renewal requested for property:', propertyId)
}

const handleTermination = (propertyId: string) => {
  // Implement termination logic
  console.log('Termination requested for property:', propertyId)
}

const submitMaintenanceRequest = (propertyId: string) => {
  // Implement maintenance request submission
  console.log('Maintenance request submitted for property:', propertyId, maintenanceForm)
  
  // Reset form
  maintenanceForm.description = ''
  maintenanceForm.type = 'plumbing'
  maintenanceForm.urgency = 'medium'
}
</script>