import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartsComponent implements OnInit {
  @ViewChild('pie', { static: true })
  charts: ElementRef;
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
      this.myChart = echarts.init(this.charts.nativeElement);
    }

    //绘制chart
    //时间统计图：https://echarts.baidu.com/examples/editor.html?c=dynamic-data2&qq-pf-to=pcqq.c2c
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 10,
      //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      // },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.myChart.clear();
    this.myChart.setOption(option);
  }
}
