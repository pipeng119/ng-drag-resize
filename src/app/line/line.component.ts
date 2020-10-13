import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LineComponent implements OnInit {
  //数据
  eChartDatas: any;
  //图例
  legends: any;

  //echart
  echarts: any;
  myChart: any;

  constructor() {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    //通过接口查询数据
    //这里伪造数据
    this.eChartDatas = [
      [
        {
          name: '2019-03-14 22:13:37',
          value: ['2019-03-14 22:13:37', '90.18'],
          tip: 'YG-YZQ250-001',
          symbol: '℃'
        },
        {
          name: '2019-03-14 22:15:37',
          value: ['2019-03-14 22:15:37', '94.18'],
          tip: 'YG-YZQ250-001',
          symbol: '℃'
        },
        {
          name: '2019-03-14 22:17:37',
          value: ['2019-03-14 22:17:37', '95.18'],
          tip: 'YG-YZQ250-001',
          symbol: '℃'
        }
      ],
      [
        {
          name: '2019-03-14 22:13:40',
          value: ['2019-03-14 22:13:40', '80.18'],
          tip: 'YG-YZQ250-002',
          symbol: '℃'
        },
        {
          name: '2019-03-14 22:14:50',
          value: ['2019-03-14 22:14:50', '89.90'],
          tip: 'YG-YZQ250-002',
          symbol: '℃'
        },
        {
          name: '2019-03-14 22:16:56',
          value: ['2019-03-14 22:16:56', '78.18'],
          tip: 'YG-YZQ250-002',
          symbol: '℃'
        }
      ],
      [
        {
          name: '2019-03-14 22:15:00',
          value: ['2019-03-14 22:15:00', '88.18'],
          tip: 'YG-YZQ250-003',
          symbol: '℃'
        },
        {
          name: '2019-03-14 22:16:00',
          value: ['2019-03-14 22:16:00', '99.98'],
          tip: 'YG-YZQ250-003',
          symbol: '℃'
        },
        {
          name: '2019-03-14 22:17:54',
          value: ['2019-03-14 22:17:54', '101.18'],
          tip: 'YG-YZQ250-003',
          symbol: '℃'
        }
      ]
    ];
    this.legends = ['YG-YZQ250-001', 'YG-YZQ250-002', 'YG-YZQ250-003'];

    // 基于准备好的dom，初始化echarts实例
    //只能初始化一次:https://www.echartsjs.com/api.html#echarts.init
    if (this.myChart == null || this.myChart == undefined) {
      this.myChart = echarts.init(document.getElementById(
        'chart1'
      ) as HTMLDivElement);
    }

    //绘制chart
    //时间统计图：https://echarts.baidu.com/examples/editor.html?c=dynamic-data2&qq-pf-to=pcqq.c2c
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.myChart.clear();
    this.myChart.setOption(option);
  }
}
