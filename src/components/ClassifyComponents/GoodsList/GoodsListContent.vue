<template>
  <div>
    
      <div class="kong"></div>
      <div class="contentWarp"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <div class="item" v-for="item in listData">
              <router-link class="imgWarp" to="/detail">
                <img :src="item.show.img" alt="">
                <div class="goods_info">
                    <p class="title">{{item.title}}</p>
                    <p class="price"> 
                        <span class="current">{{item.price}}</span>
                    </p> 
                    <p class="sale_num">{{item.sale}}人已购买</p> 
                </div>
              </router-link>
            <!--.data.list["0"].show.img  -->
          </div>
      </div>
    
  </div>
</template>

<script>  
  import { InfiniteScroll } from 'mint-ui';
  import jsonp from "jsonp"
  export default {  
    data:function() {  
      return {    
        
        listData:[],
        frame:0,
        page:1,
        jsonType:1
      }  
    },  
    mounted(){  
      // this.getData()
    },  
    methods: {    
     loadMore() {
      this.loading = true;
      this.getData()
    },
      getData:function(){
        var that = this;
          jsonp('http://list.meilishuo.com/search?frame='+this.frame+'&page='+this.page+'&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=1b924bf0-6a82-4ffa-98a7-9e3e2ca66728&fcid=10062770&_=1501592099000', {callback:'jsonp'+this.jsonType}, function (err, res) {
            if(res){
              // console.log(res.data.list.length)
             that.numAdd();
              res.data.list.forEach(function(e){
                // console.log(e)
                that.listData.push(e)
              })
            }
            // console.log(that.listData.length)
            });
      },
      numAdd:function(){
        this.frame+=1;
        this.page+=1;
        this.jsonType+=1;

      }  
       
    }  
  }  
</script>  

<style scoped lang="scss">
.kong{
  width: 100%;
  height: 0.84rem;
  background: #0f0;
}
.contentWarp{
  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 50%;
    height: 6.08rem;
    position: relative;
    overflow: hidden;
    .imgWarp{
      width: 96%;
      margin: 0 0 4% 2%;
      background: #fff;
      padding-bottom: 2%;
      img{
        width: 100%;
        height: auto;
      }
      .goods_info{
        width: 100%;
        text-align: center;
        font-size: 0.28rem;
        margin-top: 3px;
        margin-bottom: 3px;
         background: #fff;
         position: absolute;
         left: 0;
         bottom: 0;
        .title{
          display: block;
          width: 100%;
          margin-top: 0.16rem;
          font-size: 0.24rem;
          line-height: .26rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          overflow: hidden;
          color: #666;
         
        }
        .price{
              margin-top: .1rem;
              height: auto;
              .current{
                margin-right: .1rem;
                color: #FF3366;
                text-align: center;
                font-size: 0.28rem;
                line-height: 1;
              }
        }
        .sale_num{
          margin-top: .15rem;
          color: #999;
          text-align: center;
          font-size: 0.22rem;
          line-height: 1;
        }
      }
    }
  }
}
	
</style>
