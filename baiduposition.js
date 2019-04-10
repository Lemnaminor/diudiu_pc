document.write("<script src='http://api.map.baidu.com/api?v=2.0&ak=GjaVO5H94hm6E2ZzO24UkUkzTn3sDY8D'></script>");
function baiduPosition(cid){
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var position = {
                lng: r.point.lng,
                lat: r.point.lat
            }
            if(cid == 'sort'){
                sort(position);
            } else {
                positions(position, cid);
            }
            alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
            //alert('获取当前位置失败,请确定您开启了定位服务');
        }        
    },{enableHighAccuracy: true});
}