<template>
  <div>
    <Header></Header>
    <div class="mainContainer">
      <el-row>
        <el-col :span="6">
          <div class="card">
            <div class="logo" style="background-color: #ff6c60;">
              <img src="../../src/assets/notice.png">
            </div>
            <div class="text">
              <h1>2</h1>
              <p>系统通知</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="3">
          <div class="card">
            <div class="logo" style="background-color: #57c8f2;">
              <img src="../../src/assets/newsNum.png">
            </div>
            <div class="text">
              <h1>7</h1>
              <p>发布数</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="3">
          <div class="card">
            <div class="logo" style="background-color: #f8d347;">
              <img src="../../src/assets/msg.png">
            </div>
            <div class="text">
              <h1>0</h1>
              <p>新消息</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="colChart" style="width: 100%;height:450px;"></div>
  </div>
</template>

<script>
  import Header from './Header'
  import echarts from 'echarts'
    export default {
      name: "chart_2",
      components: {
        Header: Header
      },
      mounted() {
        this.chartMain = echarts.init(document.getElementById('colChart'));
        this.initData()
      },
      methods: {
        initData() {
          const option = {
            title: {
              x: 'center',
              text: '最近十日新闻发布数统计',
              subtext: '用户个人数据'
            },
            tooltip: {
              trigger: 'item'
            },
            calculable: true,
            grid: {
              borderWidth: 0,
              y: 80,
              y2: 60
            },
            xAxis: [
              {
                type: 'category',
                show: false,
                data: ['2019/03/28', '2019/03/29', '2019/03/30', '2019/03/31', '2019/04/01',
                  '2019/04/02', '2019/04/03', '2019/04/04', '2019/04/05', '2019/04/06']
              }
            ],
            yAxis: [
              {
                type: 'value',
                show: false
              }
            ],
            series: [
              {
                name: '这一天的发布数',
                type: 'bar',
                itemStyle: {
                  normal: {
                    color: function(params) {
                      // build a color map as your need.
                      var colorList = [
                        '#C1232B','#B5C334','#FCCE10','#E87C25',
                        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                      ];
                      return colorList[params.dataIndex]
                    },
                    label: {
                      show: true,
                      position: 'top',
                      formatter: '{b}\n{c}'
                    }
                  }
                },
                data: [12,21,10,4,12,5,6,5,23,7],
                markPoint: {
                  tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0)',
                    /*formatter: function(params){
                      return '<img src="'
                        + params.data.symbol.replace('image://', '')
                        + '"/>';
                    }*/
                  },
                  data: [

                  ]
                }
              }
            ]
          }
          this.chartMain.setOption(option);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .mainContainer{
    width: 80%;
    border-radius: 10px;
    margin: 20px auto;
  }
  .card{
    background-color: #f9fafc;
    border-radius: 4px 0px 0px 4px;
    overflow: hidden;
    .logo{
      float: left;
      width: 30%;
      padding: 25px 15px;
      display: inline-block;
      text-align: center;
    }
    .text{
      text-align: center;
      width: 55%;
      display: inline-block;
      padding-top: 21px;
      h1{
        font-size: 40px;
        color: #c6cad6;
        font-weight: 100;
      }
      p{
        color: #c6cad6;
        font-weight: 100;
      }
    }
  }
</style>
