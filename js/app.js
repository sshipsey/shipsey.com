angular.module('Shipsey', [
	'Shipsey.Services',
	'Shipsey.Controllers',
    'ngRoute'
    ]).

	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when(
				"/home", {
					templateUrl: "partials/home.html",
					controller: "HomeCtrl"
				}).
			when(
				"/pictures", {
					templateUrl: "partials/pictures.html",
					controller: "PicturesCtrl"
				}).
			when(
				"/news", {
					templateUrl: "partials/news.html",
					controller: "NewsCtrl"
				}).
			when(
				"/calendar", {
					templateUrl: "partials/calendar.html",
					controller: "CalendarCtrl"
				}).
			otherwise( {
				redirectTo: '/home'
			});
	}]);