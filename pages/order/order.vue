<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title font-size-lg">
						订单
					</view>
				</view>
			</view>
		</view>

		<view class="tab-nav">
			<view class="switch-list">
				<view @tap="changeSwitch(index)" :class="item.active?'item active-item':'item'" v-for="(item,index) in switchData"
				 :key="index">
					{{item.title}}
				</view>
			</view>
		</view>

		<view class="main">

			<view style="height: 200rpx; background: yellow; margin-top: 20rpx;">
				{{firstText}}
			</view>

			<view style="height: 200rpx; background: yellow; margin-top: 20rpx;">
				add
			</view>

			<view style="height: 200rpx; background: yellow; margin-top: 20rpx;">
				add
			</view>

			<view style="height: 200rpx; background: yellow; margin-top: 20rpx;">
				add
			</view>

			<view style="height: 200rpx; background: yellow; margin-top: 20rpx;">
				add
			</view>

			<view style="height: 200rpx; background: yellow; margin-top: 20rpx;">
				add23432
			</view>

		</view>
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
			this.firstText = '下拉'
			this.onRefresh()
		},
		onReachBottom() {
			this.firstText = '上拉'
		},

		data() {
			return {
				firstText: '第一',
				headerHeight: 'height:0px',
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
				},
			});

		},
		methods: {
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

		.tab-nav {
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
	}
</style>
