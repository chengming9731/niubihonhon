define(['uiRouter'],function(){
	var shopcarApp = angular.module('shopcarModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('shopcar',{
				url:'/shopcar',
				templateUrl:'component/shopcar/shopcar.html'
			});
		});
});
