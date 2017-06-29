define(['uiRouter'],function(){
	var categoryApp = angular.module('categoryModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('category',{
				url:'/category',
				templateUrl:'component/category/category.html'
			});
		});
});
