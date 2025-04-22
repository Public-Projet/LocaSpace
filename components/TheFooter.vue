<template>
  <footer class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase">À propos</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="/about" class="text-base text-gray-200 hover:text-gray-500">
                Qui sommes-nous
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                Carrières
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="blog" class="text-base text-gray-200 hover:text-gray-500">
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                Centre d'aide
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                FAQ
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase">Légal</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="/legal" class="text-base text-gray-200 hover:text-gray-500">
                Mentions légales
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/legal#rgpd" class="text-base text-gray-200 hover:text-gray-500">
                Protection des données
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/legal#cgu" class="text-base text-gray-200 hover:text-gray-500">
                CGU
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase">Suivez-nous</h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                Facebook
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                Twitter
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-base text-gray-200 hover:text-gray-500">
                LinkedIn
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-8">
        <p class="text-center text-sm text-gray-200">
         &copy; {{ new Date().getFullYear() }} LocaSpace. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>
