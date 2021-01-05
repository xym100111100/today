<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title">

						<image @tap="goPage" src="../../../static/images/commen/goBack.png" mode="" style="height: 56rpx;width: 56rpx;"></image>
						<view class="font-size-32">
							我的设置
						</view>
						<view style="height: 56rpx;width: 56rpx;">

						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="main">
			<view class="tips">
				如有基础信息错误，请及时联系管理员进行修改！
			</view>
			<view class="content-list">

				<view class="item">
					<view class="">
						边民证号：
					</view>
					<view class="">
						2524524324523452345234
					</view>
				</view>
				<view class="item">
					<view class="">
						姓名：
					</view>
					<view class="">
						张三三
					</view>
				</view>
				<view class="item">
					<view class="">
						手机号码：
					</view>
					<view class="">
						14134332432
					</view>
				</view>
				<view class="item">
					<view class="">
						身份证号码：
					</view>
					<view class="">
						4124124142314321
					</view>
				</view>
				<view class="item">
					<view class="">
						银行账户：
					</view>
					<view class="">
						23423412341424234
					</view>
				</view>

				<view class="item">
					<view class="">
						开户行：
					</view>
					<view class="">
						中国建设银行
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"

	export default {
		components: {
			myStatusBar
		},
		computed: {

			theme() {
				return this.$store.state.theme.name;
			}
		},
		data() {
			return {
				headerHeight: 'height:0px',
				userData:{
					field1:''
				}
			}
		},
		onLoad() {
			wx.getSystemInfo({
				success: (res) => {
					console.log('ss:', res.statusBarHeight)
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 31 + 7 + 7) + 'px';
				},
			});

		},
		methods: {
			goPage() {
				uni.navigateBack()
			}

		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
		display: flex;
		flex-direction: column;
		height: 100%;

		.header {
			position: relative;

			&__back {
				position: absolute;
				width: 100%;

			}

			&__content {
				width: 100%;
				position: absolute;

				.title {
					height: 62rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 22rpx;
					color: #FFFFFF;

				}

				.content {
					height: 216rpx;
				}

			}

		}

		.main {
			flex-grow: 1;
			display: flex;
			flex-direction: column;

			.tips {
				text-align: center;
				height: 90rpx;
				line-height: 90rpx;
				font-size: 28rpx;
				color: #E02020;
				background-color: #FFFFFF;
				margin-bottom: 20rpx;

			}

			.content-list {
				flex-grow: 1;
				background-color: #FFFFFF;

				.item {
					height: 106rpx;
					display: flex;
					justify-content: space-between;
					border-bottom: solid 1rpx #EEEEEE;
					align-items: center;
					padding: 0 26rpx;
				}

			}
		}

	}
</style>
