<template>
	<view>
	<view class="bigbox">
		<view class="table-border title">
			<text>到账微信</text><text>念亿</text>
		</view>
		<view class="title">
			<text>提现金额</text>
		</view>
		<view class="table-border title-money">
			<view>
				<text style="font-size:50rpx ;">￥</text>
			</view>
			<view>
				<input type="number" value="52.00" />
			</view>
			
		</view>
		
	</view>
	<view class="btn">
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
	page{
		background: #EEEEED;
	}
.bigbox{
	position: fixed;
	width: 100%;
	height: 30%;
	background: #FFFFFF;
}
.title{
	height: 80rpx;
	line-height: 80rpx;
}
.title-money{
	width: 100%;
	display: flex;
	padding: 20rpx 220rpx;
}
.title-money>view>input{
	font-size: 120rpx;
}
.title >text{
	margin:0 80rpx ;
}
.table-border{
	border-bottom: 1px solid #C0C0C0;
}
.btn{
	position: fixed;
	width: 80%;
	left: 10%;
	bottom: 480rpx;
}
.btn>button{
	border-radius: 50rpx;
	color: #FFFFFF;
	background:#FF8070 ;
}
</style>
