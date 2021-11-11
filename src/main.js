import { createApp } from 'vue';
import App from './App.vue';

import AppInput from '@/components/Input.vue';

const app = createApp(App);

app.component('app-input', AppInput);

app.mount('#app');
