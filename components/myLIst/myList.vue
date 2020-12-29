<template>
	<view>
		<slot :row="item" :index="index" v-for="(item, index) in list"   ></slot>
		<view v-if="finished" class="over-text">
			 {{finishedText}} 
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			finishedText: {
				type: String,
				default: "没有更多了",
			},
			errorText: {
				type: String,
				default: "请求失败，点击重新加载",
			},
			nodataText: {
				type: String,
				default: "暂无数据~",
			},

			// 请求参数
			postData: {
				type: Object,
			},

			url: {
				type: String,
				default: "all",
			},

			// 是否是静态json
			isStatic: {
				type: Boolean,
				default: false,
			},

			// ajax请求过程中是否loading
			ajaxLoading: {
				type: Boolean,
				default: false,
			},

			// 请求出错时是否自动弹出提示，默认true
			toastFail: {
				type: Boolean,
				default: true,
			},

			// 筛选ajax返回的数据
			onFilterData: {
				type: Function,
				default (res) {
					return res;
				},
			},

			// 成功回调
			onSuccess: {
				type: Function,
			},

			// 失败回调
			onError: {
				type: Function,
			},
			// 接口类型
			methodType: {
				type: String,
				default: "doGet",
			},
		},

		data() {
			return {
				list: [1,2,3,4],
				total: 0, // 列表总数量
				loading: false, // 是否在加载中
				finished: false, // 是否全部加载完毕（没有更多了）
				refreshing: false, // 下拉刷新，是否加载中
				error: false, // 是否请求出错
				pageNum: 0, // 当前已加载的页数
			}
		},
		created() {
			//this.onRefresh()

		},
		methods: {
			/**
			 * @description: 滚动到底部加载
			 * @param {}
			 * @return:
			 */
			onLoad() {

				this.reqList((this.pageNum += 1));
			},

			/**
			 * @description: 下拉刷新
			 * @param {type}
			 * @return:
			 */
			onRefresh() {


				// 设置列表状态为未完成
				this.finished = false;

				//  数组置空
				this.list.length = 0
				this.total = 0 // 返回总数量置空

				// 设置列表为加载状态
				this.loading = true;

				// 将页数设置到1
				this.pageNum = 1;
				this.reqList(this.pageNum);
			},

			/**
			 * @description: 请求后台 列表数据
			 * @param {number} pageNum 页数
			 * @return:
			 */
			reqList(pageNum = 1) {
				let obj = this;

				// 设置请求未出错
				obj.error = false;
				let postData = this._postData;
				postData.pageNum = pageNum;

				this.axios[this.methodType]({
						isStatic: this.isStatic, // 是否是静态json
						url: this.url,
						loading: this.ajaxLoading, // 是否显示加载中，默认false
						toastFail: this.toastFail, // 请求出错时是否自动弹出提示，默认true
						data: postData,
					})
					.then((res) => {
						// 如果筛选方法存在
						res = this.onFilterData(res);

						let data = res;

						// 如果是下拉刷新，则设置下拉刷新已完成,并清空列表
						if (obj.refreshing) {
							obj.list = [];
							obj.refreshing = false;
						}


						// 添加列表数据
						(data.rows || []).forEach((item) => obj.list.push(item));
						obj.total = data.total;

						// 设置加载完毕
						obj.loading = false;

						// 设置当前页
						// obj.pageNum = data.pageNum; // data.page是第n页的时候
						// obj.pageNum = parseInt(data.pageNum / data.pageNum) + 1; // data.page是第n条数据的时候，比如第一页是0，第2页是10，第3页是20

						// 如果已经是最后一页，设置加载完毕


						if (obj.list.length + 1 > data.total) {
							obj.finished = true;
						}

						this.onSuccess && this.onSuccess(res);
					})
					.catch((error) => {
						// res.status不为0 或者 404等都走catch

						// this.$toast.fail(error.msg||error.respDesc||error.errorMessage); // 手动弹出错误提示

						// 请求错误
						obj.error = true;
						// 设置加载完毕
						obj.loading = false;

						if (obj.refreshing) {
							obj.refreshing = false;
						}

						this.onError && this.onError(error);
					});
			},
		},
	}
</script>

<style lang="less" scoped>
	.over-text {
		height: 81rpx;
		line-height: 81rpx;
		text-align: center;
		color: #a99797;
	}
</style>
