var angular = require('angular');
var bulk = require('bulk-require');
var info = require('../../package.json');

var app = module.exports = angular.module('app', [
        require('angular-ui-bootstrap')
])
    .run(/*@ngInject*/function ($rootScope) {
        $rootScope.$system = info;
    });

// include all js files
bulk(__dirname, ['./*/**/*.js']);

// bootstrap
// angular.element(document).ready(function() {
//     angular.bootstrap(document, ['app']);
// });