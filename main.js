require.config({
	paths: {
		'app': 'js/app',
		'angular': 'js/libs/angular-1.6.4.min',
		'uiRouter': 'js/libs/angular-ui-router-0.4.2.min',
		'swiper': 'js/libs/swiper.min',
		'home': 'component/home/home',
		'category': 'component/category/category',
		'mine': 'component/mine/mine',
		'shopcar': 'component/shopcar/shopcar',
	},
	shim: {
		'uiRouter': {
			deps: ['angular']
		},
		'home': {
			deps: ['uiRouter']
		},
		'category': {
			deps: ['home']
		},
		'mine': {
			deps: ['category']
		},
		'shopcar': {
			deps: ['mine']
		},
		'app': {
			deps: ['uiRouter']
		}
	}

});

require(['app'],function(){
		angular.bootstrap(document, ['myModule']);
})