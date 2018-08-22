<template>
  <div>
    <component v-for="(element, index) in elements"
               :is="element"
               :key="elementNames[index]"
               :name="elementNames[index]"
               :structure="elementChildren[index]"
               ></component>
  </div>
</template>

<script lang="ts">
import Vue, { Component } from 'vue';
import VuesualComponent from '@/typings/structure';
import {
  toElementComponent,
  ImportComponentFunction,
} from '@/services/structureConverter';

export default Vue.extend({
  name: 'render-component',
  props: {
    structure: {
      required: true,
      type: Array
    }
  },
  computed: {
    elementNames(): string[] {
      return (this as any).structure.map((item: VuesualComponent) => Object.keys(item)[0]);
    },
    elementChildren(): Object[] {
      return (this as any).structure.map((item: VuesualComponent) => item[Object.keys(item)[0]]['children']);
    },
    elements(): ImportComponentFunction[] {
      return (this as any).structure.map((item: VuesualComponent) => toElementComponent(item));
    },
  },
});
</script>


