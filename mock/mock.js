const Mock = require('mockjs');
var Random = Mock.Random;  
 
const arry = [
     "Samsung/三星 Galaxy S10 SM-G9730 骁龙855 四摄像头 官方正品 IP68防水 4G智能手机",
     "Huawei/华为 Mate 20 Pro 曲面屏后置徕卡三镜头980芯片智能手机4000万超大广角徕卡三摄 OLED曲面屏",
     "【6+64G低至1499】Xiaomi/小米 小米8 青春版全面屏智能拍照游戏手机学生商务9官方旗舰店正品红米note7note5",
     "【新品上市现货速发】vivo U1水滴全面屏大电池拍照智能手机面部指纹双识别官方正品vivou1 y73 z1 Z3 iqoo",
     "【顺丰速发 送榨汁杯】vivo X23幻彩版手机全新正品 vivox23 x21 x30 x21s x20 vivox23指纹限量版 x23炫彩"
];

const url = [
    'https://img.alicdn.com/imgextra/i2/2838892713/O1CN01rhD6qo1Vub1FOTyzs_!!2838892713.jpg',
    "https://img.alicdn.com/imgextra/i3/2838892713/O1CN01Z1AJfT1Vub1G7CFyY_!!2838892713.jpg",
    'https://img.alicdn.com/imgextra/i2/1715164541/O1CN01rOSeJf1jPp1BU1Clp_!!1715164541.jpg',
    'https://img.alicdn.com/tps/i1/TB1AHXiGXXXXXXAXVXX.uTD.FXX-10-10.png',
    '',''
]
 
 
 

 
var data = function(){

    let datas=[];
    let xx = {
    'status|0':0,
    'message|1': [{
        'id|1-100':2,
        'title|1':arry,
        'add_time|2':[{
            "value|50-100000": 50,
            'fromNowOn|+1': 1,
            'now|+1':'@now("yyyy-MM-dd")',
            'data|+1':function(){
              let now= new Date(this.now);
              now.setTime(now.getTime()-this.fromNowOn*24*60*60*1000);
              let sub=now;
              var year = sub.getFullYear()<10?'0'+sub.getFullYear():sub.getFullYear();
              var month = sub.getMonth() + 1<10?'0'+sub.getMonth():sub.getMonth();
              var day = sub.getDate()<10?'0'+sub.getDate():sub.getDate();
              return year+'-'+month+'-'+day;
            }
          }],
          'click|1':0,
          'img_url|1':Random.image(),
          'sell_place|1000-3000':1,
          'stock|1000-3000':2,
          'quantiy':60,
    } ]
}
    datas.push(xx)
    return datas

console.log(
    JSON.stringify(data, null, 1),
    )
}

Mock.mock('/hom/productlist','get',data)