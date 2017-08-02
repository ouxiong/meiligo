<template>
<div>
    <div v-for="item in itemData">
        <div class="classifyTitle">{{item.info.title}}</div>
        <ul class="itemWarp">
            <li class="item" v-for="elem in item.list">
                <router-link class="AItem" to="/goodslist">   
                
                    <div>
                        <img  :src="elem.image" alt="">
                    </div>  
                    <b class="img-title">{{elem.title}}</b>  
                </router-link>
            </li>
            
            
    </ul>
    </div> 
</div> 
</template>

<script>

export default {
    props:['itemData'],
    data(){
        return{

        }
    },

    mounted(){
        // console.log(this.itemData)
    }
}
</script>

<style scoped lang="scss">
.classifyTitle{
    width:100%; 
    overflow: hidden;
    padding: .2rem;
    color: #333;
    font-size: 0.32rem;
    font-weight: normal;
    float: left;
    background: #fff;
    border-bottom: 0.02rem solid #eee;
}
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
</style>