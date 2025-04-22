import { defineStore } from 'pinia'

interface Property {
  id: string
  title: string
  type: string
  price: number
  location: string
  surface: number
  rooms: number
  description: string
  features: string[]
  images: string[]
  available: boolean
}

export const usePropertiesStore = defineStore('properties', {
  state: () => ({
    properties: [] as Property[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getPropertyById: (state) => (id: string) => {
      return state.properties.find(property => property.id === id)
    },
    availableProperties: (state) => {
      return state.properties.filter(property => property.available)
    }
  },

  actions: {
    async fetchProperties() {
      this.loading = true
      this.error = null
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.properties = [
          {
            id: '1',
            title: 'Villa moderne à Calavi',
            type: 'Villa',
            price: 250000,
            location: 'Calavi',
            surface: 200,
            rooms: 4,
            description: 'Magnifique villa moderne avec piscine',
            features: ['Piscine', 'Jardin', 'Garage', 'Sécurité 24/7'],
            images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6'],
            available: true
          },
          {
            id: '2',
            title: 'Appartement au centre de Cotonou',
            type: 'Appartement',
            price: 150000,
            location: 'Cotonou Centre',
            surface: 120,
            rooms: 3,
            description: 'Bel appartement rénové au cœur de Cotonou',
            features: ['Climatisation', 'Parking', 'Ascenseur'],
            images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'],
            available: true
          }
        ]
      } catch (error) {
        this.error = 'Erreur lors du chargement des propriétés'
      } finally {
        this.loading = false
      }
    }
  }
})