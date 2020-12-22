const state = {
 	name: 'theme-default',
 }

 const getters = {}

 const mutations = {

 	setTheme(state, theme) {
 		// state = userInfo; //不可以直接赋值

 		state.name = theme;
 		let obj = {
 			"theme-default": {
 				frontColor: '#000000',
 				// backgroundColor: 'rgb(247,249,252)',
 				backgroundColor: '#f7f9fc',
 				// animation: {
 				// 	duration: 400,
 				// 	timingFunc: 'easeIn'
 				// }
 			},
 			"theme-dark": {
 				frontColor: '#ffffff',
 				// backgroundColor: 'rgb(44,44,44)',
 				backgroundColor: '#2c2c2c',
 				// animation: {
 				// 	duration: 400,
 				// 	timingFunc: 'easeIn'
 				// }
 			},
 		};
 		uni.setNavigationBarColor({ ...obj[theme]
 		});
		
		 //  #ifdef  MP-WEIXIN 
		// wx.setNavigationBarColor({ ...obj[theme]
		// });
		//   #endif  

		

 	},
 	toggleTheme(state) {
 		let themeName = state.name;

 		themeName = themeName === 'theme-default' ? 'theme-dark' : 'theme-default';

 		mutations.setTheme(state, themeName);
 	}

 }

 const actions = {}

 export default {
 	state,
 	getters,
 	mutations,
 	actions
 }
