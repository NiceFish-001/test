<template>
	<view class="bigbox">
		<view class="select-counter">
			<view class="select-counter-item" v-for="(item,index) in vip_list" @tap="select(index)"
			:class='[selectindex==index ? "selectbg" : ""]'>

				<view>{{item.time}}</view>
				<view><text style="font-size: 25px;">￥</text><text>{{item.money}}</text></view>
			</view>
			
		</view>
		<!--<index></index>-->
		<button type="default"  @tap="masks()">立即支付</button>
		
		<!-- 密码框 -->
				<view v-if="mask" style="width: 100%;height: 100%;position:fixed;background: rgba(0,0,0,0.4);top: 0;z-index: 9999;overflow: hidden;">
					<view :class="bott" class="masks">
						<view style="padding: 0 3%;">
							<view @tap="maskss()" style="float: left;font-size: 60upx;margin: -10upx 0 0 0;">×</view>
							
							<view style="text-align: center;font-size:30upx;padding-top: 3%;">会员充值<text style="font-size: 40upx;">￥</text>25</view>
							<view style="text-align: center;font-size:30upx;padding-top: 3%;">请输入支付密码</view>
						</view>
						<view style="display: flex;width: 80%;margin:5% auto;text-align: center;">
							<view v-for="(item , index) in pasList" :key='index' style="flex: 1;">
								<view style="width: 80upx;height: 80upx;border: 1px solid#ccc;margin: auto;line-height:1;">
									<text v-show="passwordArray.length > index" style="font-size:80upx;position: relative;top: -8upx;">●</text>
								</view>
							</view>
						</view>
						<view style="display: flex;flex-wrap: wrap;text-align: center;">
							<view v-for="(num , indexs) in numbr " :key='indexs' @tap="passwordBox(num)" hover-class="hover" :hover-stay-time='20' class="password">
								{{num}}
							</view>
							<view @tap="reset()" class="password" style="background: #FFFFFF;color: #000000;">重置</view>
							<view @tap="passwordBox(0)" hover-class="hover" :hover-stay-time='20' class="password">0</view>
							<view @tap="backspace()" class="password" style="background: #FFFFFF;color: #000000;">删除</view>
						</view>
					</view>
				</view>
	
		
	</view>
</template>

<script>

	export default {
		
		data() {
			return {
				password: '',
				mask: false,
				passwordArray: [],
				bott: '',
				pasList: ['', '', '', '', '', ''],
				numbr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				selectindex:0,
				bannerShow:true,
				vip_list:[{time:"1个月",money:"25"},{time:"6个月",money:"50"},{time:"12个月",money:"75"}]
			}
		},
		onLoad(){
			
		},
		methods: {
			select:function(e){
				this.selectindex=e
			},
			passwordBox:function(num) {
							if (this.passwordArray.length < 6) {
								this.passwordArray.push(num)
							}
							if (this.passwordArray.length == 6) {
								var str = ''
								for (let i = 0; i < this.passwordArray.length; i++) {
									str += this.passwordArray[i];
								}
								console.log(str)
								this.password = str
								this.mask = false
								this.passwordArray = []
								this.bott = ''
								uni.showLoading({
									title: '加载中。。。',
									icon: 'none'
								});
								if (this.current == 0) {
									this.XXXX()
								} else if (this.current == 1) {
									this.XXXXXX()
								} else {
									uni.showToast({
										title: '跳转....',
										duration: 2000,
										icon: 'none',
										mask: true
									});
								}
							}
						},
						reset:function() {
							this.passwordArray = []
						},
						backspace:function() {
							this.passwordArray.pop()
						},
						masks:function() {
							let _this = this
							this.mask = true
							setTimeout(()=> {
								_this.bott = 'bot'
							}, 50)
						},
						maskss:function() {
							this.mask = false
							this.bott = ''
							this.passwordArray = []
						},
						// end
		}
	}
</script>

<style>
.password{width: 25%;flex-grow:1;padding: 3%;font-size:40upx;box-shadow:0px 0px 1upx #ccc;}
.hover{background: #eee;}
.masks{bottom:-50%;position: fixed;background: #fff;width: 100%;transition:.5s}
.bot{bottom: 0;}
.selectbg{
	background: url(../../../static/btn/img_2_bg.png) no-repeat;
	background-size: 100%;
}
.bigbox{
	position: fixed;
	width: 100%;
	height: 100%;
	background: url(../../../static/bg/img_bg_hykt.png) no-repeat;
	background-size:contain;
}
.bigbox>button{
	background:#E9CC9B ;
	color: #FFFFFF;
	width: 90%;
	border-radius: 20px;
}
.select-counter{
	width: 95%;
	margin: 30% auto 0;
	height: 50%;
	background: #FFFFFF;
	border-radius: 15px;
	display: flex;
}
.select-counter-item{
	padding: 2%;
	width: 29%;
	margin:10% 1% ;
	height: 120px;
	border: 1px solid #E9CC9B;
	border-radius: 10px;
	text-align: 100%;
	color: #4F2B12;
}
.select-counter-item>view{
	margin: 30% 0;
}
.uni-mask{
	z-index: 1;background: rgba(0, 0, 0, 0.6);
}
.paypanel{
	position: fixed;
	width: 60%;
	height: 30%;
	top:30%;
	left: 20%;
	z-index: 99;
	background: #FFFFFF;
	border-radius: 20px;
}
</style>
