define(['uiRouter','swiper'],function(){
	var homeApp = angular.module('homeModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('wrap.home',{
				url:'/home',
				templateUrl:'component/wrap/home/home.html',
				controller:'homeCtrl',
				css:'component/wrap/home/home.css'	
			});
		})
		.service('getData',function  ($http) {
			//获取轮播图数据
				this.getAllData = function  () {
					return $http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=JSON_CALLBACK')	
				},
				this.getTime = function  () {
					return $http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=JSON_CALLBACK')
				},
				this.getCuxiao = function  () {
					return $http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=JSON_CALLBACK')
				},
				this.getHotMarket = function  () {
					return $http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=JSON_CALLBACK')
				},
				this.getCaiNiXiHuan = function  () {
					return $http.jsonp('http://list.mogujie.com/wall/s?q=%E9%9E%8B%E5%AD%90&acm=3.mce.1_10_.37705.28553.qtIkXqo2kaNSe.p_0_615187923-mid_37705-lc_201&ptp=m1.fKiTO.0.0.DMRauh&callback=JSON_CALLBACK')
				}
		})
		.service('swiper',['$timeout',function($timeout){		
		    	this.swiper = function(){
		    			$timeout(function(){
		    				var mySwiper = new Swiper ('.swiper-container', {
							autoplay:1000,
							observer:true,observeParents:true,
//							autoplay;DisableOnInteraction:true,
						    loop: true,  
						    // 如果需要分页器
						    pagination: '.swiper-pagination',
						  }) 
		    			},100)
		    		}
    		}])
		.controller('homeCtrl',['$scope','$http','getData','swiper','$interval',function($scope,$http,getData,swiper,$interval) {
				getData.getAllData().then(function(res) {
				
				$scope.swiperList = res.data.data[51822].list;
				$scope.dapaiList = res.data.data[51827].list;
				swiper.swiper();
        		})
				getData.getTime().then(function(res) {
					console.log(res);
					$scope.seckill = res.data.data[41119].list;
					$scope.time = $scope.seckill[0].time;
					console.log($scope.seckill);			
					$interval(function  () {
					$scope.time--;
//					console.log($scope.time);	
					$scope.minutes =parseInt($scope.time/60%60);
					$scope.hours = parseInt($scope.time /60/60%24);
					$scope.seconds = parseInt($scope.time%60);			
					if ($scope.seconds < 10){
						$scope.seconds = '0'+$scope.seconds;
					};
					if ($scope.minutes <10){
						$scope.minutes = "0"+$scope.minutes;
					};
					if ($scope.hours <10){
						$scope.hours = '0'+$scope.hours;
					};
					},1000)
					
					$scope.goods = res.data.data[41119].list[0].list;
					console.log($scope.goods);
				})
					
				getData.getCuxiao().then(function  (res) {
					$scope.cuxiao = res.data.data[51833].list;
					console.log($scope.cuxiao);
					for (var i = 0;i<$scope.cuxiao.length;i++){
						$scope.cuxiao1 = $scope.cuxiao[0];
						$scope.cuxiao2 = $scope.cuxiao[1];
						$scope.cuxiao3 = $scope.cuxiao[2];
					}
					console.log($scope.cuxiao0);
				})
				getData.getHotMarket().then(function  (res) {
					$scope.hotMarket = res.data.data[51836].list;
				})
				
				getData.getCaiNiXiHuan().then(function  (res) {
					console.log(res);
					$scope.caiNiXihuanTitle = res.data.result.wall.title;
					$scope.caiNiXihuan = res.data.result.wall.docs;
				})
				
		}])
});
