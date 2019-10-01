<template>
	<view class="container">
		<view class="Sweep-code-box">
			<view class="header">
				<view>
					<image style="width: 60px;height: 60px;" src="../../../static/btn/img_sctp_fb.png"></image>
					
				</view>
				<view>
					<text style="font-size: 14px;color: #555555;">上传图片/视频</text>
				</view>
			</view>
		</view>
		<form>
			<view class="form-box">
				   <view class="uni-form-item">
				       <view class="title">商品分类</view>
					   <picker :range="goodtype" @change="goodsChange">{{ goodtype[goodtypeIndex] }} </picker>
				       <!--<input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" @tap="cs()" class="uni-input" focus placeholder="选择分类 >" />-->
				   </view>
				   <view class="uni-form-item">
				       <view class="title">商品名称</view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写商品名称" />
				   </view>
				   <view class="uni-form-item">
				       <view class="title">购买时价格</view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写购买价格" />
				   </view>
				   <view class="uni-form-item">
				       <view class="title">售卖价格</view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写出售价格" />
				   </view>
				   <view class="uni-form-item">
				       <view class="title">数量</view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写数量" />
				   </view>
				   <view class="uni-form-item">
				       <view class="title">配送方式</view>
				      <picker :range="Deliverytype" @change="DeliveryChange">{{ Deliverytype[DeliveryIndex] }} </picker>
				   </view>
				   <view class="uni-form-item">
				       <view class="title">配送费<text>(选填)</text></view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="填写费用" />
				   </view>
				   <view class="uni-form-item">
				       <view class="title">每本增加配送费用<text>(选填)</text></view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="填写费用" />
				   </view>
				   <view class="uni-form-item">
				       <view class="title">联系电话</view>
				       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写电话" />
				   </view>
				   <view style="height: 40px;padding: 0 10px;">
				    <textarea placeholder-style="color:#C0C0C0;font-size:14px;" style="color:#C0C0C0 ;font-size: 13px;" placeholder="填写备注(商品介绍,新旧程度)"/>
				   </view>
			</view>
			<view style="padding:10px;">
				<button type="warn" @click="showBanner()" style="background: #FF8070;width: 70%;height: 40px;border-radius: 20px;">发布</button>
			</view>
			
		</form>
		<!-- 做黑色阴影颜色 -->
			<view class="uni-mask" v-if="bannerShow"></view>
		<!-- 弹出层 -->
		<view  class="uni-banner"  v-if="bannerShow">
			<!-- 图 -->
			<view class="uni-banner-msgtitle" v-if="titletype=='未验证'">
				<view><text>提示</text></view>
				<!--认证-->
			
					<view>
						<text style="font-size: 15px;color: #999999;">你还没有进行学生认证,请认证后发布商品</text>
					</view>
					<view>
						<button  type="warn" @click="showBanner()" disabled="true">去认证</button>
					</view>
			</view>
			
			<view class="uni-banner-msgtitle" v-if="titletype=='未支付'">
				<view><text>提示</text></view>
				<!--支付-->
					<view>
						<text style="font-size: 15px;color: #999999;">发布前请先交保证金￥456</text>
					</view>
					<view>
						<button  type="warn" @click="showBanner()" disabled="true">去支付</button>
					</view>
			</view>
			
			<view class="uni-banner-msgtitle" v-if="titletype=='已提交'">
				<view><text>提示</text></view>
				<!--审核-->
					<view>
						<text style="font-size: 15px;color: #999999;">您的发布已提交等待后台审核后方可发布</text>
					</view>
					<view>
						<button  type="warn" @click="showBanner()" disabled="true">确认</button>
					</view>
			</view>
			<!-- 按钮键 -->
			<view class="uni-banner-btn-img"  >
				<image  class="uni-banner-btn"  src="../../../static/btn/关闭.png" @tap="closeBanner()"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerShow:false,
				titletype:'已提交',
				goodtype:["选择分类 >","教科书","课外书","明学文学"],
	            goodtypeIndex:0,
				Deliverytype:["请选择配送方式 >","校园配送","校园自取","包邮","邮费自理"],
				DeliveryIndex:0
			}
		},
		methods: {
			showBanner:function(){
				this.bannerShow=true
				uni.hideTabBar()
						},
			closeBanner:function(){
				this.bannerShow=false
				uni.showTabBar()
			},
			
			 goodsChange:function(e){
				this.goodtypeIndex = e.detail.value;
			 },
			 DeliveryChange:function(e){
			 	this.DeliveryIndex = e.detail.value;
			 }
		}
	}
</script>

<style>
.container{
	position: absolute;width: 100%;height: 100%;background: #F8F8F8;
}
.Sweep-code-box{
	width: 100%;
	height: 23%;
	background: #FFFFFF;
	
}
.header{
	padding-top: 5%;
	text-align: center;
}
.form-box{
	width: 100%;
	height: 65%;
	margin-top: 2%;
	background: #FFFFFF;
}
.uni-form-item{
	display: flex;
	height: 35px;
	border-bottom: 1px solid #C0C0C0;
	font-size: 14px;
	line-height: 30px;
	padding: 0 10px;
	color: #555555;
	position: relative;
}
.uni-form-item input{
	width: 40%;
	position: absolute;
	right: 10px;
	bottom: 8px;
	color: #C0C0C0;
	font-size: 14px;
	text-align: right;
}
.uni-form-item picker{
	width: 40%;
	position: absolute;
	right: 10px;
	color: #C0C0C0;
	font-size: 14px;
	text-align: right;
}
.uni-form-item text{
	color: #C0C0C0;
}
.uni-mask{
	z-index: 1;background: rgba(0, 0, 0, 0.6);
}
.uni-banner {
	width: 80%;height: 30%;position: fixed;left: 10%;top:30%;z-index: 99;text-align: center;
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
.uni-banner-btn-img{
	margin:30upx 0; margin-bottom:68upx;
}
.uni-banner-btn{
	width: 40px;height: 40px;
}
</style>
