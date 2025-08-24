<!-- Vue kullanım örneği -->
<template>
  <div style="padding: 20px; font-family: Arial, sans-serif">
    <h1>Vue Components Test</h1>
    
    <section style="margin-bottom: 20px">
      <h2>HelloWorld Component</h2>
      <hello-world />
    </section>

    <section>
      <h2>Button Component</h2>
      <div style="display: flex; gap: 10px; flex-wrap: wrap">
        <comp-button 
          variant="primary" 
          size="small"
          @buttonClick="handleButtonClick"
        >
          Primary Small
        </comp-button>
        
        <comp-button 
          variant="secondary" 
          size="medium"
          @buttonClick="handleButtonClick"
        >
          Secondary Medium
        </comp-button>
        
        <comp-button 
          variant="danger" 
          size="large"
          @buttonClick="handleButtonClick"
        >
          Danger Large
        </comp-button>
        
        <comp-button 
          variant="primary" 
          :disabled="true"
          @buttonClick="handleButtonClick"
        >
          Disabled
        </comp-button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const handleButtonClick = (event: CustomEvent<MouseEvent>) => {
  console.log('Button clicked!', event.detail);
  alert('Button clicked!');
};
</script>

<style scoped>
/* Component-specific styles */
</style>
