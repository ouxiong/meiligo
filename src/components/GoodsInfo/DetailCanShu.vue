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
                        <tr>  
                          <td>尺码</td>  
                          <td>均码</td>  
                        </tr>  
                        <tr>  
                            <td>肩宽</td>  
                            <td>40</td>  
                        </tr>  
                        <tr>  
                            <td>衣长</td>  
                            <td>90</td>  
                        </tr>  
                        <tr>  
                            <td>胸围</td>  
                            <td>105</td>  
                        </tr>  
                      </tbody> 
                  </table> 
              </div>  
          </div>  
          <!-- 参数 -->  
          <div class="param-list"> 
            <ul v-for="item in 5">  
              <li> 
                <span class="param-name">图案</span> 
                <p class="param-info">抽象图案,印花/花卉</p> 
              </li>  
              <li> 
                <span class="param-name">颜色</span> 
                <p class="param-info">白底黄花,黑底羽毛,黑底牡丹</p> 
              </li>  
              <li> 
                <span class="param-name">袖型</span> 
                <p class="param-info">喇叭袖</p> 
              </li>    
            </ul> 
          </div>    
        </div> 
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{}
    }
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
