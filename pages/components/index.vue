<template>
	<view>
		
					<button  @tap="masks()">确认收货</button>
		
		
		<!-- 密码框 -->
		<view v-if="mask" style="width: 100%;height: 100%;position:fixed;background: rgba(0,0,0,0.4);top: 0;z-index: 9999;overflow: hidden;">
			<view :class="bott" class="masks">
				<view style="padding: 0 3%;">
					<view @tap="maskss()" style="float: left;font-size: 60upx;margin: -10upx 0 0 0;">×</view>
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
					<view @tap="reset()" class="password" style="background: #09BB07;color: #fff;">重置</view>
					<view @tap="passwordBox(0)" hover-class="hover" :hover-stay-time='20' class="password">0</view>
					<view @tap="backspace()" class="password" style="background: #09BB07;color: #fff;">删除</view>
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
				numbr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		methods: {
			// 密码框
			passwordBox(num) {
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
			reset() {
				this.passwordArray = []
			},
			backspace() {
				this.passwordArray.pop()
			},
			masks() {
				let _this = this
				this.mask = true
				setTimeout(()=> {
					_this.bott = 'bot'
				}, 50)
			},
			maskss() {
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
</style>
