<template>
  <div>
    <nav class="nav">
      <div class="inner-nav">
        <div class="navset" ref="navset">
            <img src="../assets/Logo.svg" alt="">
            <img src="../assets/home.svg" alt="">
            <img src="../assets/bell.svg" alt="">
            <img id="stack" src="../assets/stack.svg" alt="" @click="hideStack">
            <img src="../assets/check.svg" alt="">
            <img src="../assets/flag.svg" alt="">
            <img src="../assets/people.svg" alt="">
       </div>
        <div class="navset">
          <img src="../assets/sheild.svg" alt="">
          <img src="../assets/settings.svg" alt="">
        </div>
      </div>
      <div class="sub-nav" ref="stack" v-show="show">
        <h3>Dashboard</h3>
        <div class="sub-nav-item halo">
          <img src="../assets/pulse.svg" alt="">
          <h4>Overview</h4>
        </div>
        <div class="sub-nav-item">
          <img src="../assets/bell.svg" alt="">
          <h4>Notifications</h4>
          <p>10</p>
        </div>
        <div class="sub-nav-item">
          <img src="../assets/wifi.svg" alt="">
          <h4>Analytics</h4>
        </div>
        <div class="sub-nav-item">
          <img src="../assets/star.svg" alt="">
          <h4>Saved Reports</h4>
        </div>
        <div class="sub-nav-item">
          <img src="../assets/clock.svg" alt="">
          <h4>Scheduled Reports</h4>
        </div>
        <div class="sub-nav-item">
          <img src="../assets/people.svg" alt="">
          <h4>User reports</h4>
        </div>
        <div class="sub-nav-item">
          <img src="../assets/settings.svg" alt="">
          <h4>Manage Notifications</h4>
        </div>
      </div>
    </nav>
    <div class="mob-nav">
        <img src="../assets/mod-logo.svg" alt="">
        <img src="../assets/mob-menu.svg" alt="">
    </div>
    <HalfoneView/>
  </div>
</template>

<script setup>
  import HalfoneView from '../components/HalfoneView.vue'
  import { ref , onMounted } from 'vue'

const show = ref(false);
const navset = ref('null');

  function hideStack(){
    show.value = !show.value;  
  }
//   function hover(){
//     const element = navset.value.children
//     for ( let el of element)
//      el.classList.add("hover")
//   }

// onMounted(() => {

// })
</script>

<style lang="scss">

</style>