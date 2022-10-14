<template>
    <div>
        <section>
            <div class="month">
                <h3>Monthly spending</h3>
               <div class="btn-group">
                <button><span class="dot"></span>This month</button>
                <button>Last month</button>
                <button><img src="../assets/plus.svg" alt=""> Custom</button>
               </div>
            </div>
            <hr class="line">
        </section>
        <!-- <div v-for="item in spent  " :key="item.index">{{item}}</div> -->
    </div>
</template>

<script setup>
    // import spending from '../utlis/spending.js'

    // const spent = spending
</script>

<style lang="scss" scoped>

</style>