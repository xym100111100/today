<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title font-size-lg">
						模版页面{{action}}
					</view>
				</view>
			</view>
		</view>
		<view class="main" :style="paddingTop">
			<myList ref="list">
				<template slot-scope="{ row, index }">
					<view style="height: 200rpx; background: #e4e4db; margin-top: 20rpx;">
						{{row}}
					</view>
				</template>

			</myList>

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
				list: {
					isStatic: false, // 是否是静态json
					url: "/flow/handle/list",
					postData: {
						pageNum: 1,
						pageSize: 10,
						handleStatus: "done",
						handleType: "",
						businessType: "",
					},
				},
			}
		},

		onLoad() {
			wx.getSystemInfo({
				success: (res) => {
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 7 + 31 + 7) + 'px';
					this.paddingTop = 'padding-top:' + parseInt(res.statusBarHeight + 7 + 31 + 7) + 'px';
				},
			});

		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					uni.stopPullDownRefresh()
				}, 2000)
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

		}


	}
</style>
