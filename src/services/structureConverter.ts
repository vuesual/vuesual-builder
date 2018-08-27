import VuesualComponent from '@/typings/structure';
import { Component } from 'vue';
import Error from '@/components/Error.vue';
import Vue from 'vue';
import { rejects } from 'assert';

Vue.config.warnHandler = msg => {
  console.log(msg.substring(msg.indexOf('Cannot'), msg.length - 1));
};

interface AsyncComponent {
  component: Promise<Component>;
  error: Component;
  timeout: number;
}

export type ImportComponentFunction = () => AsyncComponent;

// to-do: add proper typings
const mixConfiguration = function (component: any, configuartion: any): Component {
  // to-do make it less retarded
  let configProp = {
    config: {
      default: configuartion
    }
  }
  component.default.options.props = {...component.default.options.props, ...configProp}
  return component
}

const buildConfiguarbleComponent = async (
  vuesualComponent: VuesualComponent
): Promise<Component> => {
  return new Promise((resolve, reject) => {
    import(`@/components/${vuesualComponent.key}.vue`)
      .then(component => {
        mixConfiguration(component, vuesualComponent.config)
        resolve(component)
      })
  })
};

export const toElementComponent = (
  structure: VuesualComponent,
): { component: ImportComponentFunction, key: string } => {
  return { 
    component: () => ({
    component: buildConfiguarbleComponent(structure),
    error: Error,
    timeout: 200,
  }),
  key: structure.key
}
};
