define(['uiRouter'],function(){
	var categoryApp = angular.module('categoryModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('wrap.category',{
				url:'/category',
				templateUrl:'component/wrap/category/category.html',
				css:'component/wrap/category/category.css',
				controller:''
			});
		});
});
