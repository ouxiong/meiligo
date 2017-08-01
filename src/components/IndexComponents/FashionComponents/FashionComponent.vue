<template>
  <div class="index-fashion">
    <div class="index-fashion-top">
    	<img src="https://s10.mogucdn.com/mlcdn/c45406/170523_3588j3005fhc2d8f1icgijbgg23gk_740x128.jpg_750x999.v1c7E.70.webp" alt=""/>
    </div>
    <fashion-item :fashicon="_fashicon" v-for="(_fashicon,$index) in Fashion" key="$index"></fashion-item>
    <p class="index-fashion-more">
			查看更多 <i class="arrow"></i>
		</p>
		<fill-gray></fill-gray>
  </div>
</template>

<script>
	
	import  {mapState,mapGetters,mapActions} from "vuex"
	//引入子组件
	
	import FashionItem from "./FashionItemComponent"
	
	import FillGray from "./../../FillGrayComponent"
	
	import jsonp from "jsonp"
export default {
  name: 'index-fashion',
  data () {
    return {
      Fashion:[]
    }
  },
  computed:{
  	
  },
  methods:{
  	getFashion(){
			let that = this;
			jsonp("https://simba-api.meilishuo.com/venus/topic/v2/queryTopicList/h5", null, function (err, res) {
				  if (res) {
				  	console.log(res.data)
				  	that.Fashion=res.data
				  }
				});
		}
  },
  mounted(){
  	this.getFashion()
  },
  updated(){
  	this.$options.swiper = new Swiper(".fashion-item-box",{
        freeMode:true,
	  		slidesPerView:"auto",
	  		freeModeSticky:true
  	})
  },
  components:{
  	FashionItem,
  	FillGray
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.index-fashion{
		.index-fashion-top{
			width:100%;
			img{
				width:100%;
			}
		}
		.index-fashion-more{
			border-top: 1px solid #eee;
	    color: #f36;
	    padding: .3rem;
	    text-align: center;
	    background-color: #fff;
	    margin-top: -0.2rem;
	    .arrow{
	    	border-top: 1px solid #f36;
		    border-left: 1px solid #f36;
		    width: .15rem;
		    height: .15rem;
		    background-color: transparent;
		    -webkit-transform: rotate(135deg);
		    display: inline-block;
		    margin-left: .1rem;
	    }
		}
	}
</style>
