export default {
	
	login: {
		//登录
		// uri: 'appLoginValidate',
		uri: '/static/json/user/userInfo.json',
	},
	reqPublicKey: {
		//获取公钥
		// uri: 'appLogin',
		uri: 'app/getpublickey',
	},
	
	getAppUserToken: {
		//校验token是否过期
		// uri: 'getAppUserToken',
		uri: 'app/checkuser',
	},
	appLogout: {
		//退出
		uri: "app/logout"
	},
	backlogs: {
		//待办事项
		uri: 'backlogs',
	},
	loanoperationinfos:{
		//获取贷款业务页面的菜单和按钮
		uri:"loanoperationinfos"
	},
	reqEnterpriseApplyforms:{
		//查看企业贷款申请--查看申请单详细 请求方式：http get
		uri:"enterprise/applyforms/:id",
		    auth: 'required',
	},
	reqPersonalApplyforms:{
		//查看个人贷款申请--查看申请单详细 请求方式：http get
		uri:"personal/applyforms/:id"
	},
	reqClientconstants:{
		//获取常量
		uri:"clientconstants"
	},
	reqSurveyProjectBaseInfo:{
		//获取尽调的项目基本信息
		uri:"surveys/project/:id"
	},
	reqEnterpriseSurveyMunu:{
		//获取企业客户的尽调菜单
		uri:"enterprise/surveymenus/:id"
	},
	reqPersonalSurveyMunu:{
		//获取个人客户的尽调菜单
		uri:"personal/surveymenus/:id"
	},
	reqSurveysLoanAndPayments:{
		//获取尽调-借款用途及还款来源分析
		uri:"surveys/loanandpayments/:id"
	},
	reqSurveysConclusions:{
		//获取尽调-项目结论
		uri:"surveys/conclusions/:id"
	},
	saveLoan:{
		//保存申请单
		uri:"loans/save"
	},
	submitLoan:{
		//提交申请单
		uri:"loans/submit"
	},
	createSurveys:{
		//创建尽调
		uri:"surveys/create"
	},
	saveSurveys:{
		//暂存尽调
		uri:"surveys/save"
	},
	surveysReview:{
		//复核员复核尽调
		uri:"surveys/review"
	},
	loanDownloadlist:{
		//打印表单列表
		uri:"loan/downloadlist/:id"
	},
	reqLoanClientMaterial:{
		//请求申请人材料
		uri:"loan/client/materiallists"
	},
	uploadLoanClientMaterial:{
		//上传申请人材料
		uri:"loan/client/materials/upload"
	}
	
	
	// 可以设置接口是否需要授权访问
	// login: {
	//     uri: "login",
	//     auth: false
	// },
	
	// 支持参数
	// 'resource.detail': {
	//     uri: 'resources/:id',
	//     auth: 'required',
	// }
}