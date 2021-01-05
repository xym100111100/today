<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title font-size-lg">
						排号
					</view>

				</view>
			</view>
		</view>
		<view class="main" :style="paddingTop">
			<view class="tab-nav" :style="navTop">
				<view class="switch-list">
					<view @tap="changeSwitch(index)" :style="item.active?'border-bottom: solid 2px #F3433D ':''" :class="item.active?'item active-item':'item'"
					 v-for="(item,index) in switchData" :key="index">
						{{item.title}}
					</view>
				</view>
			</view>

			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel" @tap="openPopup('cancel')">
						取消排号
					</view>
				</view>
			</view>


			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>

			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>

			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>


			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>


			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>




			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						B0234
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>




			<view class="list  p-20">
				<view class="list-item mb-10">
					<view class="text-color-black font-size-extra-ll">
						awgbasdjnk
					</view>
					<view class="text-color-orange font-size-lg">
						排队中
					</view>
				</view>
				<view class="">
					<text>排号时间：</text><text>2020-12-23 20:22:00</text>
				</view>
				<view class="list-item">
					<view class="">
						等待人数：23432人
					</view>
					<view class="cancel">
						取消排号
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="cancel" type="center">
			<view class="bm-popup" style="width: 600rpx;">
				<view class="popup-title">
					<view class="icon">
		
					</view>
					<view class="text-color-black font-size-lg">
						签到打卡
					</view>
					<image @tap="closePopup('cancel')" class="icon" src="../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="content">
					
				</view>
				<view class="btn">
					<view class="">
						返回
					</view>
					<view class="">
						确定
					</view>
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
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 7 + 31 + 7) + 'px';
					this.paddingTop = 'padding-top:' + parseInt(res.statusBarHeight + 7 + 31 + 7 + 46) + 'px';
					this.navTop = 'top:' + parseInt(res.statusBarHeight + 7 + 31 + 7) + 'px';

				},
			});

		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					uni.stopPullDownRefresh()
				}, 2000)
			},
			openPopup(val) {
				this.$refs[val].open()
			},
			closePopup(val) {
				this.$refs[val].close()
			},
			changeSwitch(index) {
				this.switchData.forEach(item => {
					item.active = false
				})
				this.switchData[index].active = true
			}
		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
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
					height: 62rpx;
					margin-bottom: 14rpx;
					line-height: 62rpx;
					color: #FFFFFF;
					text-align: center;
				}

				.content {
					height: 216rpx;
				}
			}

		}

		.main {

			background: #F8F8F8;

			.tab-nav {
				position: fixed;
				width: 100%;

				.switch-list {
					height: 92rpx;
					background: #FFFFFF;
					border-bottom: solid 1rpx #E4E4E4;
					display: flex;
					justify-content: space-around;
					align-items: center;

					.item {
						width: 100%;
						text-align: center;
						height: 92rpx;
						line-height: 92rpx;
						font-size: 30rpx;
						color: #666666;
					}

					.active-item {
						color: #F3433D;
						border-bottom: solid 3rpx #F3433D;
					}
				}
			}

			.list {
				margin-bottom: 12rpx;
				background: #FFFFFF;

				.list-item {
					display: flex;
					justify-content: space-between;

					.cancel {
						width: 152rpx;
						height: 52rpx;
						background: #AFAFAF;
						border-radius: 26px;
						text-align: center;
						line-height: 52rpx;
						color: #FFFFFF;
					}
				}
			}

		}
	}
	
	.bm-popup {
		.content {
			
	
		}
	
	}
</style>
