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
				<image class="icon" src="../../static/images/commen/user.png" mode=""></image>
				<input class="uni-input input " placeholder="请输入手机号码" />
				<!-- <view class="text">
					<text></text>
				</view> -->
			</view>
			<view class="bm-login-input">
				<image class="icon" src="../../static/images/commen/password.png" mode=""></image>
				
				<input placeholder="请输入短信验证码" class="uni-input input " />
				<view class="text">
					<text>获取验证码</text>
				</view>
			</view>
			<view class="bm-login_botton" style="background: linear-gradient(112deg, #FF6767 0%, #F2453D 100%);">
				注册/登录
			</view>

			<view class="bm-login-agreement">
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
				width: 640rpx;
				height: 80rpx;
				text-align: left;
				padding-left: 17rpx;
				display: flex;
				align-items: center;
				border-radius: 40rpx;
				overflow: hidden;
				margin-bottom: 50rpx;
				border: 1rpx solid #DEDEDE;
				.icon{
					height: 36rpx;
					width: 36rpx;
				}
				.text {
					width: 150rpx;
					padding: 0 16rpx;
					color: #FA6400;
				}
			}

			.bm-login_botton {
				line-height: 84rpx;
				margin: 0 auto 40rpx;
				width: 640px;
				height: 84px;
				background: linear-gradient(112deg, #FF6767 0%, #F2453D 100%);
				border-radius: 42px;
				font-size: 32px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;

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
