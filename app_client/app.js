
function config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })

        .when('/addItem/', {
            templateUrl: 'addItem/additem.html',
            controller: 'addItemCtrl',
            controllerAs: 'vm'
        })

        .when('/item/:itemId', {
            templateUrl: 'detail/detail.view.jade',
            controller: 'detailCtrl',
            controllerAs: 'vm'
        })

        .when('/bid/:itemId', {
            templateUrl: 'bid/viewbid.html',
            controller: 'bidCtrl',
            controllerAs: 'vm'
        })

        .otherwise({redirectTo: '/'});
}


angular.module('bidderApp', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', config]);
