<template>
    <div>
         <div class="month">
                <h3>Spending over time</h3>
               <div class="btn-group">
                <button>12 months</button>
                <button>30 days</button>
                <button>7 days</button>
               </div>
        </div>
        <hr class="line">
           <div  class="chart-space">
                <BarChart 
                    :chart-data="data"
                    :options="options"
                    css-classes="chart-container"
                />
            </div> 
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { BarChart } from 'vue-chart-3'

import {
    Chart, 
    BarController,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js'

Chart.register(
    BarController,
    CategoryScale,
    LinearScale,
    BarElement
)

const dataValues = ref([
     [1, 3, 4, 6, 2, 4, 6, 5, 7, 2, 3, 1],
    [1, 5, 2, 4, 3, 7, 4, 3, 6, 3, 4, 2],
    [1, 7, 5, 3, 4, 8, 7, 6, 4, 5, 6, 3]
])

const borderRadius = 3;
const borderRadiusAllCorners = {topLeft: borderRadius, topRight: borderRadius}

const data = computed(() => ({
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

        datasets:[
        {
            label: "",
            data: dataValues.value[0],
            backgroundColor: "#6941C6",
            borderColor: "#6941C6",
            borderRadius: borderRadiusAllCorners,
            borderWidth: 0
        },
        {
            label: "",
            data: dataValues.value[1],
            backgroundColor: "#B692F6",
            borderColor: "#B692F6",
            borderRadius: borderRadiusAllCorners,
            borderWidth: 0
           
        },
        {
            label: "",
            data: dataValues.value[2],
            backgroundColor: "#D6BBFB",
            borderColor: "#D6BBFB",
            borderRadius: borderRadiusAllCorners,
            borderWidth: 0
        }
    ]

}))

const options = ref({
    plugins:{
        responsive: true,
    },
    scales: {
        y: {
            display: true,
            stacked: true,
            grid: {
                 display: true,
                 drawBorder: false, 
            },
            ticks: {
                 display: false,
             }
        },
        x: {
            display: true,
            stacked: true,
            grid: {
                 display: false
            }
        }
    }
})


</script>

<style lang="scss" scoped>
@media only screen and (min-width: 320px) and (max-width: 475px){
 .btn-group button:nth-child(2){
    width: 86px;
  }
  .btn-group button:nth-child(3){
    width: 76px;
  }
}
</style>