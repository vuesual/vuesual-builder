<template>
  <div id="app">
    <component v-for="(element, index) in elements"
               :is="element"
               :key=index
               :name="elementNames[index]"></component>
  </div>
</template>

<script lang="ts">
import Vue, { Component } from 'vue';
import Button from '@/components/Button.vue';
import Title from '@/components/Title.vue';
import VuesualComponent from '@/typings/structure';
import {
  toElementComponent,
  ImportComponentFunction,
} from '@/services/structureConverter';

export default Vue.extend({
  name: 'app',
  data() {
    return {
      structure: require('@/assets/structure.json') as VuesualComponent[],
    };
  },
  computed: {
    elementNames(): string[] {
      return this.structure.map(item => Object.keys(item)[0]);
    },
    elements(): ImportComponentFunction[] {
      return this.structure.map(item => toElementComponent(item));
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
