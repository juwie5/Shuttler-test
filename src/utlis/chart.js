import { Chart, Legend, Title, Tooltip } from "chart.js"

Chart.register(Legend, Title, Tooltip)

Chart.defaults.plugins.legend.display = false