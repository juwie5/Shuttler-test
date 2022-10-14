<template>
    <div>
        <section class="month">
            <div class="act-top">
                <h3>Monthly spending</h3>
               <div>

               </div>
            </div>
            <hr class="line">
        </section>
        <!-- <div v-for="item in spent  " :key="item.index">{{item}}</div> -->
    </div>
</template>

<script setup>
    import spending from '../utlis/spending.js'

    const spent = spending
</script>

<style lang="scss" scoped>

</style>