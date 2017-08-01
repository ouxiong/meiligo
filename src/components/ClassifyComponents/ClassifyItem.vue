<template>
  <ul class="itemWarp">
        <li class="item " v-for="(item,i) in items">
            <!-- <router-link class="AItem" to="/classifylist/">  -->
            <router-link class="AItem" :to="{path:'/classifylist',query:{id:pid[i]}}"> 
                <div>
                    <img  :src="item.image" alt="">
                </div>  
                <b class="img-title">{{item.title}}</b>  
            </router-link>
        </li>
        
        
  </ul>
</template>

<script>
import axios from  'axios'
import jsonp from "jsonp"

export default {
  data(){
      return{
          items:[],
          pid:[23020,23023,23021,23022,23019,23027,23018,23017,43814,52689,23525,23025]

      }
  },
  methods:{
      
      getItem(){
          var that = this;
          jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1501551718975', {callback:'jsonp1'}, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                // console.log(data.value["0"]);
               that.items = data.value;
            }
            });
           
      },
    //   getData(){
    //       jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid='+ this.pid,{callback:'jsonp1',},function(err, data){
    //           if(data){
    //               console.log(data)
    //           }
    //       })
    //   }
  },
  mounted(){
      this.getItem()
  }
}
</script>

<style lang="scss">
    @import '../../styles/_base.scss';
	.itemWarp{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .item{
            width: 25%;
            height: 2.46rem;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            background: #fff;
            border-right: 0.02rem solid #eee;
            border-bottom: 0.02rem solid #eee;
            .AItem{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
               
                img{
                    width:1.33rem;
                    height: auto;
                }
                b{
                    position: absolute;
                    bottom: .1rem;
                    width: 100%;
                    font-size: 0.22rem;
                    color: #666;
                    text-align: center;
                    font-weight: normal;
                    line-height: 2;
                    background: rgba(255, 255, 255, 0.8);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    // .borderBotton{
    //     position: relative;
    //     &:after{
    //         content: '';
    //         display: block;
    //         width: 100%;
    //         height:1px;
    //         background:#eee;
    //         position: absolute;
    //         left: 0;
    //         bottom: 0;
    //     }
    // }
    
	
</style>