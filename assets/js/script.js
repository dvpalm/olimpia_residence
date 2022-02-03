let app = angular.module('olimpia_residence_caserta', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'routes/home.html' })
        .when('/home', { templateUrl: 'routes/home.html' })
        .when('/rooms', { templateUrl: 'routes/rooms.html' })
        .when('/rooms/deluxe', { templateUrl: 'routes/deluxe.html' })
        .when('/rooms/superiorplus', { templateUrl: 'routes/superiorplus.html' })
        .when('/rooms/superior', { templateUrl: 'routes/superior.html' })
        .when('/contact', { templateUrl: 'routes/contact.html' })
        .otherwise({ template: '<h1>Errore 404! Pagina non trovata</h1>' })
});

app.controller('classLink', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
})

function chiudi() {
    $('.navbar-collapse').collapse('hide');
}
