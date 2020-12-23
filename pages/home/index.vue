<template>
	<view :class="[theme]" class="td-container">
		<view class="header" style="background-image: url('../../static/images/index/index-back.png');">

			<myStatusBar>
				<view class="header__title">
					东兴边民贸易平台
				</view>
			</myStatusBar>
			<view class="header__content">
				<view class="top">
					<view class="top__left">
						<image src="../../static/images/diandan.png" mode="widthFix" style="width:20rpx;height:20rpx;" />
						张三三
					</view>
					<view class="top__right">
						<image src="../../static/images/diandan.png" mode="widthFix" style="width:20rpx;height:20rpx;" />
					</view>
				</view>
				<view class="middle">
					<view class="">
						前面等待的边民 <text class="" >5433</text>位
					</view>
					<view class="">
						预计打卡后参加交易日期
					</view>
					<view class="">
						2020年12月21日
					</view>
				</view>
				<view class="">
					打卡签到
				</view>
			</view>
		</view>


		<view class="td-address">
			<view class="td-address__main">
				<view class="td-address__title">
					<text class="ao-icon-dizhi_ td-font--basic"></text>
					幸福里
					<text class="ao-icon-arrow-right"></text>
				</view>
				<view class="td-address__right" @click="toggleTheme"><text :class="zhutiIcon">2</text></view>
			</view>
			<view class="td-address__footer">
				<text>
					<text class="ao-icon-icon-test td-font--red icon"></text>
					品质外卖
				</text>
				<text>
					<text class="ao-icon-shoutibao td-font--blue-1 icon"></text>
					预约自提
				</text>
				<text>
					<text class="ao-icon-dizhi_ td-font--blue-2 icon"></text>
					距您120m
				</text>
			</view>
		</view>

		<!-- search -->
		<view class="td-search">
			<view class="uni-form-item uni-column"><input class="uni-input" placeholder="请输入商品名称" /></view>
		</view>

		<!-- 轮播图 -->
		<view class="td-swipe">
			<swiper class="s-swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration">
				<swiper-item v-for="(image, index) in images" :key="index">
					<view class="td-swipe__image">
						<image :src="image" mode="widthFix" style="width:100%;height:auto;" />
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 导航 -->
		<view class="td-nav">
			<view class="td-nav__item">
				<view class="td-nav__image">
					<image src="../../static/images/diandan.png" mode="widthFix" style="width:100%;height:auto;" />
				</view>
				<view class="td-nav__label">点单</view>
			</view>
			<view class="td-nav__item">
				<view class="td-nav__image">
					<image src="../../static/images/haoyou.png" mode="widthFix" style="width:100%;height:auto;" />
				</view>
				<view class="td-nav__label">邀请好友</view>
			</view>
			<view class="td-nav__item">
				<view class="td-nav__image">
					<image src="../../static/images/pintuan.png" mode="widthFix" style="width:100%;height:auto;" />
				</view>
				<view class="td-nav__label">拼团</view>
			</view>
			<view class="td-nav__item">
				<view class="td-nav__image">
					<image src="../../static/images/qiandao.png" mode="widthFix" style="width:100%;height:auto;" />
				</view>
				<view class="td-nav__label">签到</view>
			</view>
			<view class="td-nav__item">
				<view class="td-nav__image">
					<image src="../../static/images/pindan.png" mode="widthFix" style="width:100%;height:auto;" />
				</view>
				<view class="td-nav__label">拼单</view>
			</view>
		</view>

		<!-- 限时秒杀 -->
		<view class="td-timelimit">
			<view class="td-timelimit__header">
				<view class="td-timelimit__header-left">
					<view class="td-timelimit__header-icon"><text class="ao-icon-yuyue"></text></view>
					<view class="td-timelimit__header-label">限时秒杀</view>
					<view class="td-countdown">
						<view class="td-countdown__item">00</view>
						<view class="td-countdown__separate">:</view>
						<view class="td-countdown__item">{{ minuteValue }}</view>
						<view class="td-countdown__separate">:</view>
						<view class="td-countdown__item">{{ secondValue }}</view>
					</view>
				</view>
				<view class="td-timelimit__header-right">
					<text>
						进去逛逛
						<text class="ao-icon-arrow-right"></text>
					</text>
				</view>
			</view>
			<view class="td-timelimit__main">
				<view class="td-goods">
					<view class="td-goods__image">
						<view class="td-goods__image-inner">
							<image src="../../static/images/2.jpg" mode="aspectFill" style="width:100%;height:100%;" />
						</view>
					</view>
					<view class="td-goods__title">柠檬小龙虾沙拉</view>
					<view class="td-goods__descript">
						<text>月售249</text>
						<text>仅剩13份</text>
					</view>

					<view class="td-goods__bottom">
						<view class="td-goods__bottom-left">
							<view class="td-goods__price-sign">￥</view>
							<view class="td-goods__price">14.5</view>
							<view class="td-goods__price-del">20.5</view>
						</view>
						<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
					</view>
					<view class="td-goods__savemony">省4元</view>
				</view>
				<view class="td-goods">
					<view class="td-goods__image">
						<view class="td-goods__image-inner">
							<image src="../../static/images/3.jpg" mode="aspectFill" style="width:100%;height:100%;" />
						</view>
					</view>
					<view class="td-goods__title">水果蔬菜沙拉</view>
					<view class="td-goods__descript">
						<text>月售249</text>
						<text>仅剩13份</text>
					</view>

					<view class="td-goods__bottom">
						<view class="td-goods__bottom-left">
							<view class="td-goods__price-sign">￥</view>
							<view class="td-goods__price">14.5</view>
							<view class="td-goods__price-del">20.5</view>
						</view>
						<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
					</view>
					<view class="td-goods__savemony">省6元</view>
				</view>
				<view class="td-goods">
					<view class="td-goods__image">
						<view class="td-goods__image-inner">
							<image src="../../static/images/2.jpg" mode="aspectFill" style="width:100%;height:100%;" />
						</view>
					</view>
					<view class="td-goods__title">全麦火腿汉堡</view>
					<view class="td-goods__descript">
						<text>月售249</text>
						<text>仅剩13份</text>
					</view>

					<view class="td-goods__bottom">
						<view class="td-goods__bottom-left">
							<view class="td-goods__price-sign">￥</view>
							<view class="td-goods__price">14.5</view>
							<view class="td-goods__price-del">20.5</view>
						</view>
						<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
					</view>
				</view>
				<view class="td-goods">
					<view class="td-goods__image">
						<view class="td-goods__image-inner">
							<image src="../../static/images/2.jpg" mode="aspectFill" style="width:100%;height:100%;" />
						</view>
					</view>
					<view class="td-goods__title">柠檬小龙虾沙拉</view>
					<view class="td-goods__descript">
						<text>月售249</text>
						<text>仅剩13份</text>
					</view>

					<view class="td-goods__bottom">
						<view class="td-goods__bottom-left">
							<view class="td-goods__price-sign">￥</view>
							<view class="td-goods__price">14.5</view>
							<view class="td-goods__price-del">20.5</view>
						</view>
						<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
					</view>
				</view>
				<view class="td-goods">
					<view class="td-goods__image">
						<view class="td-goods__image-inner">
							<image src="../../static/images/2.jpg" mode="aspectFill" style="width:100%;height:100%;" />
						</view>
					</view>
					<view class="td-goods__title">柠檬小龙虾沙拉</view>
					<view class="td-goods__descript">
						<text>月售249</text>
						<text>仅剩13份</text>
					</view>

					<view class="td-goods__bottom">
						<view class="td-goods__bottom-left">
							<view class="td-goods__price-sign">￥</view>
							<view class="td-goods__price">14.5</view>
							<view class="td-goods__price-del">20.5</view>
						</view>
						<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
					</view>
				</view>
			</view>
		</view>

		<!-- 有缘千里来送券 -->
		<view class="td-coupon-wrap">
			<view class="td-coupon-wrap__header">
				<view class="td-coupon-wrap__header-title">有缘千里来送券</view>
				<view class="td-coupon-wrap__header-more">
					更多好券
					<text class="ao-icon-arrow-right"></text>
				</view>
			</view>
			<view class="td-coupon-wrap__main">
				<view class="td-coupon-wrap__row">
					<view class="td-coupon-wrap__item td-coupon">
						<view class="td-coupon__left">
							<text class="td-coupon__sign">￥</text>
							<text class="td-coupon__price">40</text>
						</view>
						<view class="td-coupon__middle">
							<view class="td-coupon__name">通用券</view>
							<view class="td-coupon__descript">满49减20元</view>
						</view>
						<view class="td-coupon__right"><button class="ao-button ao-button--large ao-button--td-basic is-plain">立即领取</button></view>
					</view>
					<view class="td-coupon-wrap__item td-coupon">
						<view class="td-coupon__left">
							<text class="td-coupon__sign">￥</text>
							<text class="td-coupon__price">12</text>
						</view>
						<view class="td-coupon__middle">
							<view class="td-coupon__name">通用券</view>
							<view class="td-coupon__descript">满20减12元</view>
						</view>
						<view class="td-coupon__right"><button class="ao-button ao-button--large ao-button--td-basic is-plain">立即领取</button></view>
					</view>
				</view>
				<view class="td-coupon-wrap__row">
					<view class="td-coupon-wrap__item td-coupon">
						<view class="td-coupon__left">
							<text class="td-coupon__sign">￥</text>
							<text class="td-coupon__price">10</text>
						</view>
						<view class="td-coupon__middle">
							<view class="td-coupon__name">代金券</view>
							<view class="td-coupon__descript">轻食10元代金券</view>
						</view>
						<view class="td-coupon__right"><button class="ao-button ao-button--large ao-button--td-basic is-plain">立即领取</button></view>
					</view>
					<view class="td-coupon-wrap__item td-coupon">
						<view class="td-coupon__left">
							<text class="td-coupon__sign">￥</text>
							<text class="td-coupon__price">20</text>
						</view>
						<view class="td-coupon__middle">
							<view class="td-coupon__name">代金券</view>
							<view class="td-coupon__descript">轻食20元代金券</view>
						</view>
						<view class="td-coupon__right"><button class="ao-button ao-button--large ao-button--td-basic is-plain">立即领取</button></view>
					</view>
				</view>
			</view>
		</view>

		<!-- 种类 -->
		<view class="td-kind">
			<view class="td-kind__nav">
				<view class="td-kind__nav-item" v-for="item in kinds" :key="item.value" :class="{ 'is-active': kindIndex === item.value }"
				 @click="clickKind(item)">
					{{ item.name }}
				</view>
			</view>
			<view class="td-kind__main">
				<view class="td-kind__item">
					<view class="td-kind__item-inner">
						<view class="td-goods">
							<view class="td-goods__image">
								<view class="td-goods__image-inner">
									<image src="../../static/images/2.jpg" mode="aspectFill" style="width:100%;height:100%;" />
								</view>
							</view>
							<view class="td-goods__title">武汉热干面组合套餐</view>
							<view class="td-goods__descript"><text>月售249</text></view>

							<view class="td-goods__bottom">
								<view class="td-goods__bottom-left">
									<view class="td-goods__price-sign">￥</view>
									<view class="td-goods__price">14.5</view>
									<view class="td-goods__price-del">20.5</view>
								</view>
								<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
							</view>
							<view class="td-goods__savemony td-goods__savemony--red is-left">加价购</view>
						</view>
					</view>
				</view>
				<view class="td-kind__item">
					<view class="td-kind__item-inner">
						<view class="td-goods">
							<view class="td-goods__image">
								<view class="td-goods__image-inner">
									<image src="../../static/images/2.jpg" mode="aspectFill" style="width:100%;height:100%;" />
								</view>
							</view>
							<view class="td-goods__title">特色关东煮组合套餐</view>
							<view class="td-goods__descript"><text>月售249</text></view>

							<view class="td-goods__bottom">
								<view class="td-goods__bottom-left">
									<view class="td-goods__price-sign">￥</view>
									<view class="td-goods__price">14.5</view>
									<view class="td-goods__price-del">20.5</view>
								</view>
								<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
							</view>
						</view>
					</view>
				</view>
				<view class="td-kind__item">
					<view class="td-kind__item-inner">
						<view class="td-goods">
							<view class="td-goods__image">
								<view class="td-goods__image-inner">
									<image src="../../static/images/3.jpg" mode="aspectFill" style="width:100%;height:100%;" />
								</view>
							</view>
							<view class="td-goods__title">武汉热干面组合套餐</view>
							<view class="td-goods__descript"><text>月售249</text></view>

							<view class="td-goods__bottom">
								<view class="td-goods__bottom-left">
									<view class="td-goods__price-sign">￥</view>
									<view class="td-goods__price">14.5</view>
									<view class="td-goods__price-del">20.5</view>
								</view>
								<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
							</view>
						</view>
					</view>
				</view>
				<view class="td-kind__item">
					<view class="td-kind__item-inner">
						<view class="td-goods">
							<view class="td-goods__image">
								<view class="td-goods__image-inner">
									<image src="../../static/images/3.jpg" mode="aspectFill" style="width:100%;height:100%;" />
								</view>
							</view>
							<view class="td-goods__title">特色关东煮组合套餐</view>
							<view class="td-goods__descript"><text>月售249</text></view>

							<view class="td-goods__bottom">
								<view class="td-goods__bottom-left">
									<view class="td-goods__price-sign">￥</view>
									<view class="td-goods__price">14.5</view>
									<view class="td-goods__price-del">20.5</view>
								</view>
								<view class="td-goods__bottom-right"><text class="ao-icon-add-fill"></text></view>
							</view>
						</view>
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

		data() {
			return {
				title: '',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,

				searchValue: '', //搜索框
				inputValue: '',
				showClearIcon: false,

				images: ['../../static/images/1.jpg', '../../static/images/2.jpg', '../../static/images/1.jpg',
					'../../static/images/2.jpg'
				],

				kindIndex: 0,
				kinds: [{
						name: '猜你喜欢',
						value: 0
					},
					{
						name: '营养早餐',
						value: 1
					},
					{
						name: '夏季冰爽',
						value: 2
					},
					{
						name: '茶点小食',
						value: 3
					},
					{
						name: '工作简餐',
						value: 4
					},
					{
						name: '美味宵夜',
						value: 5
					}
				],
				footIndex: 0,
				footDatas: [{
						name: '首页',
						icon: 'ao-icon-shouye',
						value: 0
					},
					{
						name: '会员码',
						icon: 'ao-icon-erweima',
						value: 1
					},
					{
						name: '我的',
						icon: 'ao-icon-wode',
						value: 2
					}
				],
				totaltime: 1800, //30分钟
				residueTime: 1800,
				minuteValue: '00',
				secondValue: '00',

			};
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
			this.$http.get('login').then((res) => {
				console.log(res)


			}).catch((error) => {
				console.log(error)
			})

			// this.$http.post('login',{nane:'杰克'}).then((res)=>{
			// 			 console.log(res)

			// }).catch((error)=>{
			// 			  console.log(res)
			// })



		},
		onLoad() {},
		methods: {

			toggleTheme() {
				this.$store.commit('toggleTheme');
			},
			// 倒计时
			countdown() {
				this.showDownTime();
				this.residueTime--;
				if (this.residueTime < 0) {
					this.residueTime = this.totaltime;
				}
				setTimeout(() => {
					this.countdown();
				}, 1000);
			},
			//显示倒计时
			showDownTime() {
				let min = parseInt(this.residueTime / 60);
				let sec = this.residueTime % 60;
				this.minuteValue = min < 10 ? '0' + String(min) : min;
				this.secondValue = sec < 10 ? '0' + String(sec) : sec;
			},
			clickKind(item) {
				this.kindIndex = item.value;
			},
			clickFoot(item) {
				this.footIndex = item.value;
			}
		},
		mounted() {
			this.countdown();
		}
	};
</script>
<style lang="less" scoped>
	.td-container {
		.header {
			color: #FFFFFF;
			padding-left: 24rpx;
			height: 540rpx;
			&__title {
				font-size: 36rpx;
				height: 63rpx;
				line-height: 63rpx;
			}

		}
	}

	.s-swiper {
		height: 390rpx;
	}

	.td-swipe__image {
		height: 100%;
	}


	uni-image {
		height: 100%;
		width: 100%;
	}
</style>
