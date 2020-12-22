<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// #endif
			// uni.navigateTo({
			// 	url:'pages/home/index'
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	/* @import './common/au-less/au.less'; 不能在此引用less,必须在main.js里面引用,否则在app端会无法找到样式,还会影响其他css文件*/
	@import './common/uni.css';

	/*每个页面公共css */

	/* 页面容器uni-page-body标签的样式 */
	page {
		/* background-color: red; */
	}
</style>
 
