<template>
  <div id="app">
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import Title from '@/components/Title.vue';
import VuesualComponent from '@/typings/structure';
import { toElementsArray } from '@/services/structureConverter';

export default Vue.extend({
  name: 'app',
  data() {
    return {
      structure: require('@/assets/structure.json') as VuesualComponent[],
    };
  },
  computed: {
    elements(): string[] {
      return toElementsArray(this.structure);
    },
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
