<template>
  <div class="min-h-screen bg-white flex flex-col justify-center items-center relative overflow-hidden">
    <!-- Fond -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div
        class="absolute inset-0 opacity-20"
        style="background-image: url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(79, 70, 229, 0.1)\'/%3E%3C/svg%3E')"
      ></div>
    </div>

    <!-- Spinner -->
    <div class="mb-6">
      <div class="spinner-custom h-16 w-16 border-4 border-transparent border-t-primary rounded-full animate-spin-with-color"></div>
    </div>

    <!-- Contenu -->
    <div class="relative z-10 text-center px-6">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
        <span class="text-primary">LocaSpace</span> arrive bientôt
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Une nouvelle manière de gérer vos biens immobiliers et vos locations au
        <span class="text-primary font-semibold">Bénin</span>. Simple, sécurisée et 100% en ligne.
      </p>

      <div class="flex justify-center gap-4">
        <a
          href="https://wa.me/22950940718"
          class="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Contactez-nous
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulseColor {
  0%, 100% {
    border-top-color: theme('colors.primary');
  }
  50% {
    border-top-color: theme('colors.secondary');
  }
}

.spinner-custom {
  animation: spin 1s linear infinite, pulseColor 2s linear infinite;
}
</style>
