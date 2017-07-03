define(['uiRouter','swiper','jquery'],function  () {
	angular.module('daPaiManJianModule',[])
	.config(function  ($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('daPaiManJian',{
				url:'/daPaiManJian',
				templateUrl:'component/daPaiManJian/daPaiManJian.html',
				css:'component/daPaiManJian/daPaiManJian.css',
				controller:'daPaiManJianCtrl'
			})
	})
	.service('getAllData',function  ($http) {
		this.getBannerData = function  () {
			return $http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=15711%2C41510&callback=JSON_CALLBACK')
		},
		this.getHotHandschop = function  () {
			return $http.jsonp('http://tuan.mogujie.com/tuanBrand/indexNew?channel=&callback=JSON_CALLBACK')
		},
		this.getDataList= function  () {
			return $http.jsonp('http://tuan.mogujie.com/tuanItem?bizKey=eventwall&day=0&page=1&pageSize=30&tCatIds=562&callback=JSON_CALLBACK')
		}

	})
	.service('swiper', ['$timeout', function($timeout) {
			this.swiper = function() {
				$timeout(function() {
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: 1000,
						observer: true,
						observeParents: true,
						loop: true,
						// 如果需要分页器
						pagination: '.swiper-pagination',
					})
				}, 100)
			}
		}])
	
	.controller('daPaiManJianCtrl',['$scope','$state','$http','swiper','getAllData',function  ($scope,$state,$http,swiper,getAllData) {
		getAllData.getBannerData().then(function  (res) {
//			console.log(res);	
			$scope.swiperList = res.data.data[15711].list;
			swiper.swiper();
			$scope.banner = res.data.data[41510].list;
		})
		getAllData.getHotHandschop().then(function  (res) {
//			console.log(res);	
		})
		getAllData.getDataList().then(function  (res) {
			console.log(res);
			$scope.brandGoods = res.data.result.eventwall.list;
			console.log($scope.brandGoods);
			console.log($index)
//			for (var i = 0;i<$scope.brandGoods.length;i++){
////				console.log($scope.brandGoods.length);//  30个30
////				console.log($scope.brandGoods[i]);//30个obj对象
//				if (i>=0 && i <=5 ){
//				$scope.result1.push($scope.brandGoods[i]);
//					console.log($scope.result);
//				}else if(i<=6 && i>=11){
//					$scope.result2.push($scope.brandGoods[i]);
//					console.log($scope.result);
//				}
//			}
		})
	}])
})