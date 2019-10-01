<template>
	<view>
		<view class="form-box">
			   <view class="uni-form-item">
			       <view class="title">收获人姓名</view>
			       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写收货人姓名" />
			   </view>
			   <view class="uni-form-item">
			       <view class="title">手机号码</view>
			       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写联系方式" />
			   </view>
			   <view class="uni-form-item">
			       <view class="title">收货地址</view>
			       <input placeholder-style="color:#C0C0C0;font-size:14px;text-align: right;" class="uni-input" focus placeholder="请填写收获地址" />
			   </view>
			   <view style="height: 40px;padding: 0 10px;">
			    <textarea placeholder-style="color:#C0C0C0;font-size:14px;" style="color:#C0C0C0 ;font-size: 13px;" placeholder="详细街道住址"/>
			   </view>
		</view>
		<view class="defolter">
			<view style="text-align: left;padding-left: 30rpx;">设为默认收获地址</view>
			<view style="text-align: right;">
				<switch  color="#FF8070" class="switch"></switch>
			</view>
		</view>
		
		<view class="delete">
			<text>删除地址</text>
		</view>
		
		<view class="btn">
			<button type="default">保存</button>
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
			
		}
	}
</script>

<style>
page{
	background: #EEEEED;
}
.btn{
	position: fixed;
	height: 80rpx;
	width: 100%;
	display: flex;
	bottom: 5%;
	
}
.btn>button{
	width: 90%;
	font-size: 30rpx;
	line-height: 80rpx;
	background: #FF8070;
	color: #FFFFFF;
	border-radius: 20px;
}
.delete{
	position: fixed;
	height: 80rpx;
	width: 100%;
	top:52%;
	text-align: center;
	background:#FFFFFF;
	font-size: 30rpx;
	line-height: 80rpx;
}
.defolter{
	position: fixed;
	height: 80rpx;
	width: 100%;
	display: flex;
	top:45%;
	background:#FFFFFF;
	font-size: 30rpx;
	line-height: 80rpx;
}
.defolter view {
	width: 50%;
	
}

.switch{
		transform: scale(0.7,0.7);
}
.form-box{
	position: absolute;
	width: 100%;
	height: 40%;

	background: #FFFFFF;
}
.uni-form-item{
	display: flex;
	height: 45px;
	border-bottom: 1px solid #C0C0C0;
	font-size: 14px;
	line-height: 45px;
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
</style>
