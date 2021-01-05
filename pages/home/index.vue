<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="calculationHeight">
			<image class="header__position-img" src="../../static/images/index/index-back.png" :style="calculationHeight" />
			<view class="header__position">
				<myStatusBar />
				<view class="header__title font-size-36">
					东兴边民贸易平台
				</view>
				<generalHeader v-if="showHeader =='generalHeader'" ></generalHeader>
				<groupHeader  v-if="showHeader =='groupHeader'"> </groupHeader>
			</view>
			
		</view>
		<view class="main">
			<view class="main__date">
				2020年12月20日东兴市场
			</view>
			<view class="main__content-list">
				<view class="item">
					<image class="item__back-img" src="../../static/images/index/list-back.png" ></image>
					<view class="itm-content">
						<view class="content-left">
							<image class="left__img" src="../../static/images/index/ding-dang.png" mode=""></image>
							<view class="lift_text">
								<view class="">
									当日上架
								</view>
								<view class="">
									商品总价
								</view>
							</view>

						</view>
						<view class="content-right">
							42442332 <text class="unit">元</text>
						</view>
					</view>
				</view>
				<view class="item">
					<image class="item__back-img" src="../../static/images/index/list-back2.png" ></image>
					<view class="itm-content">
						<view class="content-left">
							<image class="left__img" src="../../static/images/index/ding-dang.png" mode=""></image>
							<view class="lift_text">
								<view class="">
									当日成交
								</view>
								<view class="">
									订单笔数
								</view>
							</view>

						</view>
						<view class="content-right">
							42442332 <text class="unit">元</text>
						</view>
					</view>
				</view>
				<view class="item">
					<image class="item__back-img" src="../../static/images/index/list-back3.png" ></image>
					<view class="itm-content">
						<view class="content-left">
							<image class="left__img" src="../../static/images/index/ding-dang.png" mode=""></image>
							<view class="lift_text">
								<view class="">
									当日成交
								</view>
								<view class="">
									订单金额
								</view>
							</view>

						</view>
						<view class="content-right">
							42442332 <text class="unit">元</text>
						</view>
					</view>
				</view>

			</view>
		</view>


	</view>
</template>
<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import generalHeader from'./component/generalHeader.vue'
	import groupHeader from'./component/groupHeader.vue'

	export default {
		components: {
			myStatusBar,
			uniPopup,
			generalHeader,
			groupHeader
		},

		data() {
			return {
				calculationHeight: 'height:540rpx',
				showHeader:'groupHeader'
			};
		},
		computed: {

			theme() {
				return this.$store.state.theme.name;
			}
		},
		created() {

		},
		onLoad() {

			wx.getSystemInfo({
				success: (res) => {
					this.calculationHeight = 'height:' + parseInt(res.statusBarHeight + 281 + 63) + 'px';
				},
			});
		},
		methods: {
			report() {

			},

		},

	};
</script>
<style lang="less" scoped>
	.bm-container {
		.header {
			color: #FFFFFF;
			width: 100%;

			&__position-img {
				height: 100%;
				width: 100%;
				position: absolute;
			}

			&__position {
				position: absolute;
				width: 100%;
			}

			&__title {
				height: 63px;
				line-height: 63px;
				padding-left: 24rpx;
				text-align: center;
			}

			

		}

		.main {

			&__date {
				margin: 20rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #666666;
				line-height: 44rpx;
			}

			&__content-list {
				.item {
					height: 120rpx;
					position: relative;
					margin-bottom: 21rpx;

					&__back-img {
						position: absolute;
						width: 100%;
						height: 120rpx;
					}

					.itm-content {
						position: absolute;
						display: flex;
						justify-content: space-between;
						width: 100%;
						box-sizing: border-box;
						padding: 0 30rpx;
						align-items: center;
						height: 100%;

						.content-left {
							display: flex;
							align-items: center;

							.left__img {
								height: 84rpx;
								width: 84rpx;
							}

							.lift_text {
								padding-left: 24rpx;
								font-size: 32rpx;
								color: #666666;
							}
						}

						.content-right {
							font-size: 40rpx;
							color: #F3433D;

							.unit {
								font-size: 28rpx;
								padding-left: 8rpx;
							}
						}

					}

				}
			}

		}
	}
	

	
</style>
