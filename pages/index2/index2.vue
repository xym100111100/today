<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<myStatusBar />
			<view class="header__content">
				<view class="title font-size-32">
					模版页面{{action}}
				</view>
			</view>
			<view class="tab-nav">
				<view class="switch-list" style="height: 49px;">
					<view @tap="changeSwitch(index)" :style="item.active?'border-bottom: solid 2px #F3433D ':''" :class="item.active?'item active-item':'item'"
					 v-for="(item,index) in switchData" :key="index">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>

		<view class="main" :style="paddingTop">

			32423432
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
			this.action = '下拉'
			this.onRefresh()
		},
		onReachBottom() {
			this.action = '上拉'
		},

		data() {
			return {
				action: '开始',
				headerHeight: 'height:0px',
				paddingTop: 'padding-top:0px',
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
					let orderHeight = parseInt(res.windowWidth) > 400 ? 3 : 0;
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 7 + 31 + 7 + 49 + 2 +orderHeight) + 'px';
					this.paddingTop = 'padding-top:' + parseInt(res.statusBarHeight + 7 + 31 + 7 + 49 + 2 +orderHeight) + 'px';

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
			},
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

			.tab-nav {
				position: absolute;
				width: 100%;
				bottom: 0;

				.switch-list {
					background: #FFFFFF;
					border-bottom: solid 2rpx #E4E4E4;
					display: flex;
					justify-content: space-around;
					align-items: center;

					.item {
						height: 100%;
						width: 100%;
						text-align: center;
					    line-height:98rpx;
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
</style>
