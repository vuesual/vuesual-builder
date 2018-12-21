<template>
  <div>
    <button>{{ config }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Button',
  props: {
    childStructure: {
      type: Object
    },
    config: {
      type: Object
    }
  }
});
</script>

<style scoped>
</style>