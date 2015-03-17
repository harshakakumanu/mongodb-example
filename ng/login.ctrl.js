/**
 * Created by harshavardhan on 15-02-17.
 */
angular.module('app')
	.controller('LoginCtrl', function ($scope, UserSvc) {
		$scope.login = function (username, password) {
			UserSvc.login(username, password)
				.then(function (response) {
					$scope.$emit('login', response.data)
				})
		}
	})