import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';

import { Fontawesome } from 'nativescript-fontawesome';
Fontawesome.init();

svelteNativeNoFrame(App, {});
