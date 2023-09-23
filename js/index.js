// 监控区域
(function () {
  $(".monitor .inner .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });
  // 遍历marqueer集合
  $(".monitor .content .marquee").each(function () {
    // 深度克隆每次遍历的元素
    let rows = $(this).children().clone();
    // 将克隆的元素插入到marquee子元素的最后
    $(this).append(rows);
  });
})();
// 点位图表区域
(function () {
  let myChart = echarts.init(document.getElementsByClassName("pie")[0]);
  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    series: [
      {
        name: "点位模式",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],

        label: {
          fontSize: 10,
        },
        labelLine: {
          length: 6,
          length2: 8,
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 用户柱形图
(function () {
  let items = {
    name: "",
    value: 1200,
    itemStyle: {
      color: "#254065",
    },
    emhasis: {
      itemStyle: {
        color: "254065",
      },
    },
    tooltip: {
      extraCssText: "opacity:0",
    },
  };
  let myChart = echarts.init(document.getElementsByClassName("bar")[0]);
  option = {
    tooltip: {
      trigger: "item",
      axisPointer: {
        // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
        type: "shadow",
      },
    },
    grid: {
      left: "0",
      right: "3%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0, 240, 255, 0.3)",
    },
    xAxis: [
      {
        // 使用类目，必须有data属性
        type: "category",
        // 使用 data 中的数据设为刻度文字
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        // 刻度设置
        axisTick: {
          // true意思：图形和刻度居中中间
          // false意思：图形在刻度之间
          alignWithLabel: false,
          // 不显示刻度
          show: false,
        },
        // x坐标轴文字标签样式设置
        axisLabel: {
          color: "#4c9bfd",
        },
        // x坐标轴颜色设置
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
            // width:8,  x轴线的粗细
            // opcity: 0,   如果不想显示x轴线 则改为 0
          },
        },
      },
    ],
    yAxis: [
      {
        // 使用类目，必须有data属性
        type: "value",
        // 刻度设置
        axisTick: {
          // 不显示刻度
          show: false,
        },
        // y坐标轴文字标签样式设置
        axisLabel: {
          color: "#4c9bfd",
        },
        // y坐标轴颜色设置
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
            // width:8,  x轴线的粗细
            // opcity: 0,   如果不想显示x轴线 则改为 0
          },
        },
        // y轴 分割线的样式
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          items,
          items,
          items,
          900,
          750,
          600,
          480,
          240,
        ],
        color: new echarts.graphic.LinearGradient(
          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: "#00fffb" }, // 0 起始颜色
            { offset: 1, color: "#0061ce" }, // 1 结束颜色
          ]
        ),
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 订单
(function () {
  // 数据
  let data = {
    day0: { orders: "20,301,987", amount: "99834" },
    day1: { orders: "301,987", amount: "9834" },
    day2: { orders: "1,987", amount: "3834" },
    day3: { orders: "987", amount: "834" },
  };
  let key = true;
  $(".inner .filter").on("click", "a", function () {
    if (key) {
      $(".filter a")
        .eq($(this).index())
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(".item-h1").text(`${data["day" + $(this).index()].orders}`);
      $(".item-h2").text(`${data["day" + $(this).index()].amount}`);
    }
  });
  // 还差一个自动跳动效果
})();
// 销售
(function () {
  let myChart = echarts.init(document.getElementsByClassName("line")[0]);
  let data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  };
  let option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: "#4c9bfb",
      },
      right: "10%",
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["1月", "3月", "5月", "7月", "9月", "11月", "12月"],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "4c9bfd",
      },
      axisLine: {
        show: false,
      },
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    color: ["#00f2f1", "#ed3f35"],
    series: [
      {
        name: "预期销售额",
        data: data.year[0],
        type: "line",
        // 折线修饰为圆滑
        smooth: true,
      },
      {
        name: "实际销售额",
        data: data.year[1],
        type: "line",
        smooth: true,
      },
    ],
  };
  myChart.setOption(option);
  let index = 0;
  for (prop in data) {
    $(".inner .caption a").eq(index).attr("data-type", `${prop}`);
    index++;
  }
  $(".sales .caption").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    let currData = data[this.dataset.type];
    option.series[0].data = currData[0];
    option.series[1].data = currData[1];
    myChart.setOption(option);
  });
  // 开启定时器，每隔3秒触发一次点击事件
  let as = $(".sales .caption a");
  let num = 0;
  let timer = setInterval(function () {
    num++;
    if (num >= as.length) num = 0;
    as.eq(num).click();
  }, 3000);
  // 鼠标进入sales清除定时器，移除则重新开启定时器
  $(".sales").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        num++;
        if (num >= as.length) num = 0;
        as.eq(num).click();
      }, 1000);
    }
  );
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 渠道
(function () {
  let myChart = echarts.init(document.querySelector(".radar"));
  // 2.指定配置
  let dataBJ = [[90, 19, 56, 11, 34]];
  let lineStyle = {
    normal: {
      color: "#fff",
    },
  };
  let option = {
    tooltip: {
      show: true,
      position: ["60%", "10%"],
    },
    radar: {
      center: ["50%", "50%"],
      radius: "55%",
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 },
      ],
      shape: "circle",
      splitNumber: 4,
      name: {
        textStyle: {
          color: "#4c9bfd",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
    series: [
      {
        name: "北京",
        type: "radar",
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: true,
          color: "#fff",
          fontSize: 10,
        },
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)",
        },
      },
    ],
  };
  // 3.把配置和数据给对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 季度
