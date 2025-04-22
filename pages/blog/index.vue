<template>
  <div class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blog LocaSpace
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          Découvrez nos derniers articles sur l'immobilier au Bénin
        </p>
      </div>

      <!-- Featured Post -->
      <div class="mt-16">
        <div class="relative overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" alt="Featured post" class="w-full h-96 object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div class="absolute bottom-0 p-8">
            <div class="flex items-center gap-2 text-white/80 text-sm mb-2">
              <span>Immobilier</span>
              <span>•</span>
              <span>5 min de lecture</span>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">Les tendances du marché immobilier à Cotonou en 2024</h2>
            <p class="text-white/90">Découvrez les dernières tendances du marché immobilier à Cotonou et les opportunités à saisir.</p>
            <NuxtLink to="/blog/tendances-marche-immobilier-cotonou-2024" class="inline-block mt-4 text-white hover:text-secondary">
              Lire l'article →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Recent Posts Grid -->
      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="post in recentPosts" :key="post.id" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <img :src="post.image" :alt="post.title" class="h-48 w-full object-cover">
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <span>{{ post.category }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
              <NuxtLink :to="post.href" class="mt-2 block">
                <h3 class="text-xl font-semibold text-gray-900">{{ post.title }}</h3>
                <p class="mt-3 text-base text-gray-500">{{ post.excerpt }}</p>
              </NuxtLink>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img :src="post.author.image" :alt="post.author.name" class="h-10 w-10 rounded-full">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ post.author.name }}</p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">{{ post.date }}</time>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Categories -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Catégories</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink v-for="category in categories" :key="category.name" 
            :to="category.href"
            class="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-75"></div>
            <div class="relative p-6">
              <h3 class="text-lg font-semibold text-white">{{ category.name }}</h3>
              <p class="mt-2 text-sm text-white/80">{{ category.count }} articles</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const recentPosts = [
  {
    id: 1,
    title: "Guide complet de l'investissement locatif au Bénin",
    href: "/blog/guide-investissement-locatif",
    category: "Investissement",
    readTime: "8 min de lecture",
    excerpt: "Tout ce que vous devez savoir pour réussir votre investissement locatif au Bénin.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
    datetime: "2025-02-15",
    date: "15 Fév 2025",
    author: {
      name: "Elisée ATONDE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlOSE3fFjzRzq3CK5ruR_THF0gnjp2Z5MSw&s"
    }
  },
  {
    id: 2,
    title: "Les quartiers en vogue à Cotonou",
    href: "/blog/quartiers-vogue-cotonou",
    category: "Tendances",
    readTime: "6 min de lecture",
    excerpt: "Découvrez les quartiers les plus prisés de Cotonou pour votre prochain investissement.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    datetime: "2025-02-10",
    date: "10 Fév 2025",
    author: {
      name: "Richard QUENUM",
      image: "https://api.dicebear.com/9.x/initials/svg?seed=Richard+Quenum"
    }
  },
  {
    id: 3,
    title: "Comment bien gérer sa location",
    href: "/blog/bien-gerer-location",
    category: "Conseils",
    readTime: "5 min de lecture",
    excerpt: "Les meilleures pratiques pour une gestion locative efficace et sereine.",
    image: "https://www.logerchic.com/templates/yootheme/cache/53/calculelo-5397fa24.jpeg",
    datetime: "2025-02-05",
    date: "5 Fév 2025",
    author: {
      name: "Delluc D. HOUNMENOU",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmGaOSVJ95JDiBeWCqQ77K32NhojCxLFXrA&s"
    }
  }
]

const categories = [
  { name: 'Investissement', count: 12, href: '/blog/category/investissement' },
  { name: 'Conseils', count: 8, href: '/blog/category/conseils' },
  { name: 'Tendances', count: 6, href: '/blog/category/tendances' },
  { name: 'Actualités', count: 4, href: '/blog/category/actualites' }
]
</script>