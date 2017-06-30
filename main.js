require.config({
	paths: {
		'app': 'js/app',
		'angular': 'js/libs/angular-1.4.6.min',
		'uiRouter': 'js/libs/angular-ui-router-0.4.2.min',
		'angularCSS': 'js/libs/angular-css1.0.8',
		'swiper': 'js/libs/swiper.min',
		'home': 'component/wrap/home/home',
		'category': 'component/wrap/category/category',
		'mine': 'component/wrap/mine/mine',
		'shopcar': 'component/shopcar/shopcar',
		'wrap':'component/wrap/wrap',
		'login':'component/login/login',
<<<<<<< HEAD
		'searchpage':'component/searchpage/searchpage',
		'iconfont':'js/libs/iconfont'
=======
		'iconfont':'js/libs/iconfont',
		'jquery':'https://cdn.bootcss.com/jquery/2.2.4/jquery.min',
		'register':'component/register/register',
		'chooseCountry':'component/chooseCountry/chooseCountry',
		'findPassWord':'component/findPassWord/findPassWord',
		'loginWithoutPassword':'component/loginWithoutPassword/loginWithoutPassword'
>>>>>>> a7bdd7fc3df62e2fe819bb7d18c984620c8e50ba
	},
	shim: {
		'uiRouter': {
			deps: ['angular']
		},
		'angularCSS':{
			deps:['uiRouter']
		},
		'home': {
			deps: ['angularCSS']
		},
		'category': {
			deps: ['home']
		},
		'mine': {
			deps: ['category']
		},
		'shopcar': {
			deps: ['uiRouter']
		},
		'wrap':{
			deps:['uiRouter']
		},
		'login':{
			deps:['uiRouter']
		},
		'searchpage':{
			deps:['uiRouter']
		},
		'app': {
			deps:['uiRouter']
		}
	}

});

require(['app'],function(){
		angular.bootstrap(document, ['myModule']);
})