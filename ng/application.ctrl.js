/**
 * Created by harshavardhan on 15-02-17.
 */
angular.module('app')
	.controller('ApplicationCtrl',function ($scope,UserSvc,$rootScope) {
		$scope.$on('login', function (_, user) {
			$rootScope.currentUser = user
		})
		$scope.logout = function() {
			$scope.currentUser = '';
			UserSvc.logout();
		}
	})