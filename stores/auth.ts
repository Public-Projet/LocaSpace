import { defineStore } from 'pinia'

interface User {
  id: string
  email: string
  role: 'proprietaire' | 'locataire'
  name: string
}

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    isProprietaire: (state) => state.user?.role === 'proprietaire',
    isLocataire: (state) => state.user?.role === 'locataire'
  },

  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Simuler une réponse
        if (email === 'quenum@proprio.com' && password === '0000') {
          this.user = {
            id: '1',
            email,
            role: 'proprietaire',
            name: 'Propriétaire Quenum'
          }
        } else if (email === 'quenum@loca.com' && password === '0000') {
          this.user = {
            id: '2',
            email,
            role: 'locataire',
            name: 'Locataire Quenum'
          }
        } else {
          throw new Error('Email ou mot de passe incorrect')
        }
        
        // Rediriger vers le dashboard approprié
        const router = useRouter()
        router.push(this.user.role === 'proprietaire' ? '/proprietaire/dashboard' : '/locataire/dashboard')
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Une erreur est survenue'
      } finally {
        this.loading = false
      }
    },

    async register(email: string, password: string, role: 'proprietaire' | 'locataire', name: string) {
      this.loading = true
      this.error = null
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Simuler une réponse
        this.user = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          role,
          name
        }
        
        // Rediriger vers le dashboard approprié
        const router = useRouter()
        router.push(role === 'proprietaire' ? '/proprietaire/dashboard' : '/locataire/dashboard')
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Une erreur est survenue'
      } finally {
        this.loading = false
      }
    },

    async forgotPassword(email: string) {
      this.loading = true
      this.error = null
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Pour la démo, on simule toujours un succès
        return true
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Une erreur est survenue'
        throw error
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      const router = useRouter()
      router.push('/')
    }
  }
})