namespace myapp {

    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: myapp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('allMakes', {
                url: '/makes',
                templateUrl: '/ngApp/views/makes.html',
                controller: myapp.Controllers.MakeController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            })
            .state('allCars', {
                url: '/allcars',
                templateUrl: '/ngApp/views/allcars.html',
                controller: myapp.Controllers.CarController,
                controllerAs: 'controller'
            })
            .state('carDetails', {
                url: '/details/:id',
                templateUrl: '/ngApp/views/details.html',
                controller: myapp.Controllers.DetailsController,
                controllerAs: 'controller'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
