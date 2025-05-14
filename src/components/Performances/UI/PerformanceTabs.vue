<script setup>
import { ref } from 'vue';

// Define props for any data you need to pass in
const props = defineProps({
  initialTab: {
    type: String,
    default: 'upcoming'
  }
});

// State to track active tab
const activeTab = ref(props.initialTab);
</script>

<template>
  <div class="performance-tabs">
    <!-- Tab buttons -->
    <div class="tab-buttons-container">
      <div class="tab-buttons">
        <button 
          @click="activeTab = 'upcoming'" 
          :class="{ active: activeTab === 'upcoming' }"
          class="tab-button"
        >
          Upcoming
        </button>
        <button 
          @click="activeTab = 'past'" 
          :class="{ active: activeTab === 'past' }"
          class="tab-button"
        >
          Past
        </button>
      </div>
    </div>
    
    <!-- Tab content -->
    <div class="tab-content">
      <div v-if="activeTab === 'upcoming'" class="tab-panel">
        <slot name="upcoming"></slot>
      </div>
      
      <div v-if="activeTab === 'past'" class="tab-panel">
        <slot name="past"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.performance-tabs {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.tab-buttons-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.tab-buttons {
  display: inline-flex;
  border-bottom: 2px solid var(--color-primary-200, #a7f3d0);
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 500;
  position: relative;
  transition: all 0.2s ease;
}

.tab-button.active {
  font-weight: bold;
  color: var(--color-primary-500, #10b981);
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary-500, #10b981);
}

.tab-panel {
  padding: 10px 0;
}

@media (max-width: 640px) {
  .tab-buttons {
    width: 100%;
  }
  
  .tab-button {
    flex: 1;
    text-align: center;
  }
}
</style> 