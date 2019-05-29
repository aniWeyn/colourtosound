<template>
  <div class="container p-3">
    <h2>Results of experiment</h2>
    <h3>Descriptive statistics</h3>
    <h4>Survey results</h4>
    <highcharts class="pt-3" :options="surveyQ0" v-if="surveyQ0"></highcharts>
    <highcharts class="pt-3" :options="surveyQ1" v-if="surveyQ1"></highcharts>
    <highcharts class="pt-3" :options="surveyQ2" v-if="surveyQ2"></highcharts>
    <highcharts class="pt-3" :options="surveyQ3" v-if="surveyQ3"></highcharts>
    <h4>Feedback results</h4>
    <highcharts class="pt-3" :options="feedbackQ0" v-if="feedbackQ0"></highcharts>
    <highcharts class="pt-3" :options="feedbackQ1" v-if="feedbackQ1"></highcharts>
    <highcharts class="pt-3" :options="feedbackQ2" v-if="feedbackQ2"></highcharts>
    <highcharts class="pt-3" :options="feedbackQ3" v-if="feedbackQ3"></highcharts>
    <highcharts class="pt-3" :options="height" v-if="height"></highcharts>
    <highcharts class="pt-3" :options="width" v-if="width"></highcharts>
    width x height
    <br>Phone sizes:
    <br>320 x 568 - iPhone 5/SE
    <br>360 x 640 - Galaxy S5
    <br>375 x 667 - iPhone 6/7/8
    <br>414 x 736 - iPhone 6/7/8 Plus
    <br>Tablets sizes:
    <br>768 x 1024 - iPad
    <br>1024 x 1366 - iPad Pro
    <br>
    <highcharts class="pt-3" :options="feedbackQ4" v-if="feedbackQ4"></highcharts>
    <highcharts class="pt-3" :options="feedbackQ5" v-if="feedbackQ5"></highcharts>
    <highcharts class="pt-3" :options="feedbackQ6" v-if="feedbackQ6"></highcharts>
    <highcharts class="pt-3" :options="colorDepth" v-if="colorDepth"></highcharts>
    <highcharts class="pt-3" :options="blackData" v-if="blackData"></highcharts>
  </div>
</template>

