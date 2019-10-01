<template>
	<view class="bigbox">
		<view class="context">
			<!--面板1显示用户头像用户名称以及商品介绍-->
			<view class="panel">
				<view class="head head-1">
					<view>
						<image class="head-img"  src="../../../static/bg/img_2_tx_bmkj.png"></image>
					</view>
					<view>
						<text>王美丽</text>
					</view>
				</view>
				<view class="hr"></view>
				<view class="head">
					<view>
						<image class="book"  src="../../../static/bg/img_3_bmkj.png"></image>
					</view>
					<view class="text-info">
						<view class="text-info-1">二手教科书</view>
						<view class="text-info-2">9成新二手教科书出售，期末考试必......</view>
						<view class="text-info-3">￥12</view>
					</view>
				</view>
			</view>
			<!--面板2显示砍价按钮和砍价进度条-->
			<view class="pane2" @click="showBanner()">
				<view class="slidio">
					<view></view>
				</view>
				<view class="btn">
					<button type="warn" @click="showBanner()" disabled="true">帮砍一刀</button>
				</view>
			</view>
			
			
		<!-- 弹出层 -->
				<view  class="uni-banner"  v-if="bannerShow">
					<!--砍价banner-->
					<view v-if="bannertype">
						<!-- x -->
						<view class="uni-banner-img-box" >
							<image class="uni-banner-img" src="../../../static/bg/img_2_tx_bmkj.png"></image>
						</view>
						<!-- 图 -->
						<view class="uni-banner-msg">
							<text>恭喜你帮砍<text style="color: #DD524D;">2</text>元</text>
						</view>
						<!-- 按钮键 -->
						<view class="uni-banner-btn-img"  >
							<image  class="uni-banner-btn"  src="../../../static/btn/关闭.png" @tap="closeBanner()"></image>
						</view>
					</view>
					<!--提示banner-->
					<view v-if="!bannertype">
						<!-- x -->
						
						<!-- 图 -->
						<view class="uni-banner-msgtitle">
							<view><text>提示</text></view>
							<view>
								<text style="font-size: 15px;color: #999999;">请先关注“xx校园公众号方可帮好友砍价”</text>
							</view>
							<view>
								<button  type="warn" @click="showBanner()" disabled="true">去关注</button>
							</view>
						</view>
						<!-- 按钮键 -->
						<view class="uni-banner-btn-img"  >
							<image  class="uni-banner-btn"  src="../../../static/btn/关闭.png" @tap="closeBanner()"></image>
						</view>
					</view>
					
				</view>	
		</view>
			<!-- 做黑色阴影颜色 -->
				<view class="uni-mask" v-if="bannerShow"></view>
			<!-- 弹出层 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerShow:false,
				bannertype:false,
			}
		},
		onLoad() {

		},
		methods: {
			closeBanner:function(){
				this.bannerShow=false;
			},
			showBanner:function(){
				this.bannerShow=true;
			}
		}
	}
</script>

<style>
	.bigbox {
		position:fixed ;width: 100%;height: 100%;background: url('../../../static/bg/img_1_bg_bmkj.png');background-size: 100%
	}
	.context{
		height: 85%;width: 90%;margin: 10% 5% 5% 5%;background: #FFFFFF;border-radius: 10px;padding-top: 0.5%;
	}
	.panel{
		width: 90%;height: 30%;margin:5% 5% 5% 5% ;background: #F1F1F1;border-radius: 10px;
	}
	.pane2{
		width: 90%;height: 60%;margin:5% 5% 5% 5% ;border-radius: 10px;
	}
	.hr{
		width: 90%;height: 1px;margin: auto;background: #C8C7CC;
	}
	.head-img{
		width: 40px;height: 40px;border-radius: 20px;margin: 10px;
	}
	.head-1{
		line-height: 60px;height: 60px;color: #000000;font-weight: 500;
	}
	.head{
		display: flex;
	}
	.head>view{
		flex-direction: row;
	}
	.book{
		margin:10px ;width: 60px;height: 60px;
	}
	.text-info{font-size: 12px;
	}
	.text-info-1{
		padding-top: 10px;color: #333333;
	}
	.text-info-2{
		margin-top: 5px;color: #808080;
	}
	.text-info-3{
		margin-top: 10px;color: #000000;
	}
	.slidio{
		width: 80%;height: 10px;border-radius: 5px;margin:20% auto 30%;background: #F1F1F1;
	}
	.slidio view{
		width: 60%;height: 10px;border-radius: 5px;background: #FFDA28;
	}
	.btn{
		width: 65%;border-radius: 20px;overflow: hidden;margin: 5% auto;
	}
	.btn button{
		background: #FF8070;
	}
	/* 弹出层形式的广告 */
		.uni-banner {
			width: 80%;height: 30%;position: fixed;left: 10%;top:30%;z-index: 99;text-align: center;
		}
		.uni-mask{
			 z-index: 1;background: rgba(0, 0, 0, 0.6);
		}
		.uni-banner-img{
			width: 60px;height:60px;z-index: 200;
		}
		.uni-banner-img-box{
			width: 60px;height:60px; border-radius:30px;border: 2px solid #FFFFFF;overflow: hidden;margin: 0 auto;z-index: 200;
		}
		
		.uni-banner-msg{
			background: #FFFFFF;height: 35%;width: 100%;border-radius: 10px;position: relative;top:-30px;padding: 25% 0 15% 0;
		}
		.uni-banner-btn-img{
			margin:30upx 0; margin-bottom:68upx;
		}
		.uni-banner-btn{
			width: 40px;height: 40px;
		}
		.uni-banner-msgtitle{
			text-align: center;line-height: 40px;width: 100%;border-radius: 10px;background: #FFFFFF;
		}
		.uni-banner-msgtitle>view{
			padding: 10px 0;
		}
		.uni-banner-msgtitle>view>button{
			width: 40%;
			height: 40px;
			border-radius: 20px;
		}
		
</style>
