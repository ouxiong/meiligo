/* 商品参数 */
<template>
  <div >
    <div class="panel-item" id="PanelParameter">
      <!-- 商品详情-商品参数 -->
      <div class="detail-parameter"> 
        <!-- 顶部 --> 
        <div class="parameter-top"></div>  
        <!-- 标题 --> 
        <div class="parameter-head plr30"> 
            <span class="title">商品参数</span>
        </div>   
        <!-- <h2 class="title fold">产品参数</h2> --> 
        <div class="parameter-wrap"> 
          <!-- 尺码表格 -->  
          <div class="size-list">  
              <div class="item"> 
                  <table>  
                      <tbody>  
                        <tr v-for="item in goodsData?goodsData.itemParams.rule.tables[0]:[]">  
                          <td v-text="item[0]"></td>  
                          <td v-text="item[1]"></td>  
                        </tr>  
                      </tbody> 
                  </table> 
              </div>  
          </div>  
          <!-- 参数 -->  
          <div class="param-list"> 
            <ul >  
              <li v-for=" item in goodsData?goodsData.itemParams.info.set:[]"> 
                <span class="param-name" v-text="item.key"></span> 
                <p class="param-info" v-text="item.value"></p> 
              </li>  
                 
            </ul> 
          </div>    
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{}
    },
    computed:{
        ...mapState(['goodsData'])
    },
}
</script>

<style scoped lang="scss">
	.parameter-top {
    height: .1rem;
    border-top: 1px solid #dedede;
    background: #f2f5f8;
  }
  .detail-wrap .plr30 {
    padding-left: .3rem;
    padding-right: .3rem;
  }
  .parameter-head .title {
    display: block;
    line-height: .3rem;
    padding: .4rem 0 .3rem .3rem;
    color: #333;
    font-size: .3rem;
    
}  
.parameter-wrap .size-list {
    padding: 0 .3rem;
    table {
        width: 100%;
        background: #fff;
        border-collapse: collapse;
        border-spacing: 0;
    }
     tr {
    border-bottom: 1px solid #f4f4f4;
    }
    td:first-child {
        width: 100px;
    }
    td {
        font-weight: 400;
        line-height: 38px;
        text-align: left;
        color: #727272;
    }
}
.param-list {
    padding: 0 .3rem;
    background: #fff;
    border-top: 1px solid #e6e6e6;
     li {
    display: -webkit-flex;
    display: -webkit-box;
    line-height: .8rem;
    border-bottom: 1px solid #f4f4f4;
    .param-name {
        display: inline-block;
        width: 2rem;
        color: #727272;
    }
    .param-info {
        -webkit-flex: 1;
        -webkit-box-flex: 1;
        color: #eb4868;
    }
}
}
	
</style>
