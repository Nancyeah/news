<template>
  <div class="chartBox">
    <div id="chartMain" style="width: 90%;height: 450px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
      name: "tendency",
      mounted(){
        this.chartMain = echarts.init(document.getElementById('chartMain'))
        this.initData();
      },
      methods: {
        initData(){
          const colors = ['#E87C25', '#9BCA63', '#C1232B'];
          const option = {
            color: colors,
            title:{ text: '数据统计图' },
            tooltip: {
              trigger: "axis"
            },
            legend:{
              data:['浏览数','发布数','新增用户']
            },
            toolbox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['bar', 'line']},
                restore: {},
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap:false,
              data: ["2019-03-27","2019-03-28","2019-03-29","2019-03-30","2019-03-31","2019-04-01"]
            },
            yAxis: {
              type: "value",
              min: 0,
              max: 200,
              axisLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            series: [{
              name: '浏览数',
              type: 'line',
              data: [5, 20, 36, 10, 10, 33],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
            },
              {
                name: '发布数',
                type: 'line',
                data: [100, 160, 59, 37, 60, 44],
                markPoint: {
                  data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                  ]
                },
              },
              {
                name: '新增用户',
                type: 'line',
                data: [10, 9, 18, 9, 0, 10],
                markPoint: {
                  data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                  ]
                },
              }]
          }
          this.chartMain.setOption(option)
        }
      }
    }
</script>

<style scoped>
  .chartBox{
    display: flex;
    justify-content: center;
  }
</style>
