<template>
	<view class="bigbox">
		<view class="addess-item">
			<view class="item-header">
				<view>张三</view>
				<view>15138735162</view>
			</view>
			<view class="item-conter">
				北京市 昌平区 中东路18号院 润丰欣赏写字楼 18号楼 1806室
			</view>
			<view class="item-footer">
				<view>默认地址</view>
				<view @tap="ToUpAddress()">编辑</view>
			</view>
		</view>
		
		<view class="addess-item">
			<view class="item-header">
				<view>张三</view>
				<view>15138735162</view>
			</view>
			<view class="item-conter">
				北京市 昌平区 中东路18号院 润丰欣赏写字楼 18号楼 1806室
			</view>
			<view class="item-footer">
				<view v-show="false">默认地址</view>
				<view @tap="ToUpAddress()">编辑</view>
			</view>
		</view>
		
		<view class="footer" @tap="ToCreateAddress()">
			<button type="default">添加新地址</button>
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
			ToCreateAddress:function(){
				uni.navigateTo({
					url:"../CreateAddress/CreateAddress"
				})
			},
			ToUpAddress:function(){
				uni.navigateTo({
					url:"../UpAddress/UpAddress"
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
	width: 100%;
}
.addess-item{
	height: 300rpx;
	width: 100%;
	background: #FFFFFF;
	font-size: 30rpx;
	margin-bottom: 40rpx;
}
.item-conter{
	height: 160rpx;
	width: 90%;
	margin: 0 auto;
	border-bottom: 1px solid #CCCCCC;
}
.item-footer,.item-header{
	height: 70rpx;
	width: 100%;
	position: relative;
	left: 0;
}

.item-footer view:nth-of-type(odd){
	position: absolute;
	left: 0;
	width: 40%;
	height: 70rpx;
	margin: 0 5%;
	color: #FF8879;
} 
.item-footer view:nth-of-type(even){
	position: absolute;
	right: 0;
	width: 40%;
	height: 70rpx;
	margin: 0 5%;
	text-align: right;
} 

.item-header view:nth-of-type(odd){
	position: absolute;
	left: 0;
	width: 40%;
	height: 70rpx;
	margin: 0 5%;
} 
.item-header>view:nth-of-type(even){
	position: absolute;
	right: 0;
	width: 40%;
	height: 70rpx;

	margin: 0 5%;
	text-align: right;
} 
.item-footer,.item-header view{
	line-height: 70rpx;
}
.footer{
	width: 90%;

	position: fixed;
	bottom: 100rpx;
	left: 5%;

}
.footer>button{
	color: #FFFFFF;
	height: 80rpx;
	font-size: 35rpx;
	background: #FF8070;
	border-radius: 20px;
}
</style>
