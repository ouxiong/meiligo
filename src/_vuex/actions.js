
import jsonp from "jsonp"
export default {
	getPosition({commit}){
		 var map, geolocation;
		    map = new AMap.Map('container', {
		        resizeEnable: true
		    });
		    map.plugin('AMap.Geolocation', function() {
		        geolocation = new AMap.Geolocation({
		            enableHighAccuracy: true,
		            timeout: 10000,         
		            buttonOffset: new AMap.Pixel(10, 20),
		            zoomToAccuracy: true,      
		            buttonPosition:'RB'
		        });
		        map.addControl(geolocation);
		        geolocation.getCurrentPosition();
		        AMap.event.addListener(geolocation, 'complete', (data)=>{
		        	let longitude = data.position.getLng()
		        	let latitude = data.position.getLat()
		        	console.log(longitude,latitude)
		        	
		        	 var map = new AMap.Map("container", {
							        resizeEnable: true,
									zoom: 18
							    }),    
							    lnglatXY = [longitude, latitude]; //已知点坐标
							        var geocoder = new AMap.Geocoder({
							            radius: 1000,
							            extensions: "all"
							        });        
							        geocoder.getAddress(lnglatXY, function(status, result) {
							            if (status === 'complete' && result.info === 'OK') {
							                geocoder_CallBack(result);
							            }
							        });
							    function geocoder_CallBack(data) {
							        var address = data.regeocode.aois[0].name; //返回地址描述
							        let position = {
							        	longitude,
							        	latitude,
							        	address
							        }
							        commit("getPosition",position)
							    }
		        	
		        	
		        });
		    });
	},
	// getGoodsData({commit}){
	// 	console.log('getGoodsData')
	// 	commit("getGoodsData",position)
	// 	jsonp('http://m.meilishuo.com/detail/mls/v1/h5?iid=1kbicaa&_ajax=1&cparam= ',function(err, data){
    //           if(data){
	// 			  console.log(data.result)
    //                commit("getGoodsData",data.result)
    //           }
	// 	  });
	// }
}
