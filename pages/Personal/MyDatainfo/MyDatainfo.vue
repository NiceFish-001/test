<template>
	<view class="container">
		<view class="Sweep-code-box">
			<view class="header">
				<view>
					<image style="width: 60px;height: 60px;" src="../../../static/btn/img_tx_grzl.png"></image>
				</view>
				<view>
					<text style="font-size: 14px;color: #FFFFFF;">点击上传图像</text>
				</view>
			</view>
		</view>
	
			<view class="info-list">
				   <view class="uni-info-item">
				       <view class="title">昵称</view>
					   <text>Mike</text>
				   </view>
				   <view class="uni-info-item" @tap="ToPhoneBind()">
				       <view class="title">绑定手机号</view>
				       <image class="uni-form-item-image" src="../../../static/icon/icon_next_cjwt.png"></image>
				   </view>
				   <view class="uni-info-item" @tap="ToProve()">
				       <view class="title">我的认证</view>
				     <image class="uni-form-item-image" src="../../../static/icon/icon_next_cjwt.png"></image>
				   </view>
				   <view class="uni-info-item" @tap="ToMember()">
				       <view class="title">会员</view>
				       <image class="uni-form-item-image" src="../../../static/icon/icon_next_cjwt.png"></image>
				   </view>
				   <view class="uni-info-item" @tap="ToWallet()">
				       <view class="title">钱包</view>
				       <image class="uni-form-item-image" src="../../../static/icon/icon_next_cjwt.png"></image>
				   </view>
				   <view class="uni-info-item" @tap="ToAddress()">
				       <view class="title">收获地址</view>
				        <image class="uni-form-item-image" src="../../../static/icon/icon_next_cjwt.png"></image>
				    </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			ToPhoneBind:function(){
				uni.navigateTo({
				    url: '../PhoneBind/PhoneBind'
				});
			},
			ToProve:function(){
				uni.navigateTo({
				    url: '../Prove/Prove'
				});
			},
			ToMember:function(){
				uni.navigateTo({
					url:'../Member/Member'
				})
			},
			ToWallet:function(){
				uni.navigateTo({
					url:'../Wallet/Wallet'
				})
			},
			ToAddress:function(){
				uni.navigateTo({
					url:'../address/address'
				})
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
	background: url('../../../static/bg/img_bg_grzl.png') no-repeat;background-size: 100%
}
.header{
    width: 40%;
	height: 100%;
	padding-top: 20px;
	
	text-align: center;
}
.info-list{
	width: 100%;
	height: 77%;
	background: #FFFFFF;
}
.uni-info-item{
	display: flex;
	height: 40px;
	border-bottom: 1px solid #C0C0C0;
	font-size: 14px;
	line-height: 40px;
	padding: 0 10px;
	color: #555555;
	position: relative;
}
.uni-info-item text{
	position: absolute;
	right: 10px;
	line-height: 40px;
	color: #C8C7CC;
}
.uni-form-item-image{
	position: absolute;
	right: 10px;
	width: 10px !important;
	height: 20px !important;
	margin-top:10px ;
}


</style>
