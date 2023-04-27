import { registerNativeViewElement } from 'svelte-native/dom';
import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';

registerNativeViewElement(
  'checkBox',
  () => require('@nstudio/nativescript-checkbox').CheckBox
);

svelteNativeNoFrame(App, {});
