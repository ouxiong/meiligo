<template>
	<section class="mine-main">
		<div class="mine-main-box">
			<div class="mine-main-qq">
				<a href="/user/connect/qq" class="mine-main-qq-btn"></a>
			</div>
		</div>
		<div class="mine-main-login">
			<span class="mine-main-login-title">美丽GO账号登录</span>
		</div>
		<div class="mine-form">
			<form>
				<div class="mine-form-main">
					<div class="mine-form-main-name from-text">
						<input type="text" class="login-name" placeholder="昵称/邮箱/手机号"/>			
					</div>
					<div class="mine-form-main-pwd from-text">
							<input type="password" class="login-pwd" placeholder="密码"/>	
					</div>
				</div>		
				<div class="mine-form-main-btn">
					<mt-button type="danger">登录</mt-button>	
				</div>
				
			</form>
		</div>
		<p class="clearfix">
			<a href="//portal.meilishuo.com/findpwd1" class="findpwd login_idea fr">忘记密码?</a>
		</p>
	</section>
</template>

<script>
export default {
  name: 'mine-main',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
	.mine-main{
		background: #fff;
		.mine-main-box{
			padding: .7rem .3rem 0;
			.mine-main-qq{
				text-align: center;
				>a{
			    display: inline-block;
			    width: 2.1rem;
			    height: 2.1rem;
			    margin: 0 .25rem;
			    border-radius: 50%;
			    background: url("http://s16.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png") center no-repeat;
    			background-size: 100%;
				}
			}
		}
		.mine-main-login{
			margin-bottom: -.27rem;
	    padding: .6rem .3rem 0;
	    .mine-main-login-title{
	    	display: inline-block;
		    width: 100%;
		    text-align: center;
		    color: #666;
		    font-size: .25rem;
		    position: relative;
		    &:before{
		    	content: '';
			    width: 2.38rem;
			    border-bottom: 1px solid #d8d8d9;
			    position: absolute;
			    top: .15rem;
			    left: 0;
		    }
		    &:after{
		    	content: '';
			    width: 2.38rem;
			    border-bottom: 1px solid #d8d8d9;
			    position: absolute;
			    top:.15rem;
			    right:0;
		    }
	    }
		}
		.mine-form{
			padding: .6rem .3rem .24rem;
			.mine-form-main{
				margin-bottom: .3rem;
				.from-text{
			    font-size: .32rem;
    			background: #f2f2f2;
    			padding: .23rem .3rem;
			    margin-bottom: .2rem;
			    -webkit-border-radius: 3px;
			    border-radius: 3px;
			    line-height: .32rem;
			    >input{
			    	height: .44rem;
				    line-height: .44rem;
				    width: 100%;
				    -webkit-box-flex: 1;
				    display: block;
				    border: 0;
				    color: #444;
				    font-size: .32rem;
    				background: #f2f2f2;
			    	border: none;
			    	outline: none;
			    	
			    }
				}
			}
			.mine-form-main-btn{
				button{
			    width: 100%;
			    font-size: .36rem;
			    height: .9rem;
			    line-height: .9rem;
				}
			}
		}
		.clearfix{
			>a{
				float:right;
				color: #494949;
		    font-size: .28rem;
		    width: 50%;
		    text-align: right;
		    padding-right: .3rem;
			}
		}
	}
</style>