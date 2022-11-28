<script >
import NavbarVue from './components/Navbar.vue';
import {  RouterView } from 'vue-router';
export default{
  components:{
    NavbarVue
  }
}
</script>

<template>
  <NavbarVue/>

  <RouterView />
</template>

