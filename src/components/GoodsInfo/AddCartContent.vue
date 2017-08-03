

<template>
<div class="goods-sku" >
    <div class="content"> 
        <div class="sku-title">  
            <div class="sku-title-img"> 
                <img src="http://s3.mogucdn.com/mlcdn/55cf19/170504_7f6k2d740a8h65l4fg178739d4bl9_640x960.jpg_160x240.v1cAC.jpg" alt="">
            </div>  
            <div class="sku-title-desc"> 
                <span class="sku-title-text">时尚中长款喇叭袖防晒衣女沙滩薄款雪纺开叉上衣开衫披肩外套</span> 
                <span class="sku-title-price"> 
                    <span class="price">¥39.90</span> 
                    <span class="sku-stock">库存<span class="stock">198</span>件</span> 
                </span>  
                <span class="sku-title-addon"></span> 
            </div> 
            <span class="close">╳</span> 
        </div> 
        <div class="scroll">  
            <div class="sku-list"> 
                <dl class="style clearfix"> 
                    <dt>颜色：</dt> 
                    <dd> 
                        <ol class="J_StyleList style-list clearfix">
                            <li class="c" data-id="1" title="白底黄花"> 白底黄花</li>
                            <li class="" data-id="2" title="黑底羽毛"> 黑底羽毛</li>
                            <li class="" data-id="3" title="黑底牡丹"> 黑底牡丹</li>
                        </ol>                     
                    </dd> 
                </dl> 
                <dl class="size clearfix"> 
                    <dt>尺码：</dt> 
                    <dd> 
                        <ol class="J_SizeList size-list clearfix">
                            <li class="c" data-id="100" title="均码"> 均码</li>
                        </ol> 
                    </dd> 
                </dl> 
            </div>  
            <div class="sku-num"> 
                <p class="title">数量:</p> 
                <div class="clearfix"> 
                    <div class="sku-counter"> 
                        <span class="num-reduce num-disable"> 
                            <b class="reduce-icon">－</b> 
                        </span> 
                        <em class="num-input">1</em> 
                        <span class="num-add"> 
                            <b class="add-icon">＋</b>                         
                        </span> 
                    </div>  
                </div> 
            </div> 
            <div class="action"> 
                <span class="confirm">确定</span> 
            </div> 
            <form style="display:none" action="http://m.meilishuo.com/order/orderConfirm" method="GET"> 
            <input type="hidden" name="data" id="form-data"> 
            <input class="go_charge js-action js-charge-num" type="submit" value="去结算"> 
            </form> 
        </div>  


    </div>

</div>
</template>

<script>

export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
.goods-sku {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: block;
    visibility: hidden;
}
	.content {
    display: block;
    background: #fff;
    width: 100%;
    max-height: 75%;
    position: absolute;
    bottom: 0;
    display: -moz-box;
    display: -webkit-box;
    display: box;
    box-orient: vertical;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    .sku-title {
        margin: 0 .4rem;
        display: -moz-box;
        display: -webkit-box;
        display: box;
        position: relative;
        top: 0;
        background: #fff;
        padding: .4rem 0;
        border-bottom: 1px solid #f2f5f8;
        overflow: auto;
        .sku-title-img,  .sku-title-img img {
        display: block;
        width: 3.2rem;
        height: 4.8rem;

        }
        .sku-title-img{
            position: relative;
        }
        .sku-title-desc {
            margin-left: .4rem;
            width: 8.4rem;
            display: block;
            position: relative;
            .sku-title-text {
                font-size: .56rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-height: 1.4;
            }
            .sku-title-price {
                color: #f69;
                font-size: .8rem;
                margin-top: .4rem;
                .sku-stock {
                    font-size: .5rem;
                    color: #999;
                    margin-left: 10px;
                    line-height: 14px;
                    margin-top: 6px
                }
            }
            .close {
                color: #bbb;
                font-size: .88rem;
                font-family: serif;
                position: absolute;
                right: 0;
                top: .4rem;
                text-align: right;
                cursor: pointer;
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }
    /* scroll */
}	
</style>
