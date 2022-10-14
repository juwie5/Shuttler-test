<template>
    <div class="recent-trans">
        <div class="act-top">
                <h3>Recent Transactions</h3>
                <img src="../assets/3dots.svg" alt="">
        </div>
        <hr id="line2">
        <div v-for="({name, cost, date, green}, index) in entries" :key="index" class="entry">
            <div>
                <h4>{{name}}</h4>
                <p class="entry-p"
                    :class="{green: green}"
                >{{cost}}</p>
            </div>
            <p class="entry-date">{{date}}</p>
            <img src="../assets/pen.svg" alt="">
        </div>
        <p class="view-p">View all transactions</p>
    </div>
</template>

<script setup>
import transactions from '../utlis/transcation.js'

const entries = transactions

</script>

<style lang="scss" scoped>

</style>