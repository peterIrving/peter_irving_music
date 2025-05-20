<script setup>
import { ref } from 'vue';

// Define props for any data you need to pass in
const props = defineProps({
  initialTab: {
    type: String,
    default: ''
  },
  tabs: {
    type: Array,
    required: true
  }
});

// State to track active tab
const activeTab = ref(props.initialTab || props.tabs[0]?.id);
</script>

<template>
  <div class="tab-container">
    <!-- Tab buttons -->
    <div class="tab-buttons-container">
      <div class="tab-buttons">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id" 
          :class="{ active: activeTab === tab.id }"
          class="tab-button"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    
    <!-- Tab content -->
    <div class="tab-content">
      <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="tab-panel">
        <slot :name="tab.id"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-container {
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
  width: 100%;
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
    flex-wrap: wrap;
  }
  
  .tab-button {
    flex: 1;
    text-align: center;
    padding: 10px 8px;
    font-size: 0.95rem;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  /* For very small screens, stack the tabs vertically */
  @media (max-width: 380px) {
    .tab-buttons {
      flex-direction: column;
      border-bottom: none;
    }
    
    .tab-button {
      border-bottom: 1px solid var(--color-primary-200, #a7f3d0);
      text-align: left;
      padding: 12px 16px;
    }
    
    .tab-button:last-child {
      border-bottom: 2px solid var(--color-primary-200, #a7f3d0);
    }
    
    .tab-button.active::after {
      width: 4px;
      height: 100%;
      top: 0;
      left: 0;
      bottom: auto;
    }
  }
}
</style> 