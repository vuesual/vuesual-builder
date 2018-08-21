import VuesualComponent from '@/typings/structure';
import { Component } from 'vue';

export type ImportComponentFunction = () => Promise<Component>;

export const toElementComponent = (
  structure: VuesualComponent,
): ImportComponentFunction => {
  const comp = () => import(`@/components/${Object.keys(structure)[0]}.vue`);
  return comp;
};
