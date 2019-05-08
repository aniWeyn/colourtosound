<template>
  <div>
    <highcharts :options="chartOptionsByNote"></highcharts>
    <highcharts :options="chartOptionsByColor"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptionsByNote: {
        chart: {
          type: "column"
        },
        title: {
          text: "Your results by notes"
        },
        subtitle: {
          text: "Subtitle"
        },
        xAxis: {
          categories: ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5"],
          crosshair: true
        },
        yAxis: {
          min: 0,
          max: 360,
          title: {
            text: "Hue"
          }
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
          },
          {
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
          }
        ],
        colors: [
          "#058DC7",
          "#50B432",
          "#ED561B",
          "#DDDF00",
          "#24CBE5",
          "#64E572",
          "#FF9655",
          "#FFF263",
          "#6AF9C4"
        ]
      },
      chartOptionsByColor: {
        chart: {
          type: "column"
        },
        title: {
          text: "Your results by color"
        },
        subtitle: {
          text: "Subtitle"
        },
        xAxis: {
          categories: [
            "0",
            "30",
            "60",
            "90",
            "120",
            "150",
            "180",
            "210",
            "240",
            "270",
            "300",
            "330",
            "360"
          ],
          crosshair: true
        },
        zoneAxis: "x",
        zones: [
          {
            value: 0,
            color: "red"
          },
          {
            value: 30,
            color: "green"
          },
          {
            value: 60,
            color: "red"
          }
        ],
        yAxis: {
          min: 0,
          title: {
            text: "Hue"
          }
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            data: [5, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
          },
          {
            data: [8, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
          }
        ],
      }
    };
  }
};
</script>

<style>
</style>
