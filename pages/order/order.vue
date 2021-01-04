<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title font-size-lg" style="height: 31px;">
						订单
					</view>
					<view class="tab-nav">
						<view class="switch-list">
							<view @tap="changeSwitch(index)" :style="item.active?'border-bottom: solid 2px #F3433D ':''" :class="item.active?'item active-item':'item'"
							 v-for="(item,index) in switchData" :key="index">
								{{item.title}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="main" :style="paddingTop">
			<view class="list  p-20" @tap="goPage" >
				<view class="list-item mb-10">
					<view class="text-color-black font-size-lg">
						中越大福商行
					</view>
					<view class="text-color-orange font-size-lg">
						待确认
					</view>
				</view>
				<view class="list-item">
					<view class="text-color-grey-6">
						商品：木薯淀粉
					</view>
					<view class="text-color-grey-9">
						¥43/公斤 x 1000
					</view>

				</view>
				<view class="list-item">
					<view class="text-color-grey-6">
						组长：张三三
					</view>
					<view class="text-color-grey-9">
						总价：<text class="text-color-orange-x">¥3500</text>
					</view>
				</view>


				<view class="list-item mt-20 ">
					<view class="">
						2020-12-20 14:43
					</view>
					<view @tap="openPopup('comfimOrder')" class="cancel back-color-orange-x text-color-white">
						立即确认
					</view>
				</view>
			</view>

			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-lg">
						中越大福商行
					</view>
					<view class="text-color-orange font-size-lg">
						待确认
					</view>
				</view>
				<view class="list-item ">
					<view class="text-color-grey-6">
						商品：木薯淀粉
					</view>
					<view class="text-color-grey-9">
						¥43/公斤 x 1000
					</view>

				</view>
				<view class="list-item ">
					<view class="text-color-grey-6">
						组长：张三三
					</view>
					<view class="text-color-grey-9">
						总价：<text class="text-color-orange-x">¥3500</text>
					</view>
				</view>


				<view class="list-item mt-20 ">
					<view class="">
						2020-12-20 14:43
					</view>
					<view @tap="openPopup('comfimOrder')" class="cancel back-color-orange-x text-color-white">
						立即确认
					</view>
				</view>
			</view>

		</view>
		<uni-popup ref="comfimOrder" type="center">
			<view class="bm-popup">
				<view class="popup-title">
					<view class="icon">

					</view>
					<view class="text-color-black font-size-lg">
						确定订单
					</view>
					<image @tap="closePopup('comfimOrder')" class="icon" src="../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="p-30">
					<view class="list-item">
						<view class="left text-color-grey-9">
							订单号：
						</view>
						<view class="right">
							22132432432
						</view>
					</view>

					<view class="list-item">
						<view class="left text-color-grey-9">
							商户：
						</view>
						<view class="right">
							中越大福商行
						</view>
					</view>

					<view class="list-item">
						<view class="left text-color-grey-9">
							组长：
						</view>
						<view class="right">
							张三三
						</view>
					</view>

					<view class="list-item">
						<view class="left text-color-grey-9">
							商品：
						</view>
						<view class="right flex-space-between">
							<text>木薯淀粉</text>
							<text class="text-color-grey-9 ml-20">￥3.5/公斤 x 1000</text>
						</view>
					</view>


					<view class="list-item">
						<view class="left text-color-grey-9">
							支付方式：
						</view>
						<view class="right flex-space-between">
							<text>组长代付</text>
							<text class="text-color-orange-xxx">￥3500</text>
						</view>
					</view>
				</view>
				<view class=" text-align-center">
					<image style="height: 152rpx; width: 144rpx;" src="../../static/images/order/fingerprint.png" mode=""></image>
				</view>
				<view class=" text-align-center pb-20 text-color-orange-x">
					请使用本机指纹确认
				</view>

			</view>
		</uni-popup>
	</view>
</template>

<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"
	import myList from "@/components/myLIst/myList.vue"

	export default {
		components: {
			myStatusBar,
			myList
		},
		computed: {

			theme() {
				return this.$store.state.theme.name;
			}
		},
		onPullDownRefresh() {
			this.onRefresh()
		},
		onReachBottom() {},

		data() {
			return {
				headerHeight: 'height:0px',
				paddingTop: 'padding-top:0px',
				navTop: 'top:0px',
				switchData: [{
						index: 1,
						active: true,
						title: '全部',
					},
					{
						index: 2,
						active: false,
						title: '进行中',
					},
					{
						index: 3,
						active: false,
						title: '已完成',
					},
					{
						index: 4,
						active: false,
						title: '已取消',
					},

				]
			}
		},

		onLoad() {
			wx.getSystemInfo({
				success: (res) => {
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 7 + 31 + 7 + 46) + 'px';
					this.paddingTop = 'padding-top:' + parseInt(res.statusBarHeight + 7 + 31 + 7 + 46 + 2) + 'px';

					// 总91 顶部占7 360/750 =>  1rpx = 0.48px   

				},
			});

		},
		methods: {
			goPage(){
				
				uni.navigateTo({url:'/pages/order/orderDetail/orderDetail'})	
			},
			onRefresh() {
				setTimeout(() => {
					uni.stopPullDownRefresh()
				}, 2000)
			},
			changeSwitch(index) {
				this.switchData.forEach(item => {
					item.active = false
				})
				this.switchData[index].active = true
			},
			openPopup(val) {

				//this.$refs[val].open()
				
				uni.checkIsSupportSoterAuthentication({
				                    success(res) {
				                        console.log(res);
				                    },
				                    fail(err) {
				                        console.log(err);
				                    },
				                    complete(res) {
				                        console.log(res);
				                    }
				                })

				// uni.startSoterAuthentication({
				// 	requestAuthModes: ['fingerPrint'],
				// 	challenge: '123456',
				// 	authContent: '请用指纹解锁',
				// 	success(res) {
				// 		console.log(res);
				// 	},
				// 	fail(err) {
				// 		console.log(err);
				// 	},
				// 	complete(res) {
				// 		console.log(res);
				// 	}
				// })
			},
			closePopup(val) {
				this.$refs[val].close()
			}
		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
		height: 100%;
		display: flex;
		flex-direction: column;

		.header {
			position: fixed;

			&__back {
				position: absolute;
				width: 100%;


			}

			&__content {
				width: 100%;
				position: absolute;

				.title {
					margin-bottom: 14rpx;
					color: #FFFFFF;
					text-align: center;
					height: 62rpx;
					line-height: 62rpx;
				}

				.content {
					height: 216rpx;
				}

				.tab-nav {
					.switch-list {
						height: 98rpx;
						background: #FFFFFF;
						border-bottom: solid 2rpx #E4E4E4;
						display: flex;
						justify-content: space-around;
						align-items: center;

						.item {
							width: 100%;
							text-align: center;
							height: 98rpx;
							line-height: 98rpx;
							font-size: 30rpx;
							color: #666666;
						}

						.active-item {
							color: #F3433D;
						}
					}
				}


			}

		}

		.main {
			.list {
				margin-bottom: 12rpx;
				background: #FFFFFF;

				.list-item {
					display: flex;
					justify-content: space-between;

					.cancel {
						width: 152rpx;
						height: 52rpx;
						border-radius: 26px;
						text-align: center;
						line-height: 52rpx;

					}
				}
			}

		}


		.bm-popup {
			width: 694rpx;
			background: #FFFFFF;
			border-radius: 16px;

			.popup-title {
				display: flex;
				justify-content: space-between;
				text-align: center;
				color: #333333;
				font-size: 32rpx;
				height: 88rpx;
				align-items: center;
				padding: 0 20rpx;
				border-bottom: solid 1rpx #E4E4E4;

				.icon {
					width: 44rpx;
					height: 44rpx;
				}
			}

			.list-item {
				display: flex;
				margin-bottom: 10rpx;

				.left {
					width: 154rpx;
					flex-shrink: 0;
					text-align: right;
				}

				.right {
					flex-grow: 1;

				}

			}

		}




	}
</style>
