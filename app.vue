<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <NuxtLayout>
    
    <main class="flex-grow">
      <ClientOnly>
        <NuxtPage />
      </ClientOnly>
    </main>
      
    </NuxtLayout>
  </div>
</template>

<script setup>
const router = useRouter()

</script>

