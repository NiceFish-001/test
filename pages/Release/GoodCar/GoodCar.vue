<template>
	<view>
		<view class="car-list" v-for="(item,index) in goodlist" :key="index">
			<view class="list-title">
				<checkbox :value="item.value" :checked="item.checked"/>
				<text>商品信息</text>
			</view>
			<view class="goosinfo">
				<view>
					<image src="../../../static/bg/img_3_bmkj.png"></image>
				</view>
				<view class="info-box">
					<view>
							<text class="msg1">{{item.title}}</text>
					</view>
					<view>
							<text class="msg2">{{item.msg}}</text>
					</view>
					<view class="price-box">
							<text class="msg3">￥{{item.price*item.number}}</text>
							<text class="msg4">x{{item.number}}</text>
					</view>
				</view>
			</view>
			
		</view>
	
	<view class="footer">
		<view style="width: 30%;">
			<checkbox /><text>全选</text>
		</view>
		<view style="width: 30%;color: #FF8070;text-align: center;">
			<text>合计</text><text>￥500</text>
		</view>
		<view style="width: 30%;color: #FF8070;text-align: right;padding: 5px;">
			  <button style="background: #FFFFFF;height: 20px;border-radius: 15px;border: 1px solid #FF8070;color:#FF8070 ;line-height: 20px !important;"  size="mini">结算</button>
		</view>
	</view>
	<view class="redbag" @tap="ToRedbag">
		<view>分享</view>
		<view>砍价</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodlist:[
				{value:'1',checked:false,title:'二手教科书',msg:'9成新二手教科书出售,期末考试必备...',price:'20',number:'2'},
				{value:'2',checked:false,title:'二手教科书',msg:'9成新二手教科书出售,期末考试必备...',price:'20',number:'2'},
				{value:'3',checked:false,title:'二手教科书',msg:'9成新二手教科书出售,期末考试必备...',price:'20',number:'2'},
				{value:'4',checked:true,title:'二手教科书',msg:'9成新二手教科书出售,期末考试必备...',price:'20',number:'2'},
				{value:'5',checked:true,title:'二手教科书',msg:'9成新二手教科书出售,期末考试必备...',price:'20',number:'2'}]
			}
		},
		methods: {
			ToRedbag:function(){
				uni.navigateTo({
				    url: '../index/index'
				});
			}
		}
	}
</script>

<style>

page{
	background: #F8F8F5;
}
.redbag{
	position: fixed;
	height: 50px;
	width: 50px;
	bottom: 100px;
	right: 20px;
	font-size: 13px;
	text-align: center;

	
	color: #FFFFFF;
	background: url('../../../static/btn/img_fxkj_bg_gwc.png');background-size: 100%
}
.redbag>view{
	height: 25px;
	line-height: 20px;
}
.footer{
	padding: 10px;
	position: fixed;
	height: 40px;
	background: #FFFFFF;
	width: 100%;
	bottom: 40px;
	left: 0;
	display: flex;
	font-size: 13px;
	line-height: 40px;
}
.car-list{
	width: 94%;height: 160px;background: #FFFFFF;border-radius: 10px;margin:10px auto;
}
.car-list-view{
	width: 94%;
}
.list-title{
	width: 94%;height: 30px;border-bottom: 2px solid #F8F8F5;padding: 10px;
}
.goosinfo{
	padding: 10px;
	display: flex;
}
.goosinfo image{
	width: 70px;
	height: 70px;
}
.goosinfo>view>view{
	height: 23px;
}

.checkbox{
	border-radius: 20px;
}
.info-box{
	padding-left:10px;
}
.price-box{
	position: relative;
}
.msg1{
	font-size: 14px;
}
.msg2{
	font-size: 12px;color: #999999;
}
.msg3{
	font-size: 12px;color: #000000;position: absolute;left: 0;bottom: 0;
}
.msg4{
	font-size: 12px;color: #999999;position: absolute;right: 0;bottom: 0;
}
</style>
