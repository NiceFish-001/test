<template>
	<view>
		<view class="card-item">
			<view>身份证正面</view>
			<view><image src="../../../static/btn/img_1_rz.png"></image></view>
		</view>
		<view class="card-item">
			<view>身份证背面</view>
			<view><image src="../../../static/btn/img_2_rz.png"></image></view>
		</view>
		<view class="card-item">
			<view>手持学生证</view>
			<view><image src="../../../static/btn/img_3_rz.png"></image></view>
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
.card-item{
	display: flex;
	width: 80%;
	margin:40px auto;
}
.card-item>view>image{
	width: 200px;
	height: 130px;
}
.card-item>view{
	font-size: 12px;
	margin-top: 10px;
	margin-right: 5px;
	color: #999999;
}
</style>
