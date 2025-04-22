<template>
  <div>
    <!-- Hero Section avec background -->
    <div class="relative bg-white">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div
          class="absolute inset-0"
          style="background-image: url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(79, 70, 229, 0.1)\'/%3E%3C/svg%3E')"
        ></div>
      </div>

      <div class="relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Trouvez votre location idéale au
              <span class="text-primary">Bénin</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              LocaSpace simplifie la gestion locative pour les propriétaires et les locataires. 
              Une solution complète pour trouver, gérer et sécuriser vos locations.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <NuxtLink
                to="/properties"
                class="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Découvrir les biens
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
              >
                En savoir plus <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi choisir LocaSpace ?
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            Une solution complète pour la gestion locative au Bénin
          </p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ feature.title }}</h3>
            <ul class="space-y-3 text-gray-600">
              <li
                v-for="(item, i) in feature.items"
                :key="i"
                class="flex items-center gap-2"
              >
                <IconCircleCheckFilled class="w-5 h-5 text-primary" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Comment ça marche ? -->
    <div class="bg-gray-50 py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
          Comment ça marche ?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="text-center"
          >
            <div class="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary">{{ step.number }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
          Questions Fréquentes
        </h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <Disclosure
            v-for="(faq, index) in faqs"
            :key="index"
            v-slot="{ open }"
            as="div"
            class="bg-white rounded-xl border border-gray-200"
          >
            <DisclosureButton class="flex w-full justify-between rounded-lg px-4 py-4 text-left">
              <span class="text-lg font-semibold text-gray-900">{{ faq.question }}</span>
              <IconChevronDown
                :class="open ? 'rotate-180 transform' : ''"
                class="h-5 w-5 text-primary"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pb-4 pt-1 text-gray-600">
              {{ faq.answer }}
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-primary py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à simplifier votre gestion locative ?
          </h2>
          <p class="mt-4 text-lg text-gray-100">
            Rejoignez LocaSpace aujourd'hui et découvrez une nouvelle façon de gérer vos locations.
          </p>
          <div class="mt-8">
            <NuxtLink
              to="/auth/register"
              class="rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-200"
            >
              Commencer maintenant
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { IconCircleCheckFilled, IconChevronDown } from '@tabler/icons-vue'

const features = [
  {
    title: "Pour les propriétaires",
    items: [
      "Gestion simplifiée des biens",
      "Suivi des paiements en temps réel",
      "Publication d'annonces avec photos",
      "Gestion des contrats numériques"
    ]
  },
  {
    title: "Pour les locataires",
    items: [
      "Recherche avancée de biens",
      "Paiements sécurisés",
      "Communication directe",
      "Historique des transactions"
    ]
  },
  {
    title: "Sécurité & Confiance",
    items: [
      "Vérification des profils",
      "Protection des données",
      "Support client 24/7",
      "Avis vérifiés"
    ]
  }
]

const steps = [
  {
    number: "1",
    title: "Inscription gratuite",
    description: "Créez votre compte en quelques clics et commencez à utiliser nos services"
  },
  {
    number: "2",
    title: "Publiez ou recherchez",
    description: "Ajoutez vos biens ou trouvez votre location idéale"
  },
  {
    number: "3",
    title: "Gérez en toute simplicité",
    description: "Profitez de nos outils pour une gestion locative sans stress"
  }
]

const faqs = [
  {
    question: "Comment puis-je m'inscrire sur LocaSpace ?",
    answer: "L'inscription est simple et gratuite. Cliquez sur \"S'inscrire\" en haut de la page et suivez les étapes. Vous pourrez choisir entre un compte propriétaire ou locataire."
  },
  {
    question: "Quels sont les frais pour utiliser LocaSpace ?",
    answer: "L'inscription et la recherche sont gratuites. Des frais de service s'appliquent uniquement lors de la conclusion d'un contrat de location."
  },
  {
    question: "Comment sont sécurisés les paiements ?",
    answer: "Nous utilisons des systèmes de paiement sécurisés et reconnus. Les transactions sont protégées et tracées pour garantir la sécurité de tous les utilisateurs."
  },
  {
    question: "Que faire en cas de litige ?",
    answer: "Notre service client est disponible 24/7 pour vous accompagner. Nous avons également une procédure de médiation pour résoudre les conflits entre propriétaires et locataires."
  }
]
</script>
