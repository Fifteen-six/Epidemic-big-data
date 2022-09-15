let echarts = require('echarts')
//世界地图
import nameMap from './nameMap'
//中国地图
import nameChina from './nameChina.js'

const install = function (Vue) {
    //Object对象方法
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    WorldMap: function (id, data) {
                        var dom = document.getElementById(id);;
                        var myChart = echarts.init(dom);
                        var option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: true,
                                formatter: function (data) {
                                    // console.log(data)
                                    return "<a href = '/#/City/" + data.name + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></a>"
                                    // return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p>"
                                }
                            },
                            visualMap: [{
                                orient: 'vertical',
                                type: 'piecewise',
                                pieces: [
                                    { min: 0, max: 1000, color: "#FFFFFF" },
                                    { min: 1001, max: 5000, color: "#FDFDCF" },
                                    { min: 5001, max: 100000, color: "#FE9E83" },
                                    { min: 100001, max: 1000000, color: "#FE9E83" },
                                    { min: 100001, max: 100000000, color: "#4F070D" },


                                ]
                            }],
                            series: [{
                                name: "",
                                type: "map",  // 配置图表类型
                                map: "world", // 中国地图
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.2,
                                aspectScale: 0.75,  // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap: nameMap,
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                },
                                data: data
                            }]

                        };
                        myChart.setOption(option);
                    },
                    ChinaMap: function (id, data) {
                        // console.log(data)
                        var dom = document.getElementById(id);;
                        var myChart = echarts.init(dom);
                        var option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: true,
                                formatter: function (data) {
                                    var res = data.name
                                    if (res.indexOf('维') !== -1) {
                                        var province = res.indexOf('维')
                                        var _province = res.substring(0, province)
                                        console.log(_province)
                                        return "<a href = '/#/City/" + _province + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></a>"
                                    }
                                    if (data.name.indexOf('省') !== -1) {
                                        var province = data.name.indexOf('省')
                                        var _province = data.name.substring(0, province)
                                        console.log(_province)
                                        return "<a href = '/#/City/" + _province + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></a>"
                                    }
                                    if (data.name.indexOf('自') !== -1) {
                                        var province = data.name.indexOf('自')
                                        var _province = data.name.substring(0, province)
                                        console.log(_province)
                                        return "<a href = '/#/City/" + _province + "' style='color:#fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></a>"
                                    }






                                }
                            },
                            visualMap: [{
                                orient: 'vertical',
                                type: 'piecewise',
                                pieces: [
                                    { min: 0, max: 100, color: "#FFFFFF" },
                                    { min: 1000, max: 3000, color: "#FDFDCF" },
                                    { min: 3001, max: 10000, color: "#FE9E83" },
                                    { min: 10000, max: 100000, color: "#FE9E83" },
                                    { min: 100001, max: 100000000, color: "#4F070D" },


                                ]
                            }],
                            series: [{
                                name: "",
                                type: "map",  // 配置图表类型
                                map: "china", // 中国地图
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.2,
                                aspectScale: 0.75,  // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap: nameChina,
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                },
                                data: data
                            }]

                        };
                        myChart.setOption(option);
                    },
                    CityMap: function (id, city, citys) {
                        console.log(id, city, citys)
                        var dom = document.getElementById(id);;
                        var myChart = echarts.init(dom);
                        var option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: true,
                                formatter: function (citys) {
                                    console.log(citys)
                                    return "<a href = '/#/City/" + citys.name + "' style='color:#fff'><div><p>" + citys.name + "</p><p>现存确诊:" + citys.value + "</p></a>"
                                    // return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p>"
                                }
                            },
                            visualMap: [{
                                orient: 'vertical',
                                type: 'piecewise',
                                pieces: [
                                    { min: 0, max: 10, color: "#FFFFFF" },
                                    { min: 10, max: 50, color: "#FDFDCF" },
                                    { min: 50, max: 100, color: "#FE9E83" },
                                    { min: 100, max: 200, color: "#FE9E83" },
                                    { min: 200, max: 100000000, color: "#4F070D" },
                                ]
                            }],
                            series: [{
                                name: "市",
                                type: "map",  // 配置图表类型
                                map: city, // 省市地图
                                roam: false,  // 是否允许自动缩放
                                zoom: 1.2,
                                aspectScale: 0.75,  // 地图缩放比例
                                label: {      // 配置字体
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                // nameMap: nameMap,
                                itemStyle: {  // 配置地图样式
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                },
                                data: citys
                            }]

                        };
                        myChart.setOption(option);
                    },
                    //                 WorldMap: function (id) {
                    //                     var dom = document.getElementById(id);;
                    //                     var myChart = echarts.init(dom);
                    //                     var option = {
                    //                         title: {
                    //                             // text: '世界地图', // 主标题文本，支持使用 \n 换行
                    //                             top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
                    //                             left: 'center', // 值: 'left', 'center', 'right' 同上
                    //                             textStyle: { // 文本样式
                    //                                 fontSize: 24,
                    //                                 fontWeight: 600,
                    //                                 color: '#fff'
                    //                             }
                    //                         },
                    //                         // 提示框组件
                    //                         tooltip: {
                    //                             // trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
                    //                             // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                    //                             // 使用函数模板  传入的数据值 -> value: number | Array
                    //                             formatter: function (val) {
                    //                                 return "<div><p>" + val.name + "</p><p>现存确诊:" + val.value + "</p>"
                    //                             }
                    //                         },
                    //                         // 视觉映射组件
                    //                         visualMap: [{
                    //                             orient: 'vertical',
                    //                             type: 'piecewise',
                    //                             pieces: [
                    //                                 { min: 0, max: 0, color: "#FFFFFF" }
                    //                             ]
                    //                             //     type: 'continuous', // continuous 类型为连续型  piecewise 类型为分段型
                    //                             //     show: true, // 是否显示 visualMap-continuous 组件 如果设置为 false，不会显示，但是数据映射的功能还存在
                    //                             //     // 指定 visualMapContinuous 组件的允许的最小/大值。'min'/'max' 必须用户指定。
                    //                             //     // [visualMap.min, visualMax.max] 形成了视觉映射的『定义域』
                    //                             //     min: 0,
                    //                             //     max: 1000000,
                    //                             //     // 文本样式
                    //                             //     textStyle: {
                    //                             //         fontSize: 14,
                    //                             //         color: '#fff'
                    //                             //     },
                    //                             //     realtime: false, // 拖拽时，是否实时更新
                    //                             //     calculable: true, // 是否显示拖拽用的手柄
                    //                             //     // 定义 在选中范围中 的视觉元素
                    //                             //     inRange: {
                    //                             //         color: ['#9fb5ea', '#e6ac53', '#74e2ca', '#85daef', '#9feaa5', '#5475f5'] // 图元的颜色
                    //                             //     }
                    //                         }],
                    //                         series: [
                    //                             {
                    //                                 type: 'map', // 类型
                    //                                 // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
                    //                                 name: '世界地图',
                    //                                 mapType: 'world', // 地图类型
                    //                                 // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
                    //                                 roam: true,
                    //                                 zoom: 1.5,
                    //                                 // 图形上的文本标签
                    //                                 label: {
                    //                                     show: false,
                    //                                     textStyle: {
                    //                                         fontSize: 8
                    //                                     }
                    //                                     // 是否显示对应地名
                    //                                 },
                    //                                 // 地图区域的多边形 图形样式
                    //                                 itemStyle: {
                    //                                     areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                    //                                     borderWidth: 0.5, // 描边线宽 为 0 时无描边
                    //                                     borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                    //                                     borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                    //                                 },
                    //                                 // 高亮状态下的多边形和标签样式
                    //                                 emphasis: {
                    //                                     label: {
                    //                                         show: true, // 是否显示标签
                    //                                         color: '#fff' // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                    //                                     },
                    //                                     itemStyle: {
                    //                                         areaColor: '#FF6347' // 地图区域的颜色
                    //                                     }
                    //                                 },
                    //                                 // 自定义地区的名称映射
                    //                                 nameMap: nameMap
                    //                                 // 地图系列中的数据内容数组 数组项可以为单个数值

                    //                             }
                    //                         ]
                    //                     }
                    //                     myChart.setOption(option);
                    //                 }

                }
            }
        }
    })
}


export default install