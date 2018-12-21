<template>
  <div>
    <component v-for="element in elements"
               :is="element.component"
               :key="element.key"
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
      type: Array as () => VuesualComponent[],
    },
  },
  computed: {
    // todo: make it as one type
    elements(): Array<{ component: ImportComponentFunction; key: string }> {
      return this.structure.map((item: VuesualComponent) =>
        toElementComponent(item),
      );
    },
  },
});
</script>


