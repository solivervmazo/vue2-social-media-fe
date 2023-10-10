import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { v4 as uuidv4 } from 'uuid';


import { ValidationProvider, setInteractionMode, extend } from 'vee-validate';
import {
  required,
} from "vee-validate/dist/rules";

Vue.component('ValidationProvider', ValidationProvider);

import CardWidget from "./components/core/CardWidget.vue";
Vue.component('vCardWidget', CardWidget);


extend("required", required);
setInteractionMode("eager");

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    lang:  (value) => {
      //mock translation
      return value
    },
    dmoney: ( value ) => {
      return `${value.toFixed(2)}`
    },
    ddate: ( value ) => {
      return value
    },
    dclean: ( value ) => {
      return value.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '-').toLowerCase()
    },
    $uuid: () => {
      return uuidv4().toString();
    }
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