<script>
import { JSONPath } from "../../node_modules/jsonpath-plus/dist/index-es.js";
import data from "../data/AIC/results.json";
import white from "../data/AIC/white.json";
import black from "../data/AIC/black.json";
import { Chart } from "highcharts-vue";
export default {
  name: "charts",
  data() {
    return {
      data: data,
      series: [],
      white: white,
      black: black
    };
  },
  components: {
    highcharts: Chart
  },
  methods: {
    fillHighchart(
      titile,
      categories,
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      n0,
      n1,
      n2,
      n3,
      n4,
      n5
    ) {
      let options = {
        chart: {
          type: "column",
          height: 300,
        },
        title: {
          text: titile
        },
        xAxis: {
          categories: categories
        },
        yAxis: {
          title: {
            text: "Amount of answers"
          }
        },
        series: [
          {
            name: n0,
            data: [a0]
          },
          {
            name: n1,
            data: [a1]
          },
          {
            name: n2,
            data: [a2]
          },
          {
            name: n3,
            data: [a3]
          },
          {
            name: n4,
            data: [a4]
          },
          {
            name: n5,
            data: [a5]
          }
        ]
      };

      return options;
    },
    fillHighchartShort(titile, categories, series) {
      let options = {
        chart: {
          type: "column",
          height: 400,
          width: 700
        },
        title: {
          text: titile
        },
        xAxis: {
          categories: categories
        },
        yAxis: {
          title: {
            text: "Amount of answers"
          }
        },
        series: series
      };

      return options;
    },
    createSeries(lodashKeys, lodashValues) {
      let series = [];
      for (var i = 0; i < lodashKeys.length; i++) {
        series.push({ name: lodashKeys[i], data: [lodashValues[i]] });
      }
      return series
    }
  },
  computed: {
    totalAmount() {
      return 0;
    },
    test() {
      return this._.countBy(this.data.newusers);
    },
    surveyQ0() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].survey[*].survey[0].answer",
        json: this.data
      });
      
      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < lodashKeys.length; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (None)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (Proffesional musician)", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("How much experience do you have with singing or playing musical instruments?", "", series);
    },
    surveyQ1() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].survey[*].survey[1].answer",
        json: this.data
      });
      
      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < lodashKeys.length; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (None)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (Working professionally with colours)", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("How much formal training have you had in colour?", "", series);
    },
    surveyQ2() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].survey[*].survey[2].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < lodashKeys.length; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (Never)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (Always)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "0"){
          series.push({ name: "No opinion", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("Do you experience colour while you are listening to music?","", series);
    },
    surveyQ3() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].survey[*].survey[3].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < 6; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (Never)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (Always)", data: [lodashValues[i]] });
        }
        if(i == 5){
          series.push({ name: "5 (Always)", data: [0] });
        }
        if(lodashKeys[i] == "0"){
          series.push({ name: "No opinion", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("Do you experience sound while you are seeing a colour?","", series);
    },
    feedbackQ0() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[0].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < lodashKeys.length; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (Too short)", data: [lodashValues[i]] });
        }
        if(i == 1 && lodashKeys[i] != "1"){
          series.push({ name: "1 (Too short)", data: [0] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (Too long)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "0"){
          series.push({ name: "No opinion", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("Is the length of study appropriate?","", series);
    },
    feedbackQ1() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[1].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < 6; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (I couldn't hear sounds)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(i == 3 && lodashKeys[i] != "3"){
          series.push({ name: "1 (Too short)", data: [0] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (I could hear all sounds)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "0"){
          series.push({ name: "No opinion", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("Could you hear all sounds?","", series);
    },
    feedbackQ2() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[2].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < 6; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "1 (Very dark)", data: [lodashValues[i]] });
        }
        if(i == 1 && lodashKeys[i] != "1"){
          series.push({ name: "1 (Very dark)", data: [0] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "2", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "3", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "4", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "5 (Very bright)", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "0"){
          series.push({ name: "I don't know", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("How bright is the screen of your device?","", series);
    },
    feedbackQ3() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[3].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < lodashKeys.length; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "Tablet", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "Smartphone", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "Personal computer", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "Other", data: [lodashValues[i]] });
        }
      }

      return this.fillHighchartShort("What device are you using during study participation?", "", series);
    },
    feedbackQ4() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[4].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < 6; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "My device speakers", data: [lodashValues[i]] });
        }
        if(i == 1 && lodashKeys[i] != "1"){
          series.push({ name: "My device speakers", data: [0] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "Headphones", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "External speakers", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "Other", data: [lodashValues[i]] });
        }
        if(i == 4 && lodashKeys[i] != "4"){
          series.push({ name: "Other", data: [0] });
        }
      }

      return this.fillHighchartShort("Are you listening sounds of the study on speakers or headphones?","", series);
    },
    feedbackQ5() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[5].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < 6; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "No (checked with doctor)", data: [lodashValues[i]] });
        }
        if(i == 1 && lodashKeys[i] != "1"){
          series.push({ name: "No (checked with doctor)", data: [0] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "No", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "Yes (checked with doctor)", data: [lodashValues[i]] });
        }
        if(i == 3 && lodashKeys[i] != "3"){
          series.push({ name: "Yes (checked with doctor)", data: [0] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "Yes", data: [lodashValues[i]] });
        }
        if(i == 4 && lodashKeys[i] != "4"){
          series.push({ name: "Yes", data: [0] });
        }
        if(lodashKeys[i] == "5"){
          series.push({ name: "I might", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "6"){
          series.push({ name: "I don't know", data: [lodashValues[i]] });
        }
        if(i == 4 && lodashKeys[i] != "6"){
          series.push({ name: "I don't know", data: [0] });
        }

      }

      return this.fillHighchartShort("Are suffering from any hearing loss?","", series);
    },
    feedbackQ6() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].survey[6].answer",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);

      let series = [];
      for (var i = 0; i < 6; i++) {
        if(lodashKeys[i] == "1"){
          series.push({ name: "Yes", data: [lodashValues[i]] });
        }
        if(i == 1 && lodashKeys[i] != "1"){
          series.push({ name: "Yes", data: [0] });
        }
        if(lodashKeys[i] == "2"){
          series.push({ name: "No", data: [lodashValues[i]] });
        }
        if(lodashKeys[i] == "3"){
          series.push({ name: "I might", data: [lodashValues[i]] });
        }
        if(i == 3 && lodashKeys[i] != "3"){
          series.push({ name: "I might", data: [0] });
        }
        if(lodashKeys[i] == "4"){
          series.push({ name: "I don't know", data: [lodashValues[i]] });
        }
        if(i == 4 && lodashKeys[i] != "4"){
          series.push({ name: "I don't know", data: [0] });
        }
      }

      return this.fillHighchartShort("Are you experiencing tinnitus (unexpected high-pitched ringing or hissing sound or low pitched sound)?","", series);
    },
    colorDepth() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].colorDepth",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);
      let series = this.createSeries(lodashKeys, lodashValues);

      return this.fillHighchartShort("Scren Color Depth", "", series);
    },
    height() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].height",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);
      let series = this.createSeries(lodashKeys, lodashValues);

      return this.fillHighchartShort("Scren height", "", series);
    },
    width() {
      let jsonPathData = JSONPath({
        path: "$.newusers[*].feedback[*].width",
        json: this.data
      });

      let lodash = this._.countBy(jsonPathData, Math.floor);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);
      let series = this.createSeries(lodashKeys, lodashValues);

      return this.fillHighchartShort("Scren width", "", series);
    },
    blackData(){
        let blackData = JSONPath({
        path: "$..note",
        json: this.black
      });

      let lodash = this._.countBy(blackData);
      let lodashKeys = Object.keys(lodash);
      let lodashValues = Object.values(lodash);
      let series = this.createSeries(lodashKeys, lodashValues);

      return this.fillHighchartShort("Black", "", series);
    },
  }
};
</script>

<style>
</style>
