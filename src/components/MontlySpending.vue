<template>
    <div>
        <section>
            <div class="month">
                <h3>Monthly spending</h3>
               <div class="btn-group">
                <button><span class="dot"></span>This month</button>
                <button>Last month</button>
                <button class="show"><img src="../assets/plus.svg" alt=""> Custom</button>
                <button id="hide"><img src="../assets/circle.svg" alt=""></button>
               </div>
            </div>
            <hr class="line">
            <section class="dets">
                <div class="month-dets">
                    <div class="ring">
                        <div class="inner-ring"></div>
                    </div>
                    <div class="ring-dets">
                        <p>Total</p>
                        <h2>$2,280</h2> 
                    </div>     
                </div>
                <div class="spent-dets">
                    <div v-for="item in spent" :key="item.index">
                        <div class="desp">
                            <p><span class="dot" :style="{'background-color': item.color}"></span>{{item.title}}</p>
                            <h4>{{item.amount}}</h4>
                        </div>
                    </div>    
                </div>
            </section>
        </section>
        
    </div>
</template>

<script setup>
    import spending from '../utlis/spending.js'

    const spent = spending
</script>

<style lang="scss" scoped>


</style>