// (function () {
//   let myChart = echarts.init(document.getElementsByClassName("gauge")[0]);
//   option = {
//     series: [
//       {
//         type: "pie",
//         radius: ["130%", "150%"],
//         center: ["48%", "80%"],
//         label: {
//           normal: {
//             show: false,
//           },
//         },
//         startAngle: 180,
//         hoverOffset: 0,
//         data: [
//           {
//             value: 100,
//             itemStyle: {
//               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                 { offset: 0, color: "#00c9e0" }, // 0 起始颜色
//                 { offset: 1, color: "#005fc1" }, // 1 结束颜色
//               ]),
//             },
//           },
//           { value: 100, itemStyle: { color: "#12274d" } },
//           { value: 200, itemStyle: { color: "transparent" } },
//         ],
//       },
//     ],
//   };
//   myChart.setOption(option);
// })();
(function () {
  let myCharts = echarts.init(document.getElementsByClassName("gauge")[0]);
  option = {
    series: [
      {
        type: "pie",
        radius: ["130%", "150%"],
        center: ["48%", "80%"],
        label: {
          normal: {
            show: false,
          },
        },
        startAngle: 180,
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                { offset: 1, color: "#005fc1" }, // 1 结束颜色
              ]),
            },
          },
          { value: 100, itemStyle: { color: "#12274d" } },
          { value: 200, itemStyle: { color: "transparent" } },
        ],
      },
    ],
  };
  myCharts.setOption(option);
  window.addEventListener("resize", function () {
    myCharts.resize();
  });
})();
// 排行
(function () {
  let hotData = [
    {
      city: "北京", // 城市
      sales: "25,179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true },
      ],
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false },
      ],
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true },
      ],
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false },
      ],
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true },
      ],
    },
  ];
  let supHTML = "";
  $.each(hotData, function (index, item) {
    supHTML += ` 
    <li>
    <span>${item.city}</span>
    <span>${item.sales}
    <s class=${item.flag ? "icon-up" : "icon-down"}></s>
    </span>
    </li>`;
  });
  $(".province .sup").html(supHTML);
  $(".province .sup li").eq(0).addClass("active");
  // 渲染函数
  function render(that) {
    that.addClass("active").siblings().removeClass();
    let subHTML = "";
    $.each(hotData[that.index()].brands, function (index, item) {
      subHTML += ` 
    <li>
    <span>${item.name}</span>
    <span>${item.num}
        <s class=${item.flag ? "icon-up" : "icon-down"}></s>
    </span>
    </li>`;
    });
    $(".province .sub").html(subHTML);
  }
  $(".province .sup").on("mouseenter", "li", function () {
    render($(this));
  });
  let lis = $(".province li");
  let index = 0;
  render(lis.eq(index));
  // 开启定时器，每2秒触发一次

  let timer = setInterval(function () {
    index++;
    if (index >= lis.length) index = 0;
    render(lis.eq(index));
  }, 1000);
  $(".province .sup").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= lis.length) index = 0;
        render(lis.eq(index));
      }, 1000);
    }
  );
})();
