/**
 * Created by harshavardhan on 15-02-20.
 */
describe('posts.ctrl', function () {
	beforeEach(module('app'))
	var $scope

	var mockPostsSvc = {}
	beforeEach(inject(function ($q) {
		mockPostsSvc.fetch = function () {
			var deferred = $q.defer()
			deferred.resolve([
				{username: 'dickeyxxx', body: 'first post'},
				{username: 'dickeyxxx', body: 'second post'}
			])
			return deferred.promise
		}
	}))

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new()
		$controller('PostsCtrl', {
			$scope: $scope,
			PostsSvc: mockPostsSvc
		})
	}))

	it('loads posts from the service', function () {
		$scope.$digest()
		expect($scope.posts).to.have.length(2)
	})
})