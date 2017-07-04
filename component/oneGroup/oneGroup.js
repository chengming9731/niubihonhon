define(['uiRouter', 'swiper'], function() {
	angular.module('oneGroupModule', [])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('oneGroup', {
					url: '/oneGroup',
					templateUrl: 'component/oneGroup/oneGroup.html',
					css: 'component/oneGroup/oneGroup.css',
					controller: 'oneGroupCtrl'
				})
		})
		.service('getoneGroupData', function($http) {
			this.getHeadeList = function() {
				return $http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=51233%2C56675&callback=JSON_CALLBACK');
			},
			this.getInfoListData = function  () {
				return $http.jsonp('http://api.mogujie.com/h5/mwp.darwin.get/3/?mw-appkey=100028&mw-t=1499168773208&mw-ttid=NMMain%40mgj_h5_1.0&mw-sign=57cf5e327f3577b12d529b3bedcd7188&data=%7B%22cKey%22%3A%22mwp_mait%22%2C%22pid%22%3A%2248428%22%2C%22page%22%3A%221%22%2C%22fcid%22%3A%22%22%2C%22pageSize%22%3A%2224%22%2C%22cpc_offset%22%3A%220%22%2C%22offset%22%3A%22%22%7D&callback=JSON_CALLBACK');
			}

		})
		.service('swiper', ['$timeout', function($timeout) {
			this.swiper = function() {
				$timeout(function() {
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: 10000,
						observer: true,
						observeParents: true,
						loop: true,
						// 如果需要分页器
						pagination: '.swiper-pagination',
					})
				}, 100)
			}
		}])
		.controller('oneGroupCtrl', ['$scope', '$state', '$http', 'swiper', 'getoneGroupData', function($scope, $state, $http, swiper, getoneGroupData) {
			//		$scope.name = '正在搭建中......';
			getoneGroupData.getHeadeList().then(function(res) {
				console.log(res);
				swiper.swiper();
				$scope.navList = res.data.data[51233].list;
				console.log($scope.navList);
			})
			getoneGroupData.getInfoListData().then(function  (res) {
				console.log(res);
			})
		}])
})