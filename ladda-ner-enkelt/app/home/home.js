/***********************************************************
* Developer: Edvard Busck-Nielsen (@buscedv)       *
* Website: https://enkelt.io          *
* License: MIT License                                     *
***********************************************************/

let homeModule = angular.module('homeModule', [
    'ngRoute',
    'downGitModule',
]);

homeModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: [
                '$scope',
                '$routeParams',
                '$location',
                'toastr',
                'downGitService',

                function($scope, $routeParams, $location, toastr, downGitService) {
                    $scope.downUrl = "";
                    $scope.url = "";
                    $scope.isProcessing = {val: false};
                    $scope.downloadedFiles = {val: 0};
                    $scope.totalFiles = {val: 0};

                    let templateUrl = "https?://github.com/.+/.+";
                    let downloadUrlInfix = "#/home?url=";
                    let downloadUrlPrefix = "https://minhaskamal.github.io/DownGit/"+downloadUrlInfix;

                    if ($routeParams.url) {
                        $scope.url = $routeParams.url;
                    }

                    if ($scope.url.match(templateUrl)) {
                        let parameter = {
                            url: $routeParams.url,
                            fileName: $routeParams.fileName,
                            rootDirectory: $routeParams.rootDirectory
                        };
                        let progress = {
                            isProcessing: $scope.isProcessing,
                            downloadedFiles: $scope.downloadedFiles,
                            totalFiles: $scope.totalFiles
                        };
                        downGitService.downloadZippedFiles(parameter, progress, toastr);

                    } else if ($scope.url !== "") {
                        toastr.warning("Oj, något gick fel!", {iconClass: 'toast-down'});
                        window.location = 'https://enkelt.io'
                    }

                    $scope.catchEnter = function(keyEvent) {
                        if (keyEvent.which === 13) {
                            $scope.download();
                        }
                    };

                    $scope.createDownLink = function() {
                        $scope.downUrl="";

                        if (!$scope.url) {
                            return;
                        }

                        if ($scope.url.match(templateUrl)) {
                            $scope.downUrl = downloadUrlPrefix + $scope.url;
                        } else {
                            toastr.warning("Oj, något gick fel!", {iconClass: 'toast-down'});
                            window.location = 'https://enkelt.io'
                        }
                    };

                    $scope.download = function() {
                        window.location = downloadUrlInfix+$scope.url;
                    };

                }],
            });
    }
]);
