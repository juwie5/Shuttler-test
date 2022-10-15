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
      <div class="sub-divide">
        <section class="sub">
          <ActiveUsers/>
          <RecentTransactions/>
        </section>
        <section class="sub2">
          <MontlySpending/>
          <BalanceOverT/>
        </section>
      </div>
      
  </div>
</template>

<script setup>
import ActiveUsers from '../components/ActiveUsers.vue'
import RecentTransactions from '../components/RecentTransactions.vue'
import MontlySpending from './MontlySpending.vue';
import BalanceOverT from './BalanceOverT.vue';

</script>

<style>

</style>
