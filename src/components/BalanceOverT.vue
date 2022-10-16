<template>
    <div>
        <div class="month">
                <h3>Balance over time</h3>
               <div class="btn-group">
                <button>12 months</button>
                <button>30 days</button>
                <button>7 days</button>
               </div>
        </div>
        <hr class="line">
        <LineChart 
            :chart-data="data"
            :options="options"
            css-classes="chart-container"
            class="chart-space"
        />
    </div>
</template>

<script setup>
import {ref, computed } from 'vue'
import { LineChart } from 'vue-chart-3'
import {
    Chart,
    LineController, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js'

Chart.register(
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)
const dataValues = ref([[10, 8, 22, 18, 34, 60, 48, 80, 90, 68, 110, 120],
                        [15, 21, 35, 46, 55, 64, 75, 85, 98, 105, 118, 125],
                        [28, 40, 48, 62, 80, 88, 83, 92, 106, 119, 122, 128]
                    ]
)

const data = computed(() =>({
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

    datasets:[
        {
            label: "",
            data: dataValues.value[0],
            backgroundColor: "#7F56D9",
            borderColor: "#7F56D9",
            tension: 0.4,
            fill: true
        },
        {
            label: "",
            data: dataValues.value[1],
            backgroundColor: "#B692F6",
            borderColor: "#B692F6",
            tension: 0.4,
            fill: true
        },
        {
            label: "",
            data: dataValues.value[2],
            backgroundColor: "#53389E",
            borderColor: "#53389E",
            tension: 0.4,
            fill: true,
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
            grid: {
                 display: false
            }
        }
    },
    legend: {
        labels: {
             boxWidth: 0,
            }
        }
})

</script>

<style lang="scss" scoped>

</style>