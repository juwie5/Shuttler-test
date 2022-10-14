<template>
  <div class="contain">
    <header class="top">
        <div>
          <h2>Your cards</h2>
          <p>Welcome back, Olivia!</p>
        </div>
        <div>
           <button class="btn-sync"><img src="../assets/cycle.svg"/> Sync accounts</button>
           <button class="btn-add">Add cards</button>
        </div>
      </header>
      <hr class="line">
      <section class="sub">
        <ActiveUsers/>
        <RecentTransactions/>
      </section>
      
  </div>
</template>

<script setup>
import ActiveUsers from '../components/ActiveUsers.vue'
import RecentTransactions from '../components/RecentTransactions.vue'
</script>

<style>

</style>
