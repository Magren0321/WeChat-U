import getMarkers from './marker'

Page({
  data:{
    isHidden: true,
    toast:"点击展示地点(๑•̀ㅂ•́)و✧",
    markers:[],
    showMarkers:[],
    latitude:23.432674,
    longitude:113.172623,
    isSelectedBuildType:1,
    tabList:[{
      id:1,
      name:'教学楼'
    },{
      id:2,
      name:'校门'
    },{
      id:3,
      name:'饭堂'
    },{
      id:4,
      name:'行政楼'
    },{
      id:5,
      name:'图书馆'
    },{
      id:6,
      name:'学生宿舍'
    },{
      id:7,
      name:'活动中心'
    },{
      id:8,
      name:'生活服务'
    },{
      id:9,
      name:'体育场所'
    }]
  },
 
  //获取markers
  onLoad: function(){
    const array = getMarkers()
    this.setData({
      markers: array
    })
    for(let i = 0;i<this.data.markers.length;i++){
      if(this.data.markers[i].id == 1){
        this.setData({
          showMarkers:this.data.markers[i].data
        })
      }
    }
  },
  //切换类别
  changePage: function(event){
    this.setData({
      isSelectedBuildType:event.currentTarget.id
    });
    for(let i = 0;i<this.data.markers.length;i++){
      if(this.data.markers[i].id == event.currentTarget.id){
        this.setData({
          showMarkers:this.data.markers[i].data
        })
      }
    }
  },
  //显示/隐藏地点
  changeShow: function(event){
    this.setData({
      isHidden:!this.data.isHidden
    });
    if(!this.data.isHidden){
      this.setData({
        toast:'点击隐藏地点(๑•̀ㅂ•́)و✧'
      })
    }else{
      this.setData({
        toast:'点击展示地点(๑•̀ㅂ•́)و✧'
      })
    }
  },
  //显示地点详情
  showPlaceDetail: function(event){
    wx.showModal({
        title: '提示',
        content: '暂无地点详情',
        showCancel: false
      })
  }
})