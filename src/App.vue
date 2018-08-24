<template>
  <div id="app">
    <render-component :structure="structure"></render-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RenderComponent from '@/render/RenderComponent.vue';
import VuesualComponent from '@/typings/structure';

export default Vue.extend({
  name: 'app',
  data() {
    return {
      structure: require('@/assets/structure.json') as VuesualComponent[],
    };
  },
  components: {
    RenderComponent,
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
