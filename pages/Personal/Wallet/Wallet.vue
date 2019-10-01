<template>
	<view class="bigbox">
		<view>
			<image src="../../../static/bg/icon_qb_qb.png"></image>
		</view>
		<view>
			<text>账户余额</text>
		</view>
		<view>
			<text style="font-size:50rpx ;">￥</text><text style="font-size:80rpx ;">52.00</text>
		</view>
		<view style="padding-top: 280rpx;">
			<button type="default" @click="ToExtract()">提现</button>
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
			ToExtract:function(){
				uni.navigateTo({
					url:"../Extract/Extract"
				})
			}
		}
	}
</script>

<style>
.bigbox{
	position: fixed;
	width: 100%;
	height: 100%;
	text-align: center;
}
.bigbox>view>image{
	width: 120rpx;
	height: 120rpx;
}
.bigbox>view{
	margin: 80rpx;
}
.bigbox>view>button{
	background:#FF8070 ;
	color: #FFFFFF;
	border-radius: 20px;
}
</style>
