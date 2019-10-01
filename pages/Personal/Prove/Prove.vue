<template>
	<view class="container">
		
	
			<view class="info-list">
				   <view class="uni-info-item">
				       <view class="title">姓名</view>
					    <input type="text" placeholder-style="text-align: right;font-size: 14px;" placeholder="请输入真实姓名"/>
				   </view>
				   <view class="uni-info-item" >
				       <view class="title">专业</view>
				      <input type="text" placeholder-style="text-align: right;font-size: 14px;" placeholder="请输入学院信息"/>
				   </view>
				   <view class="uni-info-item">
				       <view class="title">年级</view>
				      <input type="text" placeholder-style="text-align: right;font-size: 14px;" placeholder="请输入年级"/>
				   </view>
				   <view class="uni-info-item">
				       <view class="title">专业名称</view>
				        <input type="text" placeholder-style="text-align: right;font-size: 14px;" placeholder="请输入专业名称"/>
				   </view>
				   <view class="uni-info-item" @tap="ToUplodeCard()">
				       <view class="title">上传身份证</view>
				       <image class="uni-form-item-image" src="../../../static/icon/icon_next_cjwt.png"></image>
				   </view>
			</view>
			
			<button type="default">确定</button>
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
			ToUplodeCard:function(){
				uni.navigateTo({
					url:"../UploadCard/UploadCard"
				})
			}
		}
	}
</script>

<style>
.container{
	position: absolute;width: 100%;height: 100%;background: #FFFFFF;
}
.container>button{
	position: absolute;
	background: #FF8070;
	color: #FFFFFF;
	border-radius: 20px;
	margin: 0 auto;
	width: 94%;
	bottom: 60px;
	margin-left: 3%;
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
	color: #808080;
}
.uni-info-item input{
	position: absolute;
	right: 10px;
	line-height: 40px;
	bottom: 10px;
	color: #C8C7CC;
	text-align: right;
}
.uni-form-item-image{
	position: absolute;
	right: 10px;
	width: 10px !important;
	height: 20px !important;
	margin-top:10px ;
}
</style>
