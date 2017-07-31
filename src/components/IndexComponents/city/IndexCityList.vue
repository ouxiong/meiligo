<template>
	<ul class="city-menu border-leftright" >
		<li class="city-list" >
			<dl v-for="(item,index) in cityInitialSort">
				<dt class="city-index border-bottom">{{item}}</dt>
				<dd class="city-item border-bottom" v-for="(city,i) in cityDatas(item)">{{city.name}}</dd>
			</dl>
		</li>
	</ul>
</template>

<script>
    
	export default{
        props:["cityInfo"],
        data (){
            return{
				cityWords:[],
            }
        },
        computed:{
            
            // 获取城市首字母
            cityInitialSort:function(){
				// console.log('获取城市首字母')
				this.cityWords=[];
                for(var i=0;i<this.cityInfo.length;i++){
                    var temp = this.cityInfo[i].pinyin;
					// cityWords不存在的时候
					if(this.cityWords.indexOf(temp[0]) == -1){
						// console.log(temp)
						this.cityWords.push(temp[0]);
						// 排序
						this.cityWords = this.cityWords.sort();
					}
                }
				// console.log(this.cityWords)
				return this.cityWords;
            },
			
        },
		methods:{
			//函数实现功能：输入json数据、字母字符串，返回城市名称数组
			cityDatas: function(words) {
				var msg = this.cityInfo;
				words = words.toString().toLowerCase();
				words.toString().split("").map((word, num) => {
					msg = msg.filter((value, index) => {
						var str = value.pinyin.charAt(num).toLowerCase();
						return word == str;
					})
				})

				return msg;
			}
		},
		

    }
</script>

<style scoped lang="scss">
	@import "../../../styles/_base.scss";
	.city-menu {
		background: #f5f5f5;
	}
	.city-index {
		line-height: .54rem;
		padding-left: .3rem;
		color: #616161;
		font-size: .26rem;
	}
	.city-item {
		line-height: .76rem;
		padding-left: .2rem;
		font-size: .28rem;
		color: #212121;
		background: #fff;
	}
	.border-bottom{

		@include one-pixel(#ccc);

	}
</style>