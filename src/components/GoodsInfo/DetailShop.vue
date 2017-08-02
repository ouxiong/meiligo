<template>
  <div>
    <div>
        <div class="shop-info"> 
            <div class="shop-top"></div>
            <!-- 头像 -->
            <div class="clearfix"> 
                <a class="info-avatar" href="http://m.meilishuo.com/shop/index/1hxoe"> 
                <img src="http://s3.mogucdn.com/b7/avatar/150301/178c03_ie2weyzwgnsgey3bmyytambqhayde_200x200.jpg_100x100.jpg"> 
                </a> 
                <div class="flex shop-info-container"> 
                    <div class="shop-info-title"> 
                        <p class="title"> LOLO大小姐  </p> 
                    </div> 
                    <div  class="shop-collect " @click="changeMark"> 
                        <span :class="[this.isMarked?'not-marked':'has-marked']">已收藏</span> 
                        <span :class="[(!this.isMarked)?'not-marked':'has-marked']"> 
                            <span class="plus">+</span> 
                        收藏 
                        </span> 
                    </div> 
                </div> 
            </div> 
            <!-- 内容 --> 
            <div class="info-content"> 
                <div class="count"> 
                    <div class="sale">
                        <span class="fz-18">21329</span>
                        <br>总销量
                    </div> 
                    <div class="all">
                        <span class="fz-18">179</span>
                        <br>全部宝贝
                    </div> 
                </div>  
                <!-- 评价 -->
                 <div class="shop-evaluate"> 
                     <ul>  
                        <li> 
                             <span>描述相符</span>  
                             <em>4.61</em> 
                             <i>高</i> 
                        </li>  
                        <li> 
                            <span>价格合理</span>  
                            <em>4.62</em> 
                            <i>高</i>  
                        </li>  
                        <li> 
                            <span>质量满意</span>  
                            <em>4.59</em> 
                            <i>高</i>  
                        </li>  
                    </ul> 
                </div>
            </div> 
            <div class="info-goshop"> 
                <a href="http://m.meilishuo.com/shop/index/1hxoe">进店逛逛</a> 
            </div>  
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
      return{
        isMarked:false
      }
  },
  methods:{
      changeMark:function(){
          this.isMarked = (!this.isMarked)
      }
  }
}
</script>

<style scoped lang="scss">
    .shop-info {
        overflow: hidden;
        position: relative;
        margin-top: .4rem;
        padding: 0 .2rem;
        .shop-top{
            -width: 7.5rem;
            margin-left: -0.2rem;
            height: .1rem;
            border-top: 1px solid #f2f5f8;
            background: #f2f5f8;
        }
        .info-avatar {
            float: left;
            border: 1px solid #ddd;
            border-radius: 50%;
            img {
                border-radius: 50%;
                width: .9rem;
                height: .9rem;
                border: none;
                vertical-align: middle;
            }
        }
        .shop-info-container {
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -moz-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -moz-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            .shop-info-title {
                font-size: .32rem;
                overflow: hidden;
                margin-left: .2rem;
                line-height: .9rem;
            }
            .shop-collect {
                width: 1.3rem;
                height: .5rem;
                line-height: .5rem;
                border-radius: .5rem;
                text-align: center;
                background: #f69;
                color: #fff;
                font-size: .28rem;
                .has-marked {
                    display: none;
                }
                .not-marked {
                    display: block;
                }
            }
        }
        .info-content {
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            margin-top: .18rem;
            margin-bottom: .25rem;
            font-size: .12rem;
            color: #333;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -moz-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 100%;
            .count {
                border-right: 1px solid #eee;
                text-align: right;
                width: 50%;
                box-sizing: border-box;
                .sale {
                    display: inline-block;
                    font-size: .24rem;
                    margin-right: .4rem;
                    max-width: 1.1rem;
                    .fz-18 {
                        font-size: .36rem;
                        margin-bottom: .12rem;
                        display: inline-block;
                    }
                }
                .all {
                    margin-right: 0.6rem;
                    max-width: 1.1rem;
                    display: inline-block;
                    font-size: .24rem;
                    .fz-18 {
                        font-size: .36rem;
                        margin-bottom: .12rem;
                        display: inline-block;
                    }
                }
            }
            .shop-evaluate {
                line-height: 1.7;
                padding-left: 0.6rem;
                width: 50%;
                li span {
                    color: #666;
                    font-size: .26rem;
                    display: inline-block;
                    vertical-align: middle;
                }
                 li em {
                    color: #f13e3a;
                    font-size: .26rem;
                    margin-left: .1rem;
                    display: inline-block;
                    min-width: .502rem;
                    font-style: normal;
                    vertical-align: middle;
                }
                li i {
                        width: .24rem;
                        height: .24rem;
                        line-height: .24rem;
                        margin-left: .2rem;
                        color: #f6f6f6;
                        font-size: .2rem;
                        text-align: center;
                        background: #f13e3a;
                        display: inline-block;
                        vertical-align: middle; 
                        font-style: normal;
                    }
            }
        }
        .info-goshop{
         text-align: center;   
            a {
                display: inline-block;
                width: 3rem;
                height: .6rem;
                line-height: .6rem;
                -webkit-border-radius: .6rem;
                -moz-border-radius: .6rem;
                border-radius: .6rem;
                color: #666;
                font-size: .28rem;
                background: #f2f5f8;
            }
        }
    }
	
</style>
