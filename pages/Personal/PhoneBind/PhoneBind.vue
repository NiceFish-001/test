<template>
	<view class="bigbox">
		<view class="input-box">
			<view class="input-box-item">
				<text>手机号</text>
				<view>
					<input type="text" maxlength="11" placeholder="请输入手机号"/>
				</view>
			</view>
			<view class="input-box-item">
				<text>手机号</text>
				<view>
					<input type="text" maxlength="11" placeholder="请输入验证码"/>
					<button type="default">发送</button>
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
			
		}
	}
</script>

<style>
.bigbox{
	position: absolute;
	width: 100%;
	height: 100%;
}
.input-box{
	height:30% ;
	width: 90%;
	margin:30% auto 0;
}
.input-box>button{
	background: #FF8070;
	color: #FFFFFF;
	border-radius: 20px;
	margin-top: 150px;
}
.input-box-item{
	margin: 30px 0;
	border-bottom: 1px solid #000000 ;
}
.input-box-item text{
	font-size: 16px;
	font-weight: 600;
	
}
.input-box-item view{
	margin: 10px 0;
	position: relative;
}
.input-box-item>view>input{
	width: 60%;
}
.input-box-item>view>button{
	width: 60px;
	height: 30px;
	position: absolute;
	right: 0;
	bottom: 0px;
	font-size: 12px;
	background: #F2F2F2;
}
</style>
