



<template>
  <div class="city ">
    <index-city-header @changeside="changeside" @isShow="isShow" :cityInfo="cityInfo"></index-city-header>
    <div v-show="isitemShow">
        <index-city-hot :hotCity="hotCity"></index-city-hot>
        <index-city-list :cityInfo="cityInfo"></index-city-list>
    </div>
    
  </div>
</template>

<script>
import IndexCityHeader from './IndexCityHeader'
import IndexCityHot from './IndexCityHot'
import IndexCityList from './IndexCityList'


export default {
  name: 'city',
  // 获取城市信息
  created: function() {
			this.$http.get("/static/json/city.json").then(result => {
				if(result.body.ret) {
          //处理result不同信息
          this.cityInfo = result.body.data.domestic;
          this.domesticCity = result.body.data.domestic;
          this.overseasCity = result.body.data.overseas;
          // 前18个为hotcity
          for(var i=0;i<=17;i++){
            this.hotCity.push(this.cityInfo[i])
          }
				}else {
					console.log("Invalid data!");
				}
			}, result => {
				console.log("get city data err!");
			}); 
		},
  data () {
    return {
      cityInfo : [],
      domesticCity: [],
      overseasCity: [],
      hotCity: [],
      isitemShow:true

    }
  },
  components:{
      IndexCityHeader,
      IndexCityHot,
      IndexCityList
  },
  
  methods:{
        // 更改国内海外数据
       changeside:function(val){
        // console.log(this.overseasCity)
          if(val == true){
            // 把cityinfo改为国内
            this.cityInfo = this.domesticCity;
            this.hotCity=[];
            for(var i=0;i<=17;i++){
              this.hotCity.push(this.cityInfo[i])
            }
            
          }else{
          // 把cityinfo改为海外
            this.cityInfo = this.overseasCity;
            this.hotCity=[];
            for(var i=0;i<=17;i++){
              this.hotCity.push(this.cityInfo[i])
            }
          }
        },
        // 更改list显示
        isShow:function(value){
          
          if(value){
            this.isitemShow =true;
          }else{
            this.isitemShow =false;
          }
        }
  },
  mounted(){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>