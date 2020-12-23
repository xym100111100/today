<template>
	<view class="my-status-bar"  :style="statusTop">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "MyStatusBar",
		props: {
			styles: {
				type: Object,
				default: () => {
					{
						
					}
				}
			}
		},
		data() {
			return {
				myStatusBar:'my-status-bar',
				statusTop: 'padding-top:0rpx',
			}
		},
		created() {
			this.GetStatusBarHeight();
		},
		methods: {
			GetStatusBarHeight() {
				let that = this;
				wx.getSystemInfo({
					success: function(res) {
						that.statusTop = 'padding-top:' + parseInt(res.statusBarHeight + 7) + 'px';
					},
				});
			},

		}
	}
</script>
<style lang="less" scoped>
	.my-status-bar{
		height:60rpx;
	}

</style>
