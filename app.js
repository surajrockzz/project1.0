var app = angular.module('twitter', [])
app.controller('Postsctrl', ($scope, $http) => {
    $http.get('http://localhost:3000/api/posts')
        .success(function(posts) {
            $scope.posts = posts;
        });
    $scope.addPost = function() {
        if ($scope.postBody) {
            $scope.posts.unshift({
                username: 'suraj',
                body: $scope.postBody
            })
            $scope.postBody = null;
        }
    }
})