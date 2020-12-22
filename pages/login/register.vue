<template>
	<view :class="[theme]" class="bm-container">
		<view class="bm-login">
			<image class="bm-login_img" src="../../static/images/1.jpg" mode=""></image>
			<view class="bm-login_text">
				<text>
					东兴便民贸易平台
				</text>
			</view>
			<view class="bm-login-input">
				
				<icon type="success" size="16" />
				<input class="uni-input input " />
				<!-- <view class="text">
					<text></text>
				</view> -->
			</view>
			<view class="bm-login-input">
				<icon type="success" size="16" /> <input class="uni-input input " />
				<view class="text">
					<text>获取验证码</text>
				</view>
			</view>
			<view class="bm-login_botton">
				注册/登录
			</view>

			<view class="bm-login-agreement">
				<icon type="success" size="16" />
				<text class="text">点击注册或登录即表示您同意 </text>
				<text class="nav-text">《用户服务协议》</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			zhutiIcon() {
				return this.$store.state.theme.name === 'theme-default' ? 'ao-icon-yejianmoshi1' : 'ao-icon-rijianmoshi1';
			},
			theme() {
				return this.$store.state.theme.name;
			}
		},
		created() {
			// 隐藏home键
			//uni.hideHomeButton()
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;


		.bm-login {
			text-align: center;

			.bm-login_img {
				margin-top: 150rpx;
				height: 250rpx;
				width: 250rpx;
				border-radius: 100%;
			}

			.bm-login_text {
				font-size: 36rpx;
				font-weight: bold;
				margin-bottom: 80rpx;
			}

			.bm-login-input {
				text-align: left;
				padding-left: 17rpx;
				display: flex;
				align-items: center;
				background: #e8e2e2;
				border-radius: 44rpx;
				overflow: hidden;
				margin-bottom: 50rpx;
				height: 90rpx;

				.input {
					background: #e8e2e2;
				}

				.text {
					width: 150rpx;
					padding: 0 16rpx;
				}
			}

			.bm-login_botton {
				height: 90rpx;
				border: solid 1px red;
				line-height: 90rpx;
				width: 650rpx;
				border-radius: 10rpx;
				margin: 0 auto 40rpx;

			}

			.bm-login-agreement {
				display: flex;
				height: 60rpx;
				align-items: center;

				.text {
					padding-left: 10rpx;
				}

				.nav-text {
					color: red;
				}
			}
		}

	}
</style>
