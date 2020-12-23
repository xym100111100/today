<template>
	<view :class="[theme]" class="bm-container">
		<view class="bm-login">

			<image class="bm-login__img" src="../../static/images/1.jpg" mode=""></image>
			<view class="bm-login__text">
				<text>
					东兴便民贸易平台
				</text>
			</view>
			<view class="bm-login__botton" style="background: linear-gradient(90deg, #3FC774 0%, #2DAA5F 100%);">
				微信用户快捷登录
			</view>
			<view class="bm-login__botton" style="background: linear-gradient(112deg, #FF6767 0%, #F3453D 100%);">

				<image class="icon" src="../../static/images/commen/weixin.png" mode=""></image>
				<navigator class="item" open-type="navigate" url="/pages/login/register" hover-class="none">
					手机号码登录/注册
				</navigator>
			</view>

		</view>
		<view class="bm-login-agreement">
			<text class="text">点击注册或登录即表示您同意 </text>
			<navigator open-type="navigate" url="/pages/login/terms" class="nav-text">《用户服务协议》</navigator>
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

			.bm-login__img {
				margin-top: 150rpx;
				height: 240rpx;
				width: 240rpx;
				border-radius: 100%;
			}

			.bm-login__text {
				font-size: 36rpx;
				margin-bottom: 80rpx;
				font-weight: 500;
				color: #666666;
			}

			.bm-login__botton {
				font-size: 32rpx;
				height: 90rpx;
				line-height: 90rpx;
				width: 650rpx;
				border-radius: 42px;
				margin: 0 auto 40rpx;
				color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;

				.icon {
					height: 30rpx;
					width: 30rpx;
					margin-right: 10rpx;
				}

			}


		}

		.bm-login-agreement {
			position: fixed;
			bottom: 15rpx;
			display: flex;
			font-size: 28rpx;
			color: #666666;
			.text {
				padding-left: 30rpx;
			}

			.nav-text {
				color: red;
				color: #FA6400;
			}
		}

	}
</style>
