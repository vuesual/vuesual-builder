import VuesualComponent from '@/typings/structure';
import { Component } from 'vue';
import Error from '@/components/Error.vue';
import Vue from 'vue';

Vue.config.warnHandler = msg => {
  console.log(msg.substring(msg.indexOf('Cannot'), msg.length - 1));
};

interface AsyncComponent {
  component: Promise<Component>;
  error: Component;
  timeout: number;
}

export type ImportComponentFunction = () => AsyncComponent;

export const toElementComponent = (
  structure: VuesualComponent,
): ImportComponentFunction => {
  return () => ({
    component: import(`@/components/${Object.keys(structure)[0]}.vue`),
    error: Error,
    timeout: 200,
  });
};
