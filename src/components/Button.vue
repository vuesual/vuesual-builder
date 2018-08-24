<template>
  <div>
    <button>Test button</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Button',
  props: ['structure'],
});
</script>

<style scoped>
</style>