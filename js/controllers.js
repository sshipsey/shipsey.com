angular.module('Shipsey.Controllers', []).

controller('HomeCtrl', function($scope) {
	$scope.test = "Hello";
	console.log("HomeCtrl");
}).
controller('NewsCtrl', function($scope) {
	console.log("NewsCtrl");
}).
controller('PicturesCtrl', function($scope) {
	console.log("PicturesCtrl");
}).
controller('CalendarCtrl', function($scope) {
	console.log("CalendarCtrl");
});
