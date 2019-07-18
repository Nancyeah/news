<template>
  <div>
    <Header></Header>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <div id="pie" style="width: 90%;height:450px;"></div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import echarts from 'echarts'
    export default {
      name: "chart_1",
      components: {
          Header: Header
      },
      mounted() {
        this.chartMain = echarts.init(document.getElementById('pie'));
        this.initData()
      },
      methods: {
        initData() {
          const option = {
            title: {
              text: '用户分布',
              subtext: '',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['北京','上海','深圳','杭州','广州','东莞','珠海','其他']
            },
            series : [
              {
                name:'人数和百分比',
                type:'pie',
                radius : [30, 180],
                center : ['50%', 250],
                roseType : 'area',
                max: 40,                // for funnel
                data:[
                  {value:10, name:'北京'},
                  {value:5, name:'其他'},
                  {value:15, name:'深圳'},
                  {value:25, name:'杭州'},
                  {value:20, name:'珠海'},
                  {value:35, name:'上海'},
                  {value:30, name:'东莞'},
                  {value:40, name:'广州'}
                ]
              }
            ]
          }
          this.chartMain.setOption(option);
        }
      }
    }
</script>

<style scoped>

</style>
