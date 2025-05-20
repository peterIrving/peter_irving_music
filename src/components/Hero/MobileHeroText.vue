<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const opacity = ref(1);
const isVisible = ref(true);

function handleScroll() {
  // Get the current scroll position
  const scrollY = window.scrollY;
  
  // Use the same threshold as the navbar (50px)
  if (scrollY > 0) {
    // Create a smooth curve effect using a cubic function
    // This will start very gradually and accelerate
    const fadeProgress = Math.min(1, (scrollY / 50) ** 1.5);
    opacity.value = Math.max(0, 1 - fadeProgress);
    
    // When nearly transparent, hide it completely
    isVisible.value = opacity.value > 0.05;
  } else {
    // Reset to fully visible when at the top
    opacity.value = 1;
    isVisible.value = true;
  }
}

onMounted(() => {
  console.log('MobileHeroText component mounted');
  window.addEventListener('scroll', handleScroll, { passive: true });
  // Force an initial check
  handleScroll();
});

onUnmounted(() => {
  console.log('MobileHeroText component unmounted');
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div 
    v-if="isVisible" 
    class="my-auto ml-auto max-w-[800px] flex-col pl-6 text-[#1E1E1E] md:hidden"
    :style="{ opacity: opacity, transition: 'opacity 0.3s ease-out' }"
  >
    <h1
      class="font-heading-1 text-3xl font-semibold text-pretty md:text-5xl md:leading-tight"
      style="text-shadow: 0 0 5px #ffffff93, 0 0 10px #ffffff4a;"
    >
      Peter Irving
    </h1>
    <p
      class="mt-2 text-2xl tracking-widest text-pretty md:ml-auto md:max-w-[550px] md:text-3xl"
      style="text-shadow: 0 0 5px #ffffff44, 0 0 10px #ffffff43;"
    >
      Acoustic Dance Music
    </p>
  </div>
</template>