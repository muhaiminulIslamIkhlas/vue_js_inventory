

require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

import User  from './Helper/User';
window.User =User ;


import Notification  from './Helper/Notification';
window.Notification =Notification ;


import Swal from 'sweetalert2';
window.Swal=Swal;


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

window.Toast=Toast;
window.Reload=new Vue();


const router = new VueRouter({
  routes,
  mode: 'history'
})


const app = new Vue({
    el: '#app',
    router
});
