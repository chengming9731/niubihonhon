define(['uiRouter'],function(){
	var shopcarApp = angular.module('shopcarModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('wrap.shopcar',{
				url:'/shopcar',
				templateUrl:'component/wrap/shopcar/shopcar.html',
				css:'component/wrap/shopcar/shopcar.css',
				controller:''
			});
		});
});
