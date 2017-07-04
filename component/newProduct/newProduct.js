define(['uiRouter','jquery'],function  () {
	angular.module('newProductModule',[])
	.config(function  ($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('newProduct',{
				url:'/newProduct',
				templateUrl:'component/newProduct/newProduct.html',
				css:'component/newProduct/newProduct.css',
				controller:'newProductCtrl'
			})
	})
	.service('newData',function($http) {
		this.getData = function  (keyword) {
			return $http.jsonp('http://qiang.mogujie.com/jsonp/actGroupItem/1?groupKey=11'+ keyword+'&bizKey=rush_main&isNeedNotice=1&callback=JSON_CALLBACK')
		}
//		,
//		this.getShoes = function(){
//			return $http.jsonp('http://qiang.mogujie.com/jsonp/actGroupItem/1?groupKey=11u&bizKey=rush_main&isNeedNotice=1&callback=JSON_CALLBACK')
//		},
//		this.getMore = function(){
//			return $http.jsonp('http://qiang.mogujie.com/jsonp/actGroupItem/1?groupKey=11w&bizKey=rush_main&isNeedNotice=1&callback=JSON_CALLBACK')
//		}
	})

	.controller('newProductCtrl',['$scope','$state','$http','newData',function  ($scope,$state,$http,newData) {
//		$scope.name = '新品首发';
			
		var keyword = "q";
			catchData();
			$('.nav-item').eq(0).addClass("avtive");
			$('.nav-item').on('click',function  () {
			if ($(this).text() == '新衣美妆'){
				keyword = 'q';	
				catchData();	
			}else if ($(this).text() == '鞋包in季'){
				keyword = 'u';
				catchData();
			}else if ($(this).text() == '更多新品'){
				keyword = 'w';	
				catchData();
			}
			$(this).addClass("avtive");
			$(this).siblings().removeClass("avtive");
		})
		
		function catchData () {
			newData.getData(keyword).then(function  (res) {
//			console.log(res);
			$scope.newProduct = res.data.data.itemList;
//			console.log($scope.newProduct);
		})
		}
	}])
})