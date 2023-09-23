import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/viva-light/theme.css'
import 'primevue/resources/themes/viva-dark/theme.css'
import { initializeApp } from "firebase/app";
import ToastService from 'primevue/toastservice';


// const firebaseConfig = {
//   apiKey: "AIzaSyCoaVsPNtrMlBJ1JYSD5s7EsxsQmGzubb8",
//   authDomain: "learn-vue-b1afe.firebaseapp.com",
//   projectId: "learn-vue-b1afe",
//   storageBucket: "learn-vue-b1afe.appspot.com",
//   messagingSenderId: "56216045727",
//   appId: "1:56216045727:web:914f3fb1644d7f51103aaa"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAENjT1pU2ZqIu1LvSKaBmpK63S0gevF4g",
  authDomain: "learn-vue2-54819.firebaseapp.com",
  projectId: "learn-vue2-54819",
  storageBucket: "learn-vue2-54819.appspot.com",
  messagingSenderId: "300467598422",
  appId: "1:300467598422:web:1db65117d9423b7f5377f7",
  measurementId: "G-RC3WXXZX7B"
};

const app = createApp(App);

initializeApp(firebaseConfig);

app.use(PrimeVue);

app.use(ToastService);

app.use(router)

app.mount('#app')